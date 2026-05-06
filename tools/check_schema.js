const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://qosjdxonwikshzinfjmg.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvc2pkeG9ud2lrc2h6aW5mam1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4NzM2OTgsImV4cCI6MjA5MzQ0OTY5OH0.DSAeUtFXHq-59cjb0ilWlEkt3uv4GnMsVMhDsyL7kK4';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function run() {
    const { data: m, error: me } = await supabase.from('mercados').insert([{ id: require('crypto').randomUUID(), nome: "Test" }]).select();
    console.log("Insert Mercado:", m, me);

    const { data: p, error: pe } = await supabase.from('produtos').insert([{ 
        id: require('crypto').randomUUID(), 
        nome: "Test",
        mercado_id: m ? m[0].id : require('crypto').randomUUID(),
        preco: 10
    }]).select();
    console.log("Insert Produto:", p, pe);
}
run();
