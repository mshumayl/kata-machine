function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    //Base case - if the previous curr has no children
    if (!curr) {
        return path;
    }

    //Perform recursion
    //Pre-recurse
    path.push(curr.value); //Add value to travelled path
    
    //Recurse
    walk(curr.left, path); //No need to return path, as it is already mutated by reference.
    walk(curr.right, path);

    //Post-recurse
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}