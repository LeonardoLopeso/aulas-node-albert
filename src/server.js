const express = require('express');

const app = express();

// GET -> SOLICITAR DADOS
// POST -> CADASTRA DADOS
// PUT -> ATUALIZA DADOS
// DELETE -> DELETAR DADOS

app.use(express.json());

app.get('/', (request, response) => { 
    return response.json({ message: "Api online" });
 });

app.post('/', (request, response) => {
    const { valor1, valor2  } = request.body;

    const total = valor1 + valor2;

    return response.json(total);
})

app.listen(3333, () => console.log("Server only."));
