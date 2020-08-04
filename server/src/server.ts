import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
//fazer o express entender json
app.use(express.json())

//usar nossas rotas
app.use(routes);

// localhost:3333
app.listen(3333);