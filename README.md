# simple-register-login

# Simple Register & Login (JavaScript)

This project is a beginner-friendly JavaScript mini application designed to help students understand the basics of user authentication logic before working with a real backend or database.

# Project Overview

This repository implements a simple **registration and login system** using only **HTML, CSS, and vanilla JavaScript**. It is intended for **beginners**, especially students, who want to learn how user data can be handled and validated in the browser.

# Key Features

- User registration with basic form validation.
- Login form that checks credentials against stored users.
- Prevents duplicate **email** and **password** entries during registration.
- Stores multiple users in an array saved to **localStorage**.
- Provides clear feedback messages on validation and authentication.

# How It Works

1. The registration page collects:
   - Name
   - Email
   - Password
   - Birthdate

2. Before a new user is saved:
   - The system checks whether the **email** already exists.
   - It also checks if the **password** is already used by another account.
   - If either is duplicated, it shows an error message.

3. On login:
   - It verifies the entered email and password against the stored list of users.
   - Displays appropriate success or error messages.

## Technologies Used

- HTML
- CSS
- JavaScript (ES6+)
- Browser `localStorage` for client-side data persistence

## ⚠️ Note

This application does **not** use a backend server or real database. It is purely for learning purposes. In a real application, user credentials would be securely handled on the server side.
