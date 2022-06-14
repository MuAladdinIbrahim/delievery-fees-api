import express from 'express';
import feesRouters from './route/v1/fees';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(feesRouters);

export default app;
