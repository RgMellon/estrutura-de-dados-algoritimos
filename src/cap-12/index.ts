import { StackUsingObject } from "../cap-4/stack/stack-using-object";
import { Graph } from "./Graph";
import { breadFirstSearch } from "./breadthFirstSearch";
import { depthFirstSearch } from "./depthFirstSearch.js";

const graph = new Graph();
const myVertices = ["A", "B", "C",  "D", "E", "F", "G", "H", "I"];

for(let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("A", "D")
graph.addEdge("C", "D")
graph.addEdge("C", "G")
graph.addEdge("D", "G")
graph.addEdge("D", "H")
graph.addEdge("B", "E")
graph.addEdge("B", "F")
graph.addEdge("E", "I")



// console.log(graph.toString());


const printVertex = (value: string) => {console.log(value);}
// const {distances, predecessors} = breadFirstSearch(graph, graph.getVertices()[0], printVertex)


 depthFirstSearch(graph, printVertex)

//De A ate algum vertice, qual o caminho mais curto

// const queroChegarNo = "G";

// const s = new StackUsingObject()

// function getTest(key: string | null) {
//     if(!key) return
        
//     s.push(key)
//     getTest(predecessors[key] )
// }


// getTest(queroChegarNo)

// // console.log(distances[queroChegarNo])

// for(let i = 0; i<= distances[queroChegarNo]; i++) {
//     console.log(s.pop());
// }

const fromVertex = myVertices[0];

// for(let i = 1; i < myVertices.length; i++) {
    
//     const toVertex = myVertices[i]
//     const path = new StackUsingObject();

    
//     for(let v = toVertex; v != fromVertex; v = predecessors[v!]) {
//         path.push(v)
//     }

//     path.push(fromVertex);

//     let s = path.pop();

//     while(!path.isEmpty()) {
//         s += ' - ' + path.pop();
//     }

//     console.log(s)
// }



