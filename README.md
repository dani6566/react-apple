# Apple Website Clone (Full-Stack React)

A full-stack replica of Apple's product showcase website. This project includes dynamic routing, single-product details, YouTube Data API integration for the latest media releases, and a custom Node.js/Express backend connected to a database.

---

## 🚀 Features

* **Responsive Design:** Apple-inspired UI optimized for desktop, tablet, and mobile devices.
* **Dynamic Product Routing:** Dedicated product listing (`/iphone`) and dynamic single-item pages (`/iphone/:id`) using React Router.
* **YouTube Data API Integration:** Fetches and displays the latest videos dynamically from Apple's official YouTube channel.
* **Custom Backend API:** Express.js REST API providing endpoints for products, product descriptions, and pricing data.
* **Error Handling:** Custom 404 page for unmatched routes and fallback UI states for data fetching.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Vite, React Router v6, Bootstrap / CSS3
* **Backend:** Node.js, Express.js, MySQL (or ORM/Database)
* **External APIs:** Google Cloud YouTube Data API v3
* **Environment Management:** `dotenv`