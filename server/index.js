import express from 'express';
import { initApi } from './src/api/api.js';
import { errorHandler } from './src/middleware/error-handler/error-handler.middleware.js';

const app = express();

app.use(initApi(express.Router));
app.use(errorHandler);

app.listen(8080, () => console.log('Server listening to port 8080'));
