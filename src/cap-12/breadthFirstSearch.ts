import { Queue } from "../cap-5/queue/queue";
import { COLORS, initializeColors } from "../utilts/colors";
import { Graph } from "./Graph";

type Props = {
    [key: string]: number | null ;
}

export const breadFirstSearch = (graph: Graph, startVertex: string, callback: (vertex:string) => void) => {
    const allVertices = graph.getVertices();
    const adjcentVertices =  graph.getAdjList();

    const color = initializeColors(allVertices);

    const q  = new Queue();
    
    const distances = {} as Props;
    const predecessors = {} as Props;

    q.enqueue(startVertex);

    for(let i = 0; i < allVertices.length; i++) {
        distances[allVertices[i]] = 0;
        predecessors[allVertices[i]] = null
    }
    

    while(!q.isEmpty())  {
        const currentVertex = q.dequeue();
        const adjacentVertexOfCurrentVertex = adjcentVertices.get(currentVertex)

        color[currentVertex] = COLORS.GREY;

        
        for(let i = 0; i < adjacentVertexOfCurrentVertex.length; i++) {
            const currentAdjacentVertexOfCurrentVertex = adjacentVertexOfCurrentVertex[i];

            if(color[currentAdjacentVertexOfCurrentVertex] == COLORS.WHITE) {
                color[currentAdjacentVertexOfCurrentVertex] = COLORS.GREY;

                
                distances[currentAdjacentVertexOfCurrentVertex] = distances[currentVertex]! + 1;
                predecessors[currentAdjacentVertexOfCurrentVertex] = currentVertex;

                q.enqueue(currentAdjacentVertexOfCurrentVertex)
            }
        }

        color[currentVertex] = COLORS.BLACK;

        if(callback) {
            callback(currentVertex)
        }

    }

    return {
        distances,
        predecessors
    }

}   