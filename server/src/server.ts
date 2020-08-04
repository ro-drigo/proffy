import express from 'express';
import routes from './routes';

const app = express();

//fazer o express entender json
app.use(express.json())

//usar nossas rotas
app.use(routes);

// localhost:3333
app.listen(3333);