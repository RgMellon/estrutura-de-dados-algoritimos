const INF = Number.MAX_SAFE_INTEGER;

// [0,     2,     4,     6,     inf,    inf]
// [true, true, false, false,  false, false]

const minDistance = (distances, visitedVertices) => {
  let minimumDistance = INF; //4
  let minimumIndex = -1;
  for (let vertex = 0; vertex < distances.length; vertex++) {
    if (visitedVertices[vertex] === false && distances[vertex] <= minimumDistance) {
      minimumDistance = distances[vertex];
      minimumIndex = vertex;
    }
  }
  return minimumIndex;
};

const dijkstra = (graph, sourceVertex) => {
  const distances = [];
  const visitedVertices = [];
  const { length } = graph;

  for (let i = 0; i < length; i++) {
    distances[i] = INF;
    visitedVertices[i] = false;
  }

  distances[sourceVertex] = 0;

  for (let i = 0; i < length - 1; i++) {
    const currentVertex = minDistance(distances, visitedVertices);
    visitedVertices[currentVertex] = true;
    for (let neighborVertex = 0; neighborVertex < length; neighborVertex++) {
        //calcule o tempo que leva pra chegar ate todos os vertices vizinhos do  currentVertex;
      if (!visitedVertices[neighborVertex] && graph[currentVertex][neighborVertex] !== 0 
        && distances[currentVertex] !== INF && 
        distances[currentVertex] + graph[currentVertex][neighborVertex] < distances[neighborVertex]) {
            //se achou um menor tempo, atualiza;
        distances[neighborVertex] = distances[currentVertex] + graph[currentVertex][neighborVertex];
      }
    }
  }

  return distances;
};


const graph = [
    [0, 2, 4, 0, 0, 0],
    [0, 0, 2, 4, 2, 0],
    [0, 0, 0, 0, 3, 0],
    [0, 0, 0, 0, 0, 2],
    [0, 0, 0, 3, 0, 2],
    [0, 0, 0, 0, 0, 0]
];

var distances = dijkstra(graph, 0);

const vertexNames = {
  0: 'A -> A',
  1: 'A -> B',
  2: 'A -> C',
  3: 'A -> D',
  4: 'A -> E',
  5: 'A -> F'
};

for (let i = 0; i < distances.length; i++) {
  console.log(vertexNames[i] + '\t\t' + distances[i]);
}



