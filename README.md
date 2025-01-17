# Full Stack Authentication Project

A modern full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js), featuring robust user authentication and role-based authorization.

## Features

### Backend

- RESTful API built with Express.js
- MongoDB integration using Mongoose
- JWT-based authentication with HTTP-only cookies
- Role-based authorization (User/Admin)
- Express validator for input validation
- Custom error handling middleware
- Environment-based configuration
- Security features including password hashing with bcrypt

### Frontend

- Modern React (v19) with hooks
- React Router v7 for navigation
- Tailwind CSS for styling
- Vite for fast development and building
- Axios for API communication
- Proxy configuration for API requests
- Responsive layouts
- Protected routes and layouts

## Prerequisites

- Node.js (v16 or higher)
- MongoDB instance (local or Atlas)
- npm or yarn package manager

## Setup Instructions

1. Clone the repository:

```bash
git clone <repository-url>
cd project-directory
```

2. Create a `.env` file in the root directory with the following variables:

```env
NODE_ENV=development
PORT=5100
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1d
```

3. Install dependencies for both backend and frontend:

```bash
npm install
```

This will install dependencies for both the server and client applications.

4. Start the development servers:

```bash
npm run dev
```

This command will concurrently run:

- Backend server on port 5100
- Frontend development server on port 5173

## Project Structure

```
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   ├── src/               # Source files
│   │   ├── assets/       # Images and other assets
│   │   ├── pages/        # React components for each route
│   │   └── utils/        # Utility functions
├── controllers/           # Request handlers
├── errors/               # Custom error classes
├── middleware/           # Express middleware
├── models/              # Mongoose models
├── routes/              # API routes
├── utils/               # Utility functions
└── validation/          # Input validation middleware
```

## API Endpoints

### Authentication Routes

- `POST /api/v1/auth/register` - Register a new user
  - Required fields: firstName, lastName, email, password
- `POST /api/v1/auth/login` - Login user
  - Required fields: email, password
- `GET /api/v1/auth/logout` - Logout user

## Available Scripts

In the project directory, you can run:

### Root Directory

- `npm run install` - Install dependencies for both backend and frontend
- `npm run update` - Update dependencies to their latest minor versions
- `npm run server` - Start the backend server with nodemon
- `npm run client` - Start the frontend development server
- `npm run dev` - Run both backend and frontend concurrently

### Client Directory

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build

## Security Features

- Password hashing using bcrypt
- HTTP-only cookies for JWT storage
- Input validation and sanitization
- Custom error handling
- Secure password requirements
- Protected API routes
- Role-based access control

## Frontend Routes

- `/` - Landing page
- `/register` - User registration
- `/login` - User login
- `/dashboard` - Protected dashboard route

## Development Tools

- ESLint for code linting
- Prettier for code formatting
- Morgan for HTTP request logging
- Nodemon for development server
- Concurrently for running multiple scripts
- Vite for frontend development and building

## Environment Configuration

The application supports different environments through the `NODE_ENV` variable:

- `development` - Enables detailed logging and development features
- `production` - Optimized for production with minimal logging

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
