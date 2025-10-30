# 📝 Todo List RESTful API

A simple **Todo List RESTful API** built with **Node.js**, **Express**, and **MongoDB**.  
This project demonstrates CRUD (Create, Read, Update, Delete) operations using **Mongoose** for data modeling and **Postman** for API testing.

---

## 🚀 Features

- Create new tasks  
- View all tasks  
- Update task details or status  
- Delete tasks  
- MongoDB integration with Mongoose ORM  
- Environment variable support using `.env`  
- Clean and modular folder structure (MVC pattern)

---

## 🧠 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **Node.js** | JavaScript runtime for building the backend |
| **Express.js** | Web framework for handling routes and middleware |
| **MongoDB** | NoSQL database for storing task data |
| **Mongoose** | ODM library for interacting with MongoDB |
| **dotenv** | Environment variable management |
| **Nodemon** | Development tool for auto-restarting the server |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/todoListApi.git
cd todoListApi
```

### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Setup environment variables
Create a .env file in the project root and add:

```ini
MONGO_URL=mongobd://localhost/Tododb
PORT=3000
```
(If using MongoDB Atlas, replace the connection string with your cluster URI)

### 4️⃣ Start the MongoDB server

If using local MongoDB:
```bash
brew services start mongodb-community
```
Or use MongoDB Atlas (cloud connection).

### 5️⃣ Run the server
```bash
npm run dev
```
or
```bash
node server.js
```
---

## API Endpoints

| HTTP Method | Endpoint         | Description                                      | Request Body (Example)                       | Response                                      |
| ----------- | ---------------- | ------------------------------------------------ | -------------------------------------------- | --------------------------------------------- |
| **GET**     | `/tasks`         | Retrieve all tasks                               | None                                         | List of all tasks                             |
| **POST**    | `/tasks`         | Create a new task                                | `name=Buy groceries` (x-www-form-urlencoded) | Returns the created task                      |
| **GET**     | `/tasks/:taskId` | Retrieve a single task by ID                     | None                                         | Returns the task with the specified ID        |
| **PUT**     | `/tasks/:taskId` | Update a specific task (e.g., mark as completed) | `{ "status": ["completed"] }`                | Returns the updated task                      |
| **DELETE**  | `/tasks/:taskId` | Delete a task by ID                              | None                                         | `{ "message": "Task Successfully deleted!" }` |

---
## Author

### Michael Kazembe

Software Developer | Node.js | MongoDB | React

📧 Email: michaelkazembe@gmail.com

🌐 GitHub: github.com/MichaelKazembe

💼 LinkedIn: linkedin.com/in/Michael-Kazembe