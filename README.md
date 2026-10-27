# 🌍 WanderLust — Discover Your Next Stay

WanderLust is a full-stack web application inspired by Airbnb that allows users to explore travel destinations, browse property listings, and share their own listings. The project focuses on building a dynamic web application with server-side rendering, database integration, user authentication, and CRUD operations.

🔗 **Live Demo:** [WanderLust](https://major-project-fy85.onrender.com/)

---

## ✨ Features

- 🏡 **Explore Listings** — Browse available properties and travel destinations.
- 🔍 **Search Destinations** — Search for listings based on destinations.
- 📝 **Create Listings** — Add new property listings.
- ✏️ **Manage Listings** — Update and manage property details.
- ⭐ **Reviews** — Add reviews to listings.
- 🔐 **User Authentication** — Register, log in, and log out securely.
- 💬 **Flash Messages** — Display success and error notifications.
- 📱 **Responsive UI** — A user-friendly interface for browsing listings.
- ☁️ **Cloud Deployment** — Deployed using Render with MongoDB Atlas.

> Some features depend on the current deployed version and application configuration.

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- EJS
- EJS-Mate

### Backend
- Node.js
- Express.js
- RESTful routing
- Express Session
- Passport.js
- Passport Local Strategy
- Connect Flash
- Method Override

### Database
- MongoDB
- MongoDB Atlas
- Mongoose

### Deployment
- Render
- MongoDB Atlas

---

## 📂 Project Structure

```text
Major_Project/
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── views/
│   ├── layouts/
│   ├── listings/
│   ├── reviews/
│   └── users/
│
├── public/
│   ├── css/
│   └── js/
│
├── utils/
│   └── ExpressError.js
│
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

*Note: The structure above is representative. Adjust the filenames and folders to match your actual repository.*

---

## ⚙️ Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Balkrishna88777/Major_Project.git
```

### 2. Navigate to the Project Directory

```bash
cd Major_Project
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_random_session_secret
```

Replace the example values with your own credentials.

**Important:** Never commit your `.env` file, database password
