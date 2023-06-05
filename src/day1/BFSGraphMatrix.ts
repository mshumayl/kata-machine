export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    const q: number[] = [source];
    seen[source] = true; //`source` is pre-added

    do {
        const curr = q.shift() as number;
        
        //Base case - found
        if (curr === needle) {
            break;
        }

        const adjs = graph[curr];
        for (let i = 0; i < adjs.length; i++) { //Iterate over items in the nested array (adjs)
            if (adjs[i] === 0) { //If there is no edge
                continue;
            }

            if (seen[i]) { //If item has already been added into the seen array
                continue;
            }

            seen[i] = true;
            prev[i] = curr; //Assigning parent-child relationship i.e. path

            q.push(i); //Add to queue
        }
        //Bookkeeping
        seen[curr] = true; //Add current node to seen array
        
    } while (q.length); //As long as the queue contains an item

    //Build it backwards
    let curr = needle; //Start from the vertex that we need to find
    const out: number[] = [] //Path from needle to source

    while (prev[curr] !== -1) {
        out.push(curr); //Add to inverted path
        curr = prev[curr]; //Set `curr` to the next (`previous`) value
    }

    if (out.length) { //If a path is built
        return [source].concat(out.reverse()); //Reverse the path and concat with source
    }

    return null;
}