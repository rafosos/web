const express = require('express');
const mongoose = require(`mongoose`);

const app = express();
app.use(express.json());

const alunoController = require("./controllers/alunoController");
app.use(`/aluno`, alunoController);

const disciplinaController = require("./controllers/disciplinaController");
app.use(`/disciplina`, disciplinaController);

mongoose.connect(`mongodb://127.0.0.1:27017/aula10_tarefa`)
    .then(() => {
        app.listen(27017, () => {
            console.log("conectado ao mongodb");
        })
    })
    .catch(err => console.log(err))

app.listen(3000, () => console.log('Servidor rodando na porta: 3000'));