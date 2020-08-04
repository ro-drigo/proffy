import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    return response.send('Hello World');
});

// localhost:3333
app.listen(3333);