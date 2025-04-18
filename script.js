document.getElementById('loadData').addEventListener('click', async () => {
    try {
        const API_URL = 'https://v3.football.api-sports.io/fixtures';
        const API_KEY = 'fdb6b60c8cad45df1afb6c25a6fbbdaf';

        const response = await fetch(API_URL, {
            headers: { 'X-Auth-Token': API_KEY }
        });

        if (!response.ok) {
            throw new Error(`Error al obtener datos: ${response.status}`);
        }

        const data = await response.json();
        document.getElementById('loadData').addEventListener('click', async () => {
    try {
        const API_URL = 'https://v3.football.api-sports.io/fixtures';
        const API_KEY = 'fdb6b60c8cad45df1afb6c25a6fbbdaf';

        const response = await fetch(API_URL, {
            headers: { 'X-Auth-Token': API_KEY }
        });

        if (!response.ok) {
            throw new Error(`Error al obtener datos: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // Verifica los datos en la consola
    } catch (error) {
        console.error('Error:', error);
    }
}); {
        console.error('Error:', error);
    }
});
