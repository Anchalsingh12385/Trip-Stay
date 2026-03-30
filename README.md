# Trip-Stay 🌍✈️

**Trip-Stay** is a full-stack web application inspired by Airbnb, designed to help users discover, create, and review property listings for their vacations and stays. Users can browse various categories such as mountains, beaches, farms, and cities, book their favorite properties, and share their experiences through reviews.

---

## 🚀 Features

* **User Authentication & Authorization**: Secure signup, login, and logout functionality using Passport.js. Users have specific roles and permissions (e.g., only listing owners can edit or delete their listings/reviews).
* **Property Listings**: Users can create, read, update, and delete (CRUD) their property listings.
* **Categories**: Listings are categorized by destination types (e.g., Mountains, Arctic, Farms, Deserts, Beaches, Cities).
* **Reviews & Ratings**: Logged-in users can leave reviews and ratings for properties they've visited.
* **Image Uploads**: Seamless image uploading for listings, securely stored in the cloud using Cloudinary and Multer.
* **Form Validation**: Server-side data validation using Joi to ensure secure and accurate data entry.
* **Responsive UI**: A modern, interactive frontend built with EJS templates and EJS-Mate.

---

## 🛠️ Tech Stack

### Frontend
* **HTML5, CSS3, JavaScript**
* **EJS (Embedded JavaScript)**: Templating engine for dynamic content.
* **EJS-Mate**: Layout, partial, and block template functions for EJS.

### Backend
* **Node.js**: JavaScript runtime environment.
* **Express.js**: Web framework for building the server and handling routes.

### Database
* **MongoDB**: NoSQL database for flexible data storage.
* **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.
* **Connect-Mongo**: MongoDB session store for Express.

### Authentication & Middleware
* **Passport.js**: Authentication middleware (using `passport-local` and `passport-local-mongoose`).
* **Express-Session & Connect-Flash**: Managing user sessions and flash messages for alerts/notifications.
* **Cloudinary & Multer**: Middleware for handling `multipart/form-data` and managing cloud image uploads.
* **Joi**: Object schema description language and validator for JavaScript objects.

---

## ⚙️ Installation & Setup

Follow these steps to set up the project locally on your machine.

### Prerequisites

* [Node.js](https://nodejs.org/) installed
* [Git](https://git-scm.com/) installed
* [MongoDB](https://www.mongodb.com/) installed locally or a [MongoDB Atlas](https://www.mongodb.com/atlas/database) account
* A [Cloudinary](https://cloudinary.com/) account for image storage

### 1. Clone the repository

```bash
git clone https://github.com/Anchalsingh12385/Trip-Stay.git
cd Trip-Stay
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a file named `.env` in the root directory of the project and add your sensitive credentials:

```ini
# Database configuration
ATLASDB_URL="your_mongodb_connection_string"

# Cloudinary configuration (For image uploads)
CLOUD_NAME="your_cloudinary_cloud_name"
CLOUD_API_KEY="your_cloudinary_api_key"
CLOUD_API_SECRET="your_cloudinary_api_secret"

# Secret code for Express Session
SECRET="your_secret_string"
```

*Note: If `ATLASDB_URL` is not provided, the app will try to connect to the local MongoDB instance by default (`mongodb://127.0.0.1:27017/tripstay`).*

### 4. Run the Application

Start the development server:

```bash
node app.js
```
*(Alternatively, you can use `nodemon app.js` if you have nodemon installed globally).*

### 5. View in Browser

Open your web browser and navigate to:
```
http://localhost:8080
```

---

## 📁 Project Structure

```text
Trip-Stay/
│
├── controllers/       # Contains the core logic for Routes (Listings, Reviews, Users)
├── init/              # Database initialization/seed scripts and sample data
├── models/            # Mongoose Schemas (Listing, Review, User)
├── public/            # Static assets (CSS, JS, Images)
├── routes/            # Express Routes defining application endpoints
├── utils/             # Utility classes and functions (e.g., Error Handling)
├── views/             # EJS templates for the frontend
│   ├── layouts/       # Main boilerplates
│   ├── listings/      # Views for showing, editing, creating listings
│   └── users/         # Views for signup/login
├── uploads/           # Local fallback directory for image uploads
│
├── app.js             # Main application entry point
├── cloudConfig.js     # Cloudinary configuration setup
├── middlewares.js     # Custom middleware functions (Authentication, Authorization, Validation)
├── schema.js          # Joi validation schemas
├── .env               # Environment variables (Ignored in Git)
├── package.json       # Node.js dependencies and scripts
└── README.md          # Project documentation
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
Feel free to check the [issues page](https://github.com/Anchalsingh12385/Trip-Stay/issues) if you want to contribute.

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).