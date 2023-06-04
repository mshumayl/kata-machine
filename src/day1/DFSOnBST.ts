function search(curr: BinaryNode<number> | null, needle: number): boolean {
    //Base case: If we traversed to the leaf of the tree
    if (!curr) {
        return false;
    }

    //Base case: If we find the value
    if (curr.value === needle) {
        return true;
    }

    if (curr.value < needle) {
        return search(curr.right, needle);
    }

    return search(curr.left, needle); //Go left if needle is smaller than curr.value
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return search(head, needle);
}