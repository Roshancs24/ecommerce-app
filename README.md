# E-Commerce Web Application

A full-stack E-Commerce Web Application developed using Java, Spring Boot, MySQL, HTML, CSS, and JavaScript. The application allows users to browse products, view product details, manage a shopping cart, and enables administrators to perform product management operations through a dedicated dashboard.

## Features

### User Features
- Browse product catalog
- View product details
- Search products
- Product pagination
- Add products to cart
- User registration
- User login

### Admin Features
- Add new products
- Update existing products
- Delete products
- Manage product inventory

### Backend Features
- RESTful API development
- CRUD operations
- Database integration with MySQL
- Spring Data JPA implementation

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Java
- Spring Boot
- Spring Data JPA
- Hibernate

### Database
- MySQL

### Tools
- IntelliJ IDEA
- Visual Studio Code
- MySQL Workbench
- Postman
- Git
- GitHub

## Project Structure

```text
ecommerce-app/
│
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── application.properties
│
├── frontend/
│   ├── public/
│   ├── assets/
│   └── README.md
│
├── database/
│   └── ecommerce_db.sql
│
├── .gitignore
└── README.md
```

## API Endpoints

### Product APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | /products | Get all products |
| GET | /products/{id} | Get product by ID |
| POST | /products | Add product |
| PUT | /products/{id} | Update product |
| DELETE | /products/{id} | Delete product |

### User APIs

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /register | Register user |
| POST | /login | Login user |

## Setup Instructions

### Clone Repository

```bash
git clone https://github.com/Roshancs24/ecommerce-app.git
```

### Backend Setup

1. Open backend folder in IntelliJ IDEA.
2. Configure MySQL database in application.properties.
3. Run the Spring Boot application.

### Frontend Setup

1. Open frontend folder in Visual Studio Code.
2. Start Live Server.
3. Open the application in the browser.

## Database Configuration

Create a MySQL database:

```sql
CREATE DATABASE ecommerce_db;
```

Update application.properties:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ecommerce_db
spring.datasource.username=your_username
spring.datasource.password=your_password
```

## Future Enhancements

- JWT Authentication
- Order Management
- Payment Gateway Integration
- Product Categories
- User Profile Management
- Wishlist Functionality
- Responsive Mobile Design

## Author

Roshan

