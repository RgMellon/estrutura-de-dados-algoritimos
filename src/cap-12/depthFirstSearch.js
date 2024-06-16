import Dictionary from "../cap-8/Dictionary";
import { COLORS, Props as ColorProps, initializeColors } from "../utilts/colors";
import { Graph } from "./Graph"

// TODO: entender e desenhar esse algoritimo
export const depthFirstSearch = (graph, callback) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColors(vertices);

    for(let i = 0; i < vertices.length; i++) {
        if(color[vertices[i]] === COLORS.WHITE) {
            depthFirstSearchVisit(vertices[i], color, adjList, callback);
        }
    }
}

export const depthFirstSearchVisit = (vertex, color, adjList, callback) => {
    color[vertex] = COLORS.GREY;

    if(callback) {
        callback(vertex);
    }

    const neighbors = adjList.get(vertex);

    for(let i = 0; i < neighbors.length; i++) {
        const currentAdjacentVertex = neighbors[i];

        if(color[currentAdjacentVertex] === COLORS.WHITE) {
            depthFirstSearchVisit(currentAdjacentVertex, color, adjList, callback);
        }
    }

    color[vertex] = COLORS.BLACK;
}