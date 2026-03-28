import React, { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import { Send } from 'lucide-react';

const SOCKET_SERVER_URL = 'http://localhost:5000';

interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
}

const ChatUI = ({ chatId, currentUserId }: { chatId: string; currentUserId: string }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    // Connect to the backend Socket.IO server securely
    const newSocket = io(SOCKET_SERVER_URL);
    setSocket(newSocket);

    // Join the specific room (Donation or Request chat)
    newSocket.emit('join_chat', chatId);

    // Listen for incoming messages
    newSocket.on('receive_message', (message: Message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [chatId]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && socket) {
      const msgData = {
        chatId,
        senderId: currentUserId,
        text: input,
      };
      // Optimistic update for seamless UI perception
      setMessages((prev) => [
        ...prev, 
        { id: Date.now().toString(), senderId: currentUserId, text: input, timestamp: new Date().toISOString() }
      ]);
      socket.emit('send_message', msgData);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
        <h3 className="font-bold text-gray-800">Live Conversation</h3>
        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">Connected</span>
      </div>
      <div className="flex-1 p-4 overflow-y-auto space-y-4 max-h-96 min-h-64 bg-gray-50">
        {messages.length === 0 ? (
          <div className="h-full flex items-center justify-center text-gray-400 text-sm">No messages yet. Say hi!</div>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.senderId === currentUserId ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs p-3 rounded-2xl ${msg.senderId === currentUserId ? 'bg-brand-blue text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <form onSubmit={sendMessage} className="p-4 border-t border-gray-200 flex gap-2 bg-white">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
          placeholder="Type your message..." 
        />
        <button type="submit" className="bg-brand-teal text-white p-2 rounded-full hover:bg-teal-700 transition">
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default ChatUI;
