type Node<T> = {
    value: T,
    next: Node<T> | undefined,
}

export default class Queue<T> {
    public length: number;
    private head: Node<T> | undefined;    
    private tail: Node<T> | undefined;

    constructor() {
        this.head = this.tail = undefined
        this.length = 0;
    }

    enqueue(item: T): void {
        this.length++

        const newNode = {value: item} as Node<T>

        if (!this.tail) { //When queue is empty
            this.tail = this.head = newNode
            return;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

    }   

    deque(): T | undefined {
        if (!this.head) {
            this.tail = undefined // If the queue is empty, set tail to be undefined too.
            return undefined
        }

        this.length--;

        const head = this.head;
        this.head = this.head.next;

        //Garbage collection -> unlink unused node
        head.next = undefined

        return head.value
    }

    peek(): T | undefined {
        return this.head?.value
    }
}