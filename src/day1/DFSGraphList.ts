//Similar to MazeSolver
function walk(
    graph: WeightedAdjacencyList, 
    curr: number, 
    needle: number, 
    seen: boolean[], 
    path: number[]): boolean {


    if (seen[curr]) { //If the current vertex exists in seen array
        return false;
    }
    
    //Recursion step
    //Pre
    seen[curr] = true;
    path.push(curr); //Visit the node

    //Base case -- found the needle
    if (curr === needle) {
        return true;
    }
    
    //Recurse
    const list = graph[curr]; //Who is this node connected to
    for (let i = 0; i < list.length; i++) {
        const edge = list[i];
        
        if (walk(graph, edge.to, needle, seen, path)) {
            return true;
        }
    }
    
    //Post
    path.pop(); //Remove curr after recursion

    return false;
}

export default function dfs(
    graph: WeightedAdjacencyList, 
    source: number, 
    needle: number): number[] | null {

    const seen: boolean[] = new Array(graph.length).fill(false);
    const path: number[] = [];

    walk(graph, source, needle, seen, path)

    if (path.length === 0) {
        return null;
    }

    return path;
}