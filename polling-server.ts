import * as express from 'express';
import AppRouter from './router';
import * as dotenv from 'dotenv';

dotenv.config();

let app = express();
const expressRoutes = new AppRouter(app);
expressRoutes.init();
const port = process.env.PORT;
app.listen(process.env.PORT, () => {
  console.log(`Express server app listening on port ${process.env.PORT}!`);
});


export default app;