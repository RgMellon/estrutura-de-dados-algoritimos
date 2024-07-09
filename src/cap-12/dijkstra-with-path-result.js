const INF = Number.MAX_SAFE_INTEGER;

const minDistance = (distances, visitedVertices) => {
  let minimumDistance = INF;
  let minimumIndex = -1;
  for (let vertex = 0; vertex < distances.length; vertex++) {
    if (!visitedVertices[vertex] && distances[vertex] <= minimumDistance) {
      minimumDistance = distances[vertex];
      minimumIndex = vertex;
    }
  }
  return minimumIndex;
};

const dijkstra = (graph, sourceVertex) => {
  const distances = [];
  const visitedVertices = [];
  const previousVertices = [];
  const { length } = graph;

  for (let i = 0; i < length; i++) {
    distances[i] = INF;
    visitedVertices[i] = false;
    previousVertices[i] = null;  // Inicializa o array com null
  }

  distances[sourceVertex] = 0;

  for (let i = 0; i < length - 1; i++) {
    const currentVertex = minDistance(distances, visitedVertices);
    visitedVertices[currentVertex] = true;
    for (let neighborVertex = 0; neighborVertex < length; neighborVertex++) {
      if (!visitedVertices[neighborVertex] && graph[currentVertex][neighborVertex] !== 0 
          && distances[currentVertex] !== INF && 
          distances[currentVertex] + graph[currentVertex][neighborVertex] < distances[neighborVertex]) {
        
        distances[neighborVertex] = distances[currentVertex] + graph[currentVertex][neighborVertex];
        previousVertices[neighborVertex] = currentVertex;  // Atualiza o vértice anterior
      }
    }
  }

  return { distances, previousVertices };
};

const reconstructPath = (previousVertices, targetVertex) => {
  const path = [];
  for (let vertex = targetVertex; vertex !== null; vertex = previousVertices[vertex]) {
    path.unshift(vertex);
  }
  return path;
};

const graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 2, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0]
];

const { distances, previousVertices } = dijkstra(graph, 0);

const vertexNames = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
  4: 'E',
  5: 'F'
};

for (let i = 0; i < distances.length; i++) {
  const path = reconstructPath(previousVertices, i).map(v => vertexNames[v]).join(' -> ');
  console.log(`${vertexNames[0]} -> ${vertexNames[i]}: ${path} (Distância: ${distances[i]})`);
}


for(let neighbor = 0; neighbor < length; neighbor++) {
            if(!visited[neighbor] 
                && graph[currentVertex][neighbor] !== 0
                && distances[currentVertex] !== INF
                && distances[currentVertex] + graph[currentVertex][neighbor] < distances[neighbor]
                ) {
                    distances[neighbor] = distances[currentVertex] + graph[currentVertex][neighbor]
            }
        }