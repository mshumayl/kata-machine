function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    //Base case - if the previous curr has no children
    if (!curr) {
        return path;
    }

    //Perform recursion
    //In-order traversal: Walk all the left nodes and visit only when there are no left nodes.    
    walk(curr.left, path); 
    path.push(curr.value); //Visit the node
    walk(curr.right, path);

    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}