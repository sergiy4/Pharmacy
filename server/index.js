import express from 'express';
import { initApi } from './src/api/api.js';
import { errorHandler } from './src/middleware/error-handler/error-handler.middleware.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use(initApi(express.Router));
app.use(errorHandler);

app.listen(4000, () => console.log('Server listening to port 8080'));
