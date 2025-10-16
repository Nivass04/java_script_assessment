function shipmentTime() {
  const start = document.querySelector("#city1").value;
  const end = document.querySelector("#city2").value;
  // const stDate=document.querySelector(".day").value;
  // console.log("Start:",from);
  // console.log("End:",to);
  // console.log("Start Date:",stDate);
  const display = document.querySelector(".result");

  const graph = {
    Tirunelveli: { Madurai: 2 },
    Madurai: { Tirunelveli: 2, Trichy: 2, Coimbatore: 3, Salem: 3 },
    Trichy: { Chennai: 3 },
    Coimbatore: { Chennai: 3, Bangalore: 3 },
    Salem: { Bangalore: 2 },
    Chennai: { Bangalore: 2, Mumbai: 5 },
    Bangalore: { Mumbai: 3 },
  };

  const minDistance = function (graph, start) {
    const distance = {};
    const previousCity = {};
    const visitedCity = new Set();
    const queue = [start];

    for (let city in graph) {
      distance[city] = Infinity;
    }
    distance[start] = 0;

    while (queue.length > 0) {
      let currentCity = queue.shift();
      if (visitedCity.has(currentCity)) {
        continue;
      } else {
        visitedCity.add(currentCity);
      }

      let neighbours = graph[currentCity];
      for (let neighbour in neighbours) {
        let newDistance = distance[currentCity] + neighbours[neighbour];
        if (newDistance < distance[neighbour]) {
          distance[neighbour] = newDistance;
          previousCity[neighbour] = currentCity;
          queue.push(neighbour);
        }
      }
    }
    return { distance, previousCity };
  };
  const { distance, previousCity } = minDistance(graph, start);

  if (distance[end] === Infinity) {
    document.querySelector(".result").textContent = "Route not found";
    return;
  }
  let path = [];
  let currentCity = end;
  while (currentCity) {
    path.unshift(currentCity);
    currentCity = previousCity[currentCity];
  }
  let totalDays = distance[end];

  let today = new Date();
  let shipmentDate = new Date(today);
  let DaysAdded = 0;
  while (DaysAdded < totalDays) {
    shipmentDate.setDate(shipmentDate.getDate() + 1);
    const day = shipmentDate.getDay();
    if (day != 0 && day != 6) {
      DaysAdded++;
    }
    const options = { day: "numeric", month: "short" };
    document.querySelector(".result").textContent = `
    path:${path}
    total days:${totalDays} days
    arrival date:${shipmentDate.toLocaleDateString(options)}`;
  }
}
document.querySelector(".calc").addEventListener("click", shipmentTime);
