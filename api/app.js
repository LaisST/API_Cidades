const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000; // Você pode escolher a porta que desejar
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/Pais', { useNewUrlParser: true, useUnifiedTopology: true });



const db = mongoose.connection;
// Rota GET simples
app.use(express.json());
app.use(cors());

db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
db.once('open', () => {
    console.log('Conectado ao banco de dados MongoDB');
});
const Cidades = mongoose.model('Cidades',{
    "municipio-id": Number,
    "municipio-nome": String,
    "microrregiao-id": Number,
    "microrregiao-nome": String,
    "mesorregiao-id": Number,
    "mesorregiao-nome": String,
    "regiao-imediata-id": Number,
    "regiao-imediata-nome": String,
    "regiao-intermediaria-id": Number,
    "regiao-intermediaria-nome": String,
    "UF-id": Number,
    "UF-sigla": String,
    "UF-nome": String,
    "regiao-id": Number,
    "regiao-sigla": String,
    "regiao-nome": String,
});

app.get('/consulta', async (req, res) => {
    try {
        const cidades = await Cidades.find();
        console.log(await Cidades.find());
        res.json(cidades);
    } catch (error) {
        console.error('Erro no servidor:', error);
        res.status(500).json({ error: 'Erro interno no servidor' });
    }
});



// Iniciar o servidor na porta especificada
app.listen(port, () => {
    console.log(`O servidor está ouvindo na porta ${port}`);
});