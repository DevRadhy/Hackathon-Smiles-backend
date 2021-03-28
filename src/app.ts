import express from 'express';
import router from './router';

import './database/connection';

const app = express();

app.use(express.json());
app.use(router);

export default app;