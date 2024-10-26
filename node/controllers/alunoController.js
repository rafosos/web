const express = require('express');
const Aluno = require("../models/aluno");
const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const aluno = await Aluno.find().populate("turmaId");
        res.status(200).json(aluno);
    }catch(error){
        res.status(500).json({error: error.message})
    }
});

router.get('/:id', async (req,res) => {
    try{
        const {id} = req.params;
        const aluno = await Aluno.findOne({_id: id}).populate("turmaId");

        if (!aluno) {
            res.status(422).json({ mensagem: "Aluno não encontrado" });
            return;
        }

        res.status(200).json(aluno);
    } catch(error) {
        res.status(500).json({error});
    }
});

router.post('/', async (req,res) => {
    const { nome, idade, ra, turmaId } = req.body;

    const aluno = {
        nome,
        idade,
        ra,
        turmaId
    }

    try {
        await Aluno.create(aluno);
        res.status(201).json(aluno);
    } catch (err) {
        res.status(500).json({message: "Ocorreu um erro", err: err.message});
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const fieldsToUpdate = req.body;

        const updatedAluno = await Aluno.findByIdAndUpdate(id, fieldsToUpdate, { new: true });

        if (!updatedAluno) {
            return res.status(422).json({ mensagem: "Aluno não encontrado" });
        }

        res.status(200).json(updatedAluno);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar aluno", erro: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const aluno = await Aluno.findByIdAndDelete(id);
        
        if (!aluno) {
            return res.status(422).json({ mensagem: "Aluno não encontrado" });
        }

        res.status(200).json({ mensagem: "Excluído com sucesso!" });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir aluno", erro: error.message });
    }
});

module.exports = router;