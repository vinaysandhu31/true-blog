# 📝 MERN Blog App

A full-stack blog application built with the MERN stack (MongoDB, Express.js, React, Node.js). This app allows users to create, read, update, and delete blog posts with image support and author information.

## 🔗 Live Demo

[Coming Soon]

## 👨‍💻 Author

GitHub: [@dpk763](https://github.com/dpk763)

---

## 🚀 Features

- Create and publish blog posts
- Edit and delete posts
- Attach an image via URL
- Display author's name from `localStorage`
- Fully responsive design using React
- JWT-based authentication ready

---

## 🛠️ Tech Stack

**Frontend:**
- React
- Axios
- React Router DOM

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (for future auth features)

---

## 📁 Folder Structure

```
project-root/
├── client/          # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
├── server/          # Node.js backend
│   ├── controllers/
|   ├──middlewares/
│   ├── models/
│   ├── routes/
│   └── server.js
```

---

## 🚧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/dpk763/blog.git
cd blog
```

### 2. Setup Backend

```bash
cd server
npm install
touch .env
# Add MongoDB connection string and port in .env
node server.js
```

### 3. Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🔐 Environment Variables

In `/server/.env`:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
```

---

## 📸 Screenshots

*(Add screenshots here of your home page, create post page, etc.)*

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Support

If you like this project, leave a ⭐ on the [GitHub repository](https://github.com/dpk763)!
