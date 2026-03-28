import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

import authRoutes from './routes/auth';
import ngoRoutes from './routes/ngo';
import requestRoutes from './routes/requests';
import donationRoutes from './routes/donations';
import notificationRoutes from './routes/notifications';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });

export const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/ngo', ngoRoutes);
app.use('/requests', requestRoutes);
app.use('/donations', donationRoutes);
app.use('/notifications', notificationRoutes);

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  socket.on('join_chat', (chatId) => socket.join(chatId));
  socket.on('send_message', async ({ chatId, senderId, text }) => {
    try {
      const message = await prisma.message.create({ data: { chatId, senderId, messageText: text } });
      socket.to(chatId).emit('receive_message', { chatId, senderId, text, timestamp: message.timestamp });
    } catch (error) {
      console.error(error);
    }
  });
  socket.on('disconnect', () => console.log('User disconnected'));
});

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
