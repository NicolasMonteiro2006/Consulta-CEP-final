import express from 'express';
import cepPromise from 'cep-promise';
import cors from 'cors';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Bem-vindo à API de Consulta de CEP! Use a rota /consultar-cep/:cep para consultar um CEP.');
});

app.use(cors());

app.get('/consultar-cep/:cep', async (req, res) => {
    let { cep } = req.params;
    cep = cep.replace(/\D/g, ''); 

    if (cep.length !== 8) {
        return res.status(400).json({ error: 'CEP inválido! Deve conter 8 dígitos numéricos.' });
    }

    try {
        const dados = await cepPromise(cep);
        res.json(dados);
    } catch (erro) {
        res.status(400).json({ error: 'CEP não encontrado ou inválido.' });
    }
});

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
