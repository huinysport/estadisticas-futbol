<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Estadísticas de Fútbol</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background: #f2f2f2;
    }
    h1 {
      color: #2c3e50;
    }
    .stats {
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      max-width: 500px;
      margin-top: 20px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .team {
      font-weight: bold;
      margin-top: 10px;
    }
    .value {
      margin-left: 10px;
    }
  </style>
</head>
<body>
  <h1>Estadísticas del Partido</h1>
  <div class="stats" id="stats">Cargando datos...</div>

  <script>
    const API_KEY = 'fdb6b60c8cad45df1afb6c25a6fbbdaf';
    const fixtureId = 123456; // Cambia este ID por el del partido que deseas consultar

    fetch(`https://v3.football.api-sports.io/fixtures?id=${fixtureId}`, {
      method: 'GET',
      headers: {
        'x-apisports-key': API_KEY
      }
    })
    .then(res => res.json())
    .then(data => {
      const match = data.response[0];
      const home = match.teams.home.name;
      const away = match.teams.away.name;
      const stats = `
        <div class="team">${home}</div>
        <div>Goles: <span class="value">${match.goals.home}</span></div>
        <div class="team">${away}</div>
        <div>Goles: <span class="value">${match.goals.away}</span></div>
      `;
      document.getElementById('stats').innerHTML = stats;
    })
    .catch(error => {
      document.getElementById('stats').innerHTML = 'Error al cargar los datos.';
      console.error(error);
    });
  </script>
</body>
</html>
