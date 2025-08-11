# Chat MongoDB

This is a simple real-time chat web application built using Node.js, Express, and MongoDB. It demonstrates fundamental CRUD (Create, Read, Update, Delete) operations in a web environment. The application allows users to view, create, edit, and delete chat messages.

## Features

-   **View All Chats**: Displays a list of all chat messages from the database.
-   **Create a New Chat**: Provides a form to send a new message from a sender to a receiver.
-   **Edit a Chat**: Allows users to modify the content of an existing message.
-   **Delete a Chat**: Enables users to remove a chat message from the list.

## Tech Stack

-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB with Mongoose ODM
-   **Templating Engine**: EJS (Embedded JavaScript)
-   **Middleware**: `method-override` for using PUT and DELETE requests from HTML forms.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

-   [Node.js](https://nodejs.org/) installed on your system.
-   [MongoDB](https://www.mongodb.com/try/download/community) installed and running on its default port (`27017`).

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/anushkxa/chat_mongodb.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd chat_mongodb.git
    ```

3.  **Install the dependencies:**
    ```sh
    npm install
    ```

4.  **Initialize the database:**
    Run the `init.js` script to connect to the `whatsapp` database and populate the `chats` collection with some sample data.
    ```sh
    node init.js
    ```
    You should see a "connection setup" message in your console.

5.  **Start the server:**
    ```sh
    node index.js
    ```
    The application will be running on `http://localhost:3000`. You will see "port is listening" and "connection setup" messages in your console.

## API Endpoints

The application uses the following RESTful routes to manage chats:

| Method   | Route              | Description                              |
| -------- | ------------------ | ---------------------------------------- |
| `GET`    | `/`                | A test route to check if the app is working.     |
| `GET`    | `/chats`           | Renders the main page displaying all chats.      |
| `GET`    | `/chats/new`       | Renders the form to create a new chat.   |
| `POST`   | `/chats`           | Creates a new chat and saves it to the DB. |
| `GET`    | `/chats/:id`       | Renders the form to edit a specific chat. |
| `PUT`    | `/chats/:id`       | Updates a specific chat message in the DB.  |
| `DELETE` | `/chats/:id`       | Deletes a specific chat from the DB.      |

## Project Structure

```
├── index.js          # Main application file with server and routes
├── init.js           # Script to initialize the database with sample data
├── package.json        # Project metadata and dependencies
├── models/
│   └── chat.js       # Mongoose schema for the Chat model
├── public/
│   └── style.css     # CSS stylesheets for the application
└── views/
    ├── edit.ejs      # EJS template for editing a chat
    ├── index.ejs     # EJS template for displaying all chats
    └── new.ejs       # EJS template for creating a new chat
