type Node<T> = {
    value: T,
    next: Node<T> | undefined
}

export default class Queue<T> {
    public length: number;
    private tail: Node<T> | undefined;
    private head: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.tail = this.head = undefined;
    }

    enqueue(item: T): void {
        const newNode = {value: item} as Node<T>;

        this.length++;

        //If the queue is empty
        if (!this.tail) {
            this.tail = this.head = newNode;
            return;
        } else {
            this.tail.next = newNode; //Set the current tail's next to point to newNode
            this.tail = newNode; //Set newNode as the new tail value
        }
    }   

    deque(): T | undefined {
        //If the queue is empty
        if (!this.head) {
            this.tail = undefined;
            return undefined
        }

        this.length--;

        const head = this.head;
        this.head = this.head.next;

        return head.value
    }

    peek(): T | undefined {
        return this.head?.value
    }
}