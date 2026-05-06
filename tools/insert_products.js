const { createClient } = require('@supabase/supabase-js');
const crypto = require('crypto');

const SUPABASE_URL = 'https://qosjdxonwikshzinfjmg.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvc2pkeG9ud2lrc2h6aW5mam1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4NzM2OTgsImV4cCI6MjA5MzQ0OTY5OH0.DSAeUtFXHq-59cjb0ilWlEkt3uv4GnMsVMhDsyL7kK4';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const data = [
    { nome: "Pao de Hamburguer Plus", preco: 16.79, categoria: "Alimentação", codigo_barras: "0000000000001" },
    { nome: "Hamb Maturatta Pic180G", preco: 16.78, categoria: "Alimentação", codigo_barras: "0000000000002" },
    { nome: "Batata Mccain 1.05kg", preco: 25.99, categoria: "Alimentação", codigo_barras: "0000000000003" },
    { nome: "Azeitona Verde c/ Caro", preco: 9.45, categoria: "Alimentação", codigo_barras: "0000000000004" },
    { nome: "Salame Hamburgues Sear", preco: 23.13, categoria: "Alimentação", codigo_barras: "0000000000005" }
];

async function run() {
    console.log("Inserindo Mercado padrão...");
    const mercadoId = crypto.randomUUID();
    const { error: errMarket } = await supabase.from('mercados').insert([
        {
            id: mercadoId,
            nome: "Supermercado Principal",
            lat: -23.5505,
            long: -46.6333
        }
    ]);

    if (errMarket) {
        console.error("Erro ao inserir mercado:", errMarket);
        return;
    }
    console.log("Mercado inserido com sucesso: Supermercado Principal", mercadoId);

    console.log("Inserindo produtos...");
    const produtos = data.map(p => ({
        id: crypto.randomUUID(),
        codigo_barras: p.codigo_barras,
        nome: p.nome,
        marca: "Geral",
        imagem_url: "",
        mercado_id: mercadoId,
        preco: p.preco,
        comprado: false,
        data_cadastro: new Date().toISOString()
    }));

    const { error: errProdutos } = await supabase.from('produtos').insert(produtos);
    
    if (errProdutos) {
        console.error("Erro ao inserir produtos:", errProdutos);
        return;
    }

    console.log("Produtos inseridos com sucesso!");
}

run();
