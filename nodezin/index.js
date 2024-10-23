const express = require(`express`)
const {randomUUID} = require("crypto")
const app = express();
app.use(express.json());

class Pessoa{
    constructor(nome, celular){
        this.id = randomUUID();
        this.nome = nome;
        this.celular = celular;
    }
}

// Crie um array Pessoas com os campos: id (GUID), nome (string) e
// celular (string);
const pessoas = [];

// Receba na rota “/pessoas” a requisição do tipo GET e retorna a sua
// lista de pessoas
app.get(`/pessoas`, (req, res) => {
    return res.json(pessoas)
});

// Receba na rota “/pessoas” a requisição do tipo POST e adicione a
// pessoa recebida no array.
app.post("/pessoas", (req,res) => {
    const {nome, celular} = req.body;
    pessoas.push(new Pessoa(nome, celular));
    return res.json(pessoas);
});

// Receba na rota “/pessoas/:id” a requisição do tipo PUT e atualize a
// respectiva pessoa.
app.put("/pessoas/:id", (req,res) => {
    const {id} = req.params;
    const {nome, celular} = req.body;
    const pessoa = pessoas.find(p => p.id == id);
    pessoa.nome = nome;
    pessoa.celular = celular;
    return res.json(pessoas);
});

// Receba na rota “/pessoas/:id” a requisição do tipo DELETE e excluía a
// respectiva pessoa.
app.delete("/pessoas/:id", (req,res) => {
    const {id} = req.params;
    const index = pessoas.findIndex(p => p.id == id);
    pessoas.splice(index,1);
    return res.json(pessoas);
});

app.listen(3000, () => console.log(`server running on port 3000`));