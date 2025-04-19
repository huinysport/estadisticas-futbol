<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Estadísticas de Partidos</title>
</head>
<body>
  <h1>Estadísticas del Partido</h1>
  <div id="stats"></div>

  <script>
    const apiKey = "fdb6b60c8cad45df1afb6c25a6fbbdaf";  // Tu API Key
    const fixtureId = 123456;  // Reemplaza con el ID del partido que deseas ver

    fetch(`https://v3.football.api-sports.io/fixtures/statistics?fixture=${fixtureId}`, {
      method: "GET",
      headers: {
        "x-apisports-key": apiKey
      }
    })
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("stats");
      data.response.forEach(team => {
        const teamTitle = document.createElement("h2");
        teamTitle.textContent = team.team.name;
        container.appendChild(teamTitle);

        team.statistics.forEach(stat => {
          const statElement = document.createElement("p");
          statElement.textContent = `${stat.type}: ${stat.value}`;
          container.appendChild(statElement);
        });
      });
    })
    .catch(error => {
      console.error("Error al obtener estadísticas:", error);
    });
  </script>
</body>
</html>
