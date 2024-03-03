import express from 'express';

import { initApi } from './src/api/api.js';

const app = express();

app.use(initApi(express.Router));

app.listen(8080, () => console.log('Server listening to port 8080'));
