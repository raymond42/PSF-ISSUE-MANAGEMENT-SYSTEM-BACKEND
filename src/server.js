import express from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import cors from 'cors';
import router from './routes';
import db from './sequelize/models';

const app = express();

const PORT = process.env.PORT || 2000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/v1', router);

db.sequelize.sync({ alter: false }).then(() => {
  console.log('Database connected');
  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
});
