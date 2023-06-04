function walk_both(currA: BinaryNode<number> | null, currB: BinaryNode<number> | null): boolean {

    //Base case -- if both is null, i.e. are we at the leaves (structural check)
    if (currA == null && currB == null ) {
        return true;
    }

    //Base case -- either one node is null and the other is not null (structural check)
    if (currA == null || currB == null ) {
        return false;
    }

    //Base case - nodes are not the same (value check)
    if (currA.value !== currB.value) {
        return false;
    }

    //Return comparison recursively
    return walk_both(currA.left, currB.left) && walk_both(currA.right, currB.right); 
}

export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    return walk_both(a, b);
}