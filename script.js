// Reemplaza con tu URL y tu clave de API

const API_URL = 'https://v3.football.api-sports.io/fixtures';
const API_KEY = 'fdb6b60c8cad45df1afb6c25a6fbbdaf';

document.getElementById('loadData').addEventListener('click', async () => {
  try {
    const response = await fetch(API_URL, {
      headers: {
        'X-Auth-Token': API_KEY
      }
    });
    const data = await response.json();
    
    const statsDiv = document.getElementById('stats');
    statsDiv.innerHTML = ''; // Limpia contenido previo
    data.matches.forEach(match => {
      statsDiv.innerHTML += `
        <p>${match.homeTeam.name} vs ${match.awayTeam.name}</p>
        <p>Resultado: ${match.score.fullTime.homeTeam} - ${match.score.fullTime.awayTeam}</p>
        <hr>
      `;
    });
  } catch (error) {
    console.error('Error al obtener datos:', error);
    document.getElementById('stats').innerText = 'No se pudieron cargar los datos.';
  }
});
