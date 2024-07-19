# Notes App

A simple notes application with user authentication and note management, inspired by Google Keep.

## Features

- User Authentication and Content Sync
- Create a New Note
- Search in Your Notes
- Label View: View all notes with a specific label
- Archived Notes
- Notes with Multiple Tags (up to 9 tags)
- Toggle Background Colors for Notes
- Trash Notes: Deleted notes stay in trash for 30 days
- Reminder View: View all notes with an upcoming due date (Bonus Feature)

## Tech Stack

- Backend: Node.js, Express, MongoDB, JWT
- Frontend: Vanilla HTML, CSS, JavaScript, jQuery (optional)

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- MongoDB

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/notes-app.git
    cd notes-app
    ```

2. Install the backend dependencies:

    ```sh
    cd backend
    npm install
    ```

3. Create a `.env` file in the `backend` directory with the following content:

    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the backend server:

    ```sh
    npm run dev
    ```

5. Open `frontend/index.html` in your browser to use the application.

## Deployment

### Backend Deployment (e.g., Heroku)

1. Create a new Heroku app.
2. Add your MongoDB connection string and JWT secret as environment variables.
3. Push your code to Heroku:

    ```sh
    git push heroku main
    ```

### Frontend Deployment (e.g., Netlify or Vercel)

1. Create a new site on Netlify or Vercel.
2. Drag and drop the `frontend` folder or link your repository.

## Usage

1. Register a new user or log in with existing credentials.
2. Create, search, label, archive, and trash your notes.
3. Toggle background colors for better organization.
4. Use the reminder view to manage notes with due dates.

## Contributing

Feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License.