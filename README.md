# 🛒 Smart Cart – React E-Commerce UI

A responsive e-commerce web application built using **React**. The project dynamically renders product data from a JSON file using `.map()` and reusable components.

## 🚀 Features

* Dynamic product rendering using `.map()`
* Reusable React components
* Product cards with:

  * Product image
  * Product name
  * Price
  * Add to Cart button
* Shopping cart functionality
* Increase product quantity
* Decrease product quantity
* Remove products from cart
* Display total cart item count
* Display total cart price
* Responsive design for:

  * Desktop
  * Tablet
  * Mobile
* Promotional banner section
* Clean and responsive UI

## 🛠️ Technologies Used

* React
* JavaScript
* HTML
* CSS
* JSON
* Vite

## 📂 Project Structure

```text
src/
│
├── assets/
│   ├── banner.png
│   ├── image-1.png
│   ├── image-2.png
│   └── ...
│
├── components/
│   ├── Banner.jsx
│   ├── Header.jsx
│   └── ProductCard.jsx
│
├── data/
│   └── productsData.json
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## 📦 Product Data

Product information is stored separately in:

```text
src/data/productsData.json
```

The product data is imported into the main component and rendered dynamically using `.map()`.

Example:

```jsx
productsData.products.map((product) => (
    <ProductCard
        key={product.id}
        product={product}
    />
))
```

## 🧩 Components

### Header

Displays:

* Smart Cart logo
* Navigation
* Cart icon
* Cart item count

### Banner

Displays a promotional banner image.

### ProductCard

Reusable component responsible for displaying individual product information and the **Add to Cart** button.

## 🛒 Cart Functionality

The cart allows users to:

* Add products
* Increase quantity
* Decrease quantity
* Remove products
* View total items
* View total price

Cart state is managed using React's `useState` hook.

## 📱 Responsive Design

The application is designed to work across different screen sizes.

### Desktop

Products are displayed in a multi-column grid.

### Tablet

Products adjust to a two-column layout.

### Mobile

Products are displayed in a single-column layout for better usability.

## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd smart-cart
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

## 🏗️ Build for Production

```bash
npm run build
```

## 🌐 Deployment

The project can be deployed using **Netlify**.

## 🎯 Learning Objectives

This project was developed to practice:

* React components
* Props
* State management using `useState`
* Rendering lists using `.map()`
* Reusable components
* Dynamic JSON data
* Event handling
* Cart functionality
* Responsive CSS
* React project structure

## 👨‍💻 Author

**Dominic Rozario**

GitHub: `dominic-rozario1210`
