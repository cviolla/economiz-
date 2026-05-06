const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://qosjdxonwikshzinfjmg.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvc2pkeG9ud2lrc2h6aW5mam1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4NzM2OTgsImV4cCI6MjA5MzQ0OTY5OH0.DSAeUtFXHq-59cjb0ilWlEkt3uv4GnMsVMhDsyL7kK4';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function run() {
    const { data: markets, error: errMarkets } = await supabase.from('mercados').select('*');
    if (errMarkets) {
        console.error('Error fetching markets:', errMarkets);
        return;
    }
    console.log('Markets:', markets);
    
    const { data: products, error: errProducts } = await supabase.from('produtos').select('*');
    if (errProducts) {
        console.error('Error fetching products:', errProducts);
        return;
    }
    console.log('Products count:', products.length);
}

run();
