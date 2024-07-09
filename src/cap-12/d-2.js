const INF = Number.MAX_SAFE_INTEGER;

const graph = [
    [0, 2, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 4, 0],
    [0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0]
]


function minDistance(distances, visited) {
    let minVertex = INF;
    let minIndexVertex = -1;

    for(let index = 0; index < distances.length; index ++) {
        if(distances[index] <= minVertex && !visited[index]) {
            minVertex = distances[index];
            minIndexVertex = index;
        }
    }

    return minIndexVertex;
}

function dijkstra(graph, source) {
    const distances = []
    const visited = []

    const {length} = graph;
    
    for(let i = 0; i < length; i++) {
        distances.push(INF)
        visited.push(false);
    }

    distances[source] = 0;

    for(vertex = 0; vertex < length -1; vertex ++) {
        const currentVertex = minDistance(distances, visited);
        visited[currentVertex] = true;
        
        for(let neighbor = 0; neighbor < length; neighbor++) {
            if(!visited[neighbor] && graph[currentVertex][neighbor] !== 0 &&
                 distances[currentVertex] !== INF && distances[currentVertex] + graph[currentVertex][neighbor] < distances[neighbor]){ 
                    distances[neighbor] = distances[currentVertex] + graph[currentVertex][neighbor]
                 }
        }
        
    }
    return distances;
}


const result = dijkstra(graph, 0);
