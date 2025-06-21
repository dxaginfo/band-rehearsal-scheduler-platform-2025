import express from 'express';
import http from 'http';
import { Server as SocketServer } from 'socket.io';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

// Load environment variables
dotenv.config();

// Import routes
import authRoutes from './routes/auth';
import bandsRoutes from './routes/bands';
import rehearsalsRoutes from './routes/rehearsals';
import setlistsRoutes from './routes/setlists';
import usersRoutes from './routes/users';

// Import WebSocket handlers
import socketHandler from './sockets';

// Import middleware
import { errorHandler } from './middleware/errorHandler';

// Create Express app
const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Band Rehearsal Scheduler API',
      version: '1.0.0',
      description: 'API for the Band Rehearsal Scheduler Platform',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 8000}`,
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/bands', bandsRoutes);
app.use('/api/rehearsals', rehearsalsRoutes);
app.use('/api/setlists', setlistsRoutes);
app.use('/api/users', usersRoutes);

// WebSocket handlers
socketHandler(io);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default server;
