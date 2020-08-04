import express from 'express';

const app = express();

//fazer o express entender json
app.use(express.json())

app.get('/', (request, response) => {
    return response.json({message: 'hello world'});
});

// localhost:3333
app.listen(3333);