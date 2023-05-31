function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    //Base case - if the previous curr has no children
    if (!curr) {
        return path;
    }

    //Perform recursion
    //Post-order traversal: Walk all the left nodes, then the right nodes, and visit only when there are no left and right nodes.    
    walk(curr.left, path); 
    walk(curr.right, path);
    path.push(curr.value); //Visit the node

    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}