export default function bfs(head: BinaryNode<number>, needle: number): boolean {

    //Queue is used to keep track of walked notes to be visited. FIFO.
    const q: (BinaryNode<number> | null)[] = [head];

    //Iterative approach
    while (q.length) { //While the queue contains a value

        const curr = q.shift() as BinaryNode<number> | null | undefined; //Pretend this is an actual queue. In reality, this is a JS ArrayList which have high costs for shift() and unshift()

        if (!curr) { //If q.shift() is done on a empty queue
            continue; //Continue to next iteration (i.e. exit, as there is no more item in the queue)
        }

        //Perform search
        if (curr.value === needle) {
            return true;
        }

        //If the current iteration was not continued or returned, push children into queue
        q.push(curr.left); //curr is one of BinaryNode<number> | null | undefined
        q.push(curr.right);
    }

    return false;
}