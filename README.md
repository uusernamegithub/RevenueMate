Here's the updated README incorporating React instead of EJS:

---

# Revenue Mate

**REVENUE MATE** is a Point of Sale (POS) web application designed to help businesses seamlessly record sales and expenses. With an intuitive interface, REVENUE MATE provides comprehensive tracking of expenditure and sales, enabling businesses to manage their financials effectively.

**Streamline Your Sales, Simplify Your Success**

---

## Features

- **POS Sales Recording**: Effortlessly record sales transactions with our user-friendly POS system. Track each sale with detailed information including date, time, items sold, and payment method.
- **Expense Recording**: Keep a meticulous record of all business expenses. Input details such as expense category, amount, date, and vendor to maintain a clear overview of your expenditures.
- **Transaction and Expenses Viewing**: View your sales and expense transactions in an organized manner. Our application provides a comprehensive list of all recorded transactions, making it easy to monitor your financial activities.
- **Filtering Transactions and Expenses**: Filter through your transactions and expenses using various criteria such as category or payment type. This feature helps you quickly find specific transactions and analyze your financial data more efficiently.
- **Inventory Management**: Manage your inventory with ease. Add, delete, and track items in your inventory.

---

## Pages / Sections / Endpoints

- **Home**: Provides a brief description of REVENUE MATE.
  
- **SignUp**: Allows users to sign up for services via email or Google.
  
- **Login**: Registered users can log in from this page.
  
- **Merchant Home**: Merchants can record POS sales or expenses, and navigate to the Profile section or the Inventory Management page.
  
- **Profile**: Merchants can view all types of transactions (sales or expenses) and track them by applying specific filters.
  
- **Inventory**: Merchants can view current inventory, and add or delete items from the inventory.

---

## Implementation Details / Tech Stack

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, used for server-side development.
- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js, used to build the web server to handle HTTP requests.
- **PostgreSQL**: A powerful, open-source relational database system, used for storing and managing details regarding users, sales, expenses, and inventory.
- **Passport.js**: A middleware for authentication in Node.js applications, used to handle user authentication and authorization.
- **React**: A JavaScript library for building user interfaces, used to create dynamic and interactive frontend components.
- **React Router**: A routing library for React, used to handle navigation between different components and pages.
- **Authentication**: Includes local and Google strategies via Passport.js and employs bcrypt hashing and salting to store passwords safely and prevent data breaches.

---

## Overview of Tables and Data Stored in PostgreSQL

- **User Lists**: Contains user details along with their salted passwords. It assigns a unique primary key, `ID`, which serves as a foreign key for other tables.
  
- **Inventory**: Stores all items along with their prices for a particular user. Each row (or item) has a primary key, `ID`, and a foreign key, `MerchantId`, which refers to the merchant in the User Lists table.
  
- **Sales**: Stores the date and time of purchase, customer name, amount, list of items sold, and mode of payment. Each row has a primary key, `ID`, and a foreign key, `MerchantId`, which refers to the merchant in the User Lists table.
  
- **Expenditures**: Stores the date and time of purchase, vendor name, amount, reason for the expense, and mode of payment. Each row has a primary key, `ID`, and a foreign key, `MerchantId`, which refers to the merchant in the User Lists table.

---

## npm Modules

- **express**: The Express.js framework.
- **pg**: PostgreSQL client for Node.js.
- **passport**: Authentication middleware for Node.js.
- **passport-local**: Passport strategy for authenticating with a username and password.
- **passport-google-oauth20**: Passport strategy for authenticating with Google using OAuth 2.0.
- **react**: JavaScript library for building user interfaces.
- **react-router-dom**: Routing library for React.
- **bcrypt**: Library to help hash passwords.

---

## How to Use

To give it a try, follow this video: [Watch the Demo Video](https://drive.google.com/file/d/1VL3UI73Mzj3tr1CUhCnOFSn9oAvicprx/view?usp=sharing)
