# Zorvyn

# 💰 Finance Dashboard Backend

## 📌 Overview

This project is a backend system for a finance dashboard that allows users to manage financial records and view analytics based on their role.

The system supports authentication, role-based access control, financial record management, and dashboard insights using MongoDB aggregation.

---

## 🚀 Features

### 🔐 Authentication

* User registration and login
* Password hashing using bcrypt
* JWT-based authentication

### 🛡️ Role-Based Access Control

* **Viewer** → Can view dashboard data
* **Analyst** → Can view records and analytics
* **Admin** → Full access (create, update, delete records and manage users)

### 💰 Financial Records

* Create, read, update, delete records
* Fields:

  * Amount
  * Type (income / expense)
  * Category
  * Date
  * Notes
* Filtering:

  * By type
  * By category
  * By date range

### 📊 Dashboard Analytics

* Total income
* Total expenses
* Net balance
* Category-wise summary
* Monthly trends

---

## 🏗️ Tech Stack

* **Backend:** Node.js, Express
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT
* **Security:** bcrypt

---

## 📁 Project Structure

```
backend/
│
├── controllers/
├── services/
├── models/
├── routes/
├── middleware/
├── config/
│
├── app.js
├── server.js
└── .env
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone <your-repo-link>
cd backend
```

### 2. Install dependencies

```
npm install
```

### 3. Create `.env` file

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the server

```
npm run dev
```

or

```
node server.js
```

---

## 🌐 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |

---

### 💰 Record Routes

| Method | Endpoint         | Access    |
| ------ | ---------------- | --------- |
| POST   | /api/records     | Admin     |
| GET    | /api/records     | All roles |
| PUT    | /api/records/:id | Admin     |
| DELETE | /api/records/:id | Admin     |

---

### 📊 Dashboard Routes

| Method | Endpoint               | Description   |
| ------ | ---------------------- | ------------- |
| GET    | /api/dashboard/summary | Get analytics |

---

## 🔐 Authorization

All protected routes require:

```
Authorization: Bearer <token>
```

---

## 🧪 Sample Request

### Create Record

```
POST /api/records
```

```json
{
  "amount": 5000,
  "type": "income",
  "category": "salary",
  "date": "2025-04-01",
  "notes": "Monthly salary"
}
```

---

## ⚠️ Assumptions

* Each record belongs to a specific user
* Role-based access is enforced via middleware
* MongoDB is used for data persistence

---

## 🚀 Future Improvements

* Pagination for records
* Input validation (Joi/Zod)
* User management APIs (update role, status)
* API documentation (Swagger)
* Rate limiting

---

## 👨‍💻 Author

**Mohammed Sameer**

---

## 📌 Summary

This project demonstrates:

* Backend architecture design
* Role-based access control
* CRUD operations
* MongoDB aggregation for analytics

---
