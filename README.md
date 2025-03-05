# School Dashboard Management System (Ongoing)

## 📌 Project Overview
The **School Dashboard Management System** is a web application designed to streamline school administration by providing role-based dashboards for students, parents, teachers, and administrators. The platform is built using modern web technologies, ensuring efficiency, scalability, and a seamless user experience.

## 🚀 Tech Stack
- **Frontend:** Next.js, Tailwind CSS, ShadCN
- **Backend:** Prisma, PostgreSQL (Dockerized)
- **Authentication & RBAC:** Clerk
- **State Management & APIs:** React Query, REST/GraphQL

## 🎯 Features
### 🏫 Students
- View weekly schedule
- Check exam dates and results
- Receive announcements
- Access academic performance reports

### 👨‍👩‍👧 Parents
- Monitor children's schedules, exams, and results
- Receive school announcements

### 📚 Teachers
- Create and manage assignments
- Upload and organize lessons
- View announcements and events

### 🔧 Admin
- Manage users and roles
- Oversee school-wide announcements and events
- Access key analytics and insights

## 🔑 Authentication & Authorization
- **Clerk** is used for authentication.
- **Role-Based Access Control (RBAC)** ensures secure data access for each user type.

## 📦 Installation & Setup
### Prerequisites
- Node.js & npm/yarn
- Docker (for PostgreSQL database)

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/xandersavage/next-school-dashboard-ui
   cd school-dashboard
   ```
2. **Install Dependencies**
   ```bash
   npm install  # or yarn install
   ```
3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and configure the following:
   ```env
   DATABASE_URL=postgresql://your_db_url
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```
4. **Run PostgreSQL with Docker**
   ```bash
   docker-compose up -d
   ```
5. **Run Database Migrations**
   ```bash
   npx prisma migrate dev --name init
   ```
6. **Start the Development Server**
   ```bash
   npm run dev  # or yarn dev
   ```


## 📜 License
This project is licensed under the **MIT License**.

## 🤝 Contributions
Contributions are welcome! Feel free to fork the repository and submit a pull request.

---

🔗 **Stay Connected:** Follow me on [LinkedIn](https://www.linkedin.com/in/yourprofile) for project updates!
