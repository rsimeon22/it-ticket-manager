# IT Ticket Support System

This project is a simple **IT Ticket Support System** built with Node.js, Express, MongoDB, and Socket.IO. The system allows users to submit IT tickets, track their statuses, and communicate in real-time via WebSockets.

## Features

- **Create IT tickets**: Users can submit tickets with details like subject, category, priority, and description.
- **Ticket Status**: Track the status of tickets (open, in-progress, closed).
- **Real-time updates**: Ticket statuses and updates are sent in real-time using Socket.IO.
- **Backend API**: RESTful APIs to manage tickets.
- **MongoDB Integration**: Store and manage tickets in a MongoDB database.
- **WebSocket Support**: Real-time bidirectional communication between the client and the server.

## Project Structure

it-ticket-support-system/ │ ├── client/ # Frontend code (HTML, CSS, JS) │ ├── index.html │ ├── styles.css │ └── main.js │ ├── server/ # Backend code (Node.js, Express, etc.) │ ├── server.js │ ├── models/ # MongoDB models (Ticket.js) │ ├── routes/ # Express routes (ticketRoutes.js) │ └── package.json # Server-side dependencies │ ├── README.md # Project documentation ├── .gitignore # Files and folders to ignore (e.g., node_modules) └── LICENSE # License information


## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-time Communication**: Socket.IO
- **Version Control**: Git, GitHub

## Prerequisites

To run this project, you need to have the following installed on your machine:

- **Node.js** (v14 or higher)
- **MongoDB** (either locally or using a cloud-based MongoDB service like MongoDB Atlas)
- **Git** for version control

## Installation

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/it-ticket-support-system.git
cd it-ticket-support-system


### 2. Install Dependencies for Server
Navigate to the server/ directory and install the dependencies:

```bash
cd server
npm install


### 3. Set Up Environment Variables
Create a .env file in the server/ directory and configure the following environment variables:

makefile
Copy code
MONGO_URI=your_mongo_db_connection_string
PORT=3000

4. Run the Server
To start the backend server, run:

bash
Copy code
node server.js
The server will start running at http://localhost:3000.

5. Run the Client
To test the front-end, open the client/index.html file in your browser.

6. Access the App
Once both server and client are running, open your browser and go to:

arduino
Copy code
http://localhost:3000
7. Real-Time Updates
The real-time ticket updates will work automatically as long as the server and client are running.

Usage
Open the application in your browser.
Submit a new IT ticket by filling out the form with the necessary details.
View all tickets and their statuses in real-time.
Admins or support agents can update ticket statuses, which will reflect instantly for all users.
Screenshots
You can add screenshots of the working application here for visual reference.

Future Enhancements
Add user authentication and role-based access control.
Add filtering and search functionality for tickets.
Implement email notifications for ticket updates.
Enhance the UI with more responsive and user-friendly design.
