// Servidor Express - Projeto #29: Aluguel de Equipamentos de Cinema
require('dotenv').config();
const express = require('express');
const supabase = require('./src/config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3029;

app.get('/api/audiovisual/status', (req, res) => {
    res.status(200).json({
        projeto_numero: 29,
        sistema: "Aluguel de Equipamentos de Cinema",
        categoria: "Audiovisual & Produção",
        tabela_conectada: process.env.TABELA_ALVO || "cameras_lentes",
        parametro_ambiente: process.env.COFRE_EQUIPAMENTOS || "CINE_RENTAL_29",
        ponte_supabase_ativa: Boolean(supabase && supabase.rest),
        cofre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});

app.listen(PORT, () => {
    console.log(`🚀 [PROJETO #29] Aluguel de Equipamentos de Cinema rodando em http://localhost:${PORT}/api/audiovisual/status`);
});