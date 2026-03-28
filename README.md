# 🤝 Helping Connect – Bridging Needs with Helping Hands

## 📌 Overview

Helping Connect is a web-based platform designed to bridge the gap between **needy individuals**, **donors**, and **verified NGOs**.

The platform enables real-time coordination of help requests and donation offers through a structured and transparent system where NGOs act as trusted intermediaries.

---

## 🚨 Problem Statement

Millions of people struggle with poverty, hunger, and lack of healthcare. Although NGOs and donors exist, there is no centralized platform to efficiently connect those in need with verified helpers. This results in delays, lack of trust, and inefficient distribution of resources.

---

## 💡 Our Solution

Helping Connect provides a **multi-role platform** where:

* Needy users can raise help requests
* Donors can offer resources (food, clothes, money, etc.)
* NGOs manage, verify, and distribute help efficiently

The system ensures:

* Faster response time
* Better coordination
* Increased transparency

---

## 🔁 Core Workflows

### 1️⃣ Needy → NGO → Donor Flow

* Needy user raises a request
* NGOs receive and verify the request
* NGOs broadcast to donors
* Donors respond
* Help is delivered

---

### 2️⃣ Donor → NGO Flow

* Donor creates a donation offer
* NGOs request the donation with justification
* Donor selects the NGO
* NGO collects and distributes resources

---

## 🚀 Key Features

### 👥 Multi-Role System

* Needy Users
* Donors (Individual & Organization like hotels/mess)
* NGOs

---

### 📦 Request-Based Help System

* Raise help requests
* Track request status

---

### 🎁 Donation Offer System

* Donors can offer items/resources
* NGOs can request donations

---

### 🏢 NGO Verification System

* OTP verification
* Document upload
* Admin approval

---

### 📢 NGO Broadcast System

* NGOs broadcast verified requests to multiple donors
* Improves response time and reach

---

### ⚖️ Conflict Resolution System

* Multiple NGOs can request a donation
* Each provides justification
* Donor selects the NGO based on impact

---

### 💬 Real-Time Chat

* Separate chat system for:

  * Requests
  * Donations
  * General communication

---

### ⭐ Rating & Transparency

* Donors can rate NGOs
* NGOs upload proof of help

---

## 🧠 Unique Selling Points

* Dual-flow system (Demand + Supply driven)
* NGO-mediated trust layer
* Impact-based donation decision system
* Real-time coordination between stakeholders

---

## 🌍 SDG Alignment

* **No Poverty** – Financial and essential support
* **Zero Hunger** – Food distribution through donors and NGOs
* **Good Health & Well-being** – Medical assistance coordination

---

## 🏗️ Tech Stack

### Frontend

* React
* Tailwind CSS

### Backend

* Node.js
* Express

### Database

* PostgreSQL
* Prisma ORM

### Realtime

* Socket.IO

---

## 📂 Project Structure

```
Helping_Hands/
 ├── frontend/
 ├── backend/
 │    ├── prisma/
 │    ├── routes/
 │    ├── controllers/
 │    └── services/
 └── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone <your-repo-url>
cd Helping_Hands
```

### 2. Setup Backend

```
cd backend
npm install
npx prisma generate
npm run dev
```

### 3. Setup Frontend

```
cd frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file in backend:

```
DATABASE_URL=your_database_url
```

---

## 🎯 Future Enhancements

* AI-based NGO matching
* Geo-location tracking
* Push notifications
* Mobile application
* Fraud detection system

---

## 👨‍💻 Team

* Team of 5 developers
* Roles: Frontend, Backend, Database, Realtime, Integration

---

## 🏁 Conclusion

Helping Connect is not just a platform — it is a **coordinated social support system** that ensures help reaches the right place at the right time with trust and transparency.

---

## ⭐ Support

If you like this project, give it a star ⭐ and support the idea of connected social help.
