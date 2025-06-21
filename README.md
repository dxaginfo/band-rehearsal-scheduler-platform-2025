# Band Rehearsal Scheduler Platform

A comprehensive web application for scheduling and managing band rehearsals with real-time collaboration, setlist management, and financial tracking.

## Features

- **Unified Calendar Management**: Create and share band calendars, mark availability, and receive notifications.
- **Real-time Communication Hub**: Centralized discussions for rehearsals, announcements, and song-specific feedback.
- **Setlist Management**: Create, share, and track progress on setlists for specific rehearsals.
- **Attendance Tracking**: Monitor attendance, RSVP to rehearsals, and coordinate substitutes.
- **Financial Management**: Track rehearsal space costs, log hours, and manage payment distribution.
- **Smart Scheduling Recommendations**: Get optimal rehearsal time suggestions based on member availability.
- **Offline Access**: Access rehearsal details offline and sync changes when reconnected.
- **External Calendar Integration**: Sync with Google/Apple/Outlook calendars for unified scheduling.

## Technology Stack

### Front-end
- React.js with TypeScript
- Redux for global state, React Query for data fetching
- Material-UI for responsive design
- FullCalendar.js for interactive calendar interface
- Socket.io client for WebSocket connections
- Service Workers for PWA capabilities

### Back-end
- Node.js with Express
- RESTful API with GraphQL for complex queries
- JWT with OAuth 2.0 for authentication
- Socket.io for WebSocket connections
- node-cron for scheduled jobs

### Database
- PostgreSQL for relational data
- Redis for caching and real-time features
- Elasticsearch for search functionality

### DevOps
- Docker for containerization
- GitHub Actions for CI/CD
- AWS (ECS, RDS) for hosting

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Docker and Docker Compose
- PostgreSQL
- Redis

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dxaginfo/band-rehearsal-scheduler-platform-2025.git
cd band-rehearsal-scheduler-platform-2025
```

2. Install dependencies:
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Set up environment variables:
```bash
# Copy example environment files
cp server/.env.example server/.env
cp client/.env.example client/.env

# Edit the .env files with your configuration
```

4. Start the development servers:
```bash
# Start backend server
cd server
npm run dev

# Start frontend server in a new terminal
cd client
npm start
```

5. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/api-docs

### Docker Setup

Alternatively, you can use Docker Compose to run the entire application stack:

```bash
docker-compose up -d
```

This will start the frontend, backend, PostgreSQL, Redis, and Elasticsearch services.

## Deployment

### Production Build

1. Build the frontend:
```bash
cd client
npm run build
```

2. Build the backend:
```bash
cd server
npm run build
```

### AWS Deployment

1. Configure AWS CLI with your credentials
2. Use the provided deployment scripts:
```bash
./scripts/deploy.sh
```

## Project Structure

```
.
├── client/                 # Frontend React application
│   ├── public/             # Static files
│   └── src/                # React source code
│       ├── components/     # UI components
│       ├── pages/          # Page components
│       ├── services/       # API service clients
│       ├── store/          # Redux store
│       └── utils/          # Utility functions
├── server/                 # Backend Node.js application
│   ├── src/                # Source code
│   │   ├── controllers/    # API controllers
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   └── utils/          # Utility functions
│   ├── migrations/         # Database migrations
│   └── tests/              # Server tests
├── docker/                 # Docker configuration
├── scripts/                # Utility scripts
└── docs/                   # Documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [FullCalendar.js](https://fullcalendar.io/) for the calendar interface
- [Socket.io](https://socket.io/) for real-time communication
- [Material-UI](https://mui.com/) for the UI components