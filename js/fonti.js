// Funzione per caricare e convertire il contenuto di un file Markdown
function caricaMarkdown(file, elementoId) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Errore nel caricamento del file: ${response.statusText}`);
            }
            return response.text();
        })
        .then(text => {
            // Converti il testo Markdown in HTML usando Marked
            const htmlContent = marked.parse(text);
            document.getElementById(elementoId).innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Si è verificato un errore:', error);
        });
}

// Carica i contenuti nei rispettivi elementi
caricaMarkdown('https://gist.githubusercontent.com/graficaindipendente/4096496146dcd01eb1be3e472a91dffb/raw/2a34cfc447536ac64fbd27b41565e66bb203d771/ALERTs_olalla.md', 'ultimora');
caricaMarkdown('new.md', 'new');