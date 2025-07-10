# 💬 Snappy – Real-Time Chat App

A full-stack real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js) and Socket.io. Users can register, log in securely, and chat with other users in real time.

---

## 🚀 Features

- 🔐 Secure user registration and login  
- 💬 Real-time 1-on-1 messaging via Socket.io  
- 🧠 Persistent chat history with MongoDB  
- 🧾 JWT-based authentication  
- 🎨 Responsive and sleek UI  
- 🐳 Dockerized setup for easy deployment  

---

## 🛠️ Tech Stack

| Layer         | Tech                            |
|--------------|----------------------------------|
| **Frontend** | React, styled-components, Axios |
| **Backend**  | Node.js, Express.js, Socket.io  |
| **Database** | MongoDB with Mongoose ORM       |
| **Auth**     | Bcrypt, JWT                     |
| **DevOps**   | Docker, Docker Compose          |

---





![login page](./images/snappy_login.png)

![home page](./images/snappy.png)

## Running the App Locally
1.Clone the repository


git clone https://github.com/your-username/chat-app-react-nodejs.git
cd chat-app-react-nodejs

2.Install Dependencies

# Backend
cd server
yarn install

# Frontend
cd ../public
yarn install


3.Start The App

# Start backend
cd ../server
yarn start

# Start frontend (in another terminal)
cd ../public
yarn start


## Docker Setup

docker compose up --build

Frontend: http://localhost:3000

Backend: http://localhost:5000

## 🧠 Future Improvements

- ✏️ Typing indicators for active chats  
- 👥 Group chat functionality  
- ✅ Message read receipts  
- 🖼️ Profile picture upload and management  
- 📱 Full mobile responsiveness  
- 🔐 OAuth login with Google/GitHub  
- ☁️ File/image sharing in chat  
- 🚀 Deployment on platforms like Render, Vercel, or Heroku  
- 🔔 Push notifications support  
- 🧪 Unit & integration testing with Jest and Supertest  


### Requirements
- [Nodejs](https://nodejs.org/en/download)
- [Mongodb](https://www.mongodb.com/docs/manual/administration/install-community/)

