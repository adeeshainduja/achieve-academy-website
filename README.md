# 🎓 Achieve Academy Website

An AI-powered educational website developed for **Achieve Academy**. This project provides course information, admissions guidance, fee details, and an intelligent AI assistant to help prospective students.

---

## 🚀 Live Demo

### 🌐 Frontend
https://achieve-academy-website.vercel.app

### 🤖 AI Chatbot
Integrated with Google Gemini AI

### ⚙️ Backend API
https://achieve-academy-website.onrender.com

---

## 🤖 Project Overview

Achieve Academy is a modern educational website designed to provide students and 
parents with easy access to academic information through an AI-powered assistant. The 
platform enables users to explore courses, admissions, subjects, fees, and contact details 
while interacting with an intelligent chatbot for instant support. 

The application is built using a React + TypeScript frontend and a FastAPI backend, 
connected through REST APIs. The backend integrates the Google Gemini API to deliver AI
generated responses and uses a Neon PostgreSQL cloud database to manage academy
related information efficiently. 

To enhance user engagement, the website incorporates interactive Three.js 3D elements, 
while custom 3D assets were created using Blender. The user interface and overall user 
experience were first designed in Figma, ensuring a clean, modern, and responsive design 
before implementation. 

The AI assistant is restricted to answering only publicly available academy information, 
ensuring that confidential data such as student records, examination results, attendance, 
payments, and internal documents remain protected. 

---

## ✨ Features

- Modern responsive UI
- Interactive course catalogue
- Admissions information
- Fee information
- Contact information
- AI-powered chatbot using Google Gemini
- Quick action buttons
- Mobile-friendly design
- FastAPI REST API backend
- Vercel + Render deployment
- Cloud-hosted Neon PostgreSQL database integration 

---

## 🛠 Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Three.js

### Backend

- FastAPI
- Python
- Google Gemini API
- Uvicorn

### Deployment

- Vercel
- Render

### UI/UX Design 

- Figma
- Blender

### Database

- Neon PostgreSQL

---

## 📂 Project Structure

```
achieve-academy-website/
│
├── achieve-academy-frontend/
│   ├── src/
│   ├── public/
│   └── ...
│
├── achieve-academy-backend/
│   ├── app/
│   │   ├── routers/
│   │   ├── services/
│   │   ├── prompts/
│   │   ├── schemas/
│   │   └── main.py
│   └── requirements.txt
│
└── README.md
```

---

## ⚡ Installation

### Clone Repository

```bash
git clone https://github.com/adeeshainduja/achieve-academy-website.git
```

```
cd achieve-academy-website
```

---

### Frontend

```bash
cd achieve-academy-frontend

npm install

npm run dev
```

Runs on

```
http://localhost:5173
```

---

### Backend

```bash
cd achieve-academy-backend
```

Create a `.env`

```env
GEMINI_API_KEY=YOUR_API_KEY
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run server

```bash
uvicorn app.main:app --reload
```

Runs on

```
http://127.0.0.1:8000
```

Swagger

```
http://127.0.0.1:8000/docs
```

---

## 🤖 AI Assistant

The chatbot is powered by **Google Gemini** and can answer questions related to:

- Courses
- Admissions
- Fees
- Contact information
- General Achieve Academy inquiries

---

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop
- Tablet
- Mobile

---

## 📸 Screenshots

### Home Page

_Add screenshots here_

### AI Assistant

_Add screenshots here_

---

## 📄 License

This project was developed as an educational assignment.

---

## 👨‍💻 Developer

**Adeesha Induja**

Software Engineering Undergraduate

University of Sri Jayewardenepura

GitHub:
https://github.com/adeeshainduja

LinkedIn:
https://www.linkedin.com/in/adeeshainduja
