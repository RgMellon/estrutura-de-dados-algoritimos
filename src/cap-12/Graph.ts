import Dictionary from "../cap-8/Dictionary";

/**
 * Represents a Graph data structure.
 */
export class Graph {
    private isDirected: boolean;
    private allVerticesName: string[];
    private adjList: Dictionary; // Stores the list of adjacents

    /**
     * Constructs a new instance of Graph.
     * @param isDirected - Indicates if the graph is directed or not. Default is false.
     */
    constructor(isDirected = false) {
        this.isDirected = isDirected;
        this.allVerticesName = [];
        this.adjList = new Dictionary();
    }

    /**
     * Adds a vertex to the graph.
     * @param vertice - The name of the vertex to be added.
     */
    addVertex(vertice: string) {
        if(!this.allVerticesName.includes(vertice)) {
            this.allVerticesName.push(vertice);
            this.adjList.set(vertice, [])
        }
    }

    /**
     * Adds an edge between two vertices.
     * @param verticeOne - The name of the first vertex.
     * @param verticeTwo - The name of the second vertex.
     */
    addEdge(verticeOne: string, verticeTwo: string) {
        if(!this.isPresentOnGraph(verticeOne)) {
            this.addVerticeOnGraph(verticeOne);
        }

        if(!this.isPresentOnGraph(verticeTwo)) {
            this.addVerticeOnGraph(verticeTwo);
        }

        this.adjList.get(verticeOne).push(verticeTwo);
        
        if(!this.isDirected) {
            this.adjList.get(verticeTwo).push(verticeOne) // because one points to the other, since it's not directed
        }
    }

    /**
     * Returns an array of all vertices in the graph.
     * @returns An array of vertex names.
     */
    getVertices() {
        return this.allVerticesName;
    }

    /**
     * Returns the adjacency list of the graph.
     * @returns The adjacency list.
     */
    getAdjList() {
        return this.adjList
    }

    /**
     * Checks if a vertex is present in the graph.
     * @param vertice - The name of the vertex to be checked.
     * @returns True if the vertex is present, false otherwise.
     */
    private isPresentOnGraph(vertice: string) {
        return this.adjList.get(vertice);
    }

    /**
     * Adds a vertex to the graph if it's not already present.
     * @param vertice - The name of the vertex to be added.
     */
    private addVerticeOnGraph(vertice: string) {
        this.addVertex(vertice);
    }

    /**
     * Returns a string representation of the graph.
     * @returns A string representation of the graph.
     */
    toString(){
        let string = '';

        for(let i = 0; i < this.allVerticesName.length; i++) {
            string += `${this.allVerticesName[i]} -> `;
            const neighbors = this.adjList.get(this.allVerticesName[i]);
            for(let j = 0; j < neighbors.length; j++) {
                string += `${neighbors[j]} `;
            }

            string += '\n';
        }

        return string;
    }
}