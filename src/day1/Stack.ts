type Node<T> = {
    value: T,
    prev: Node<T> | undefined,
}

export default class Stack<T> {
    public length: number;
    private head: Node<T> | undefined;
    
    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const newNode = {value: item} as Node<T>;

        this.length++

        if (!this.head) {
            this.head = newNode;
            return; 
        } 
        
        newNode.prev = this.head; //Set the prev of newNode to the current head node
        this.head = newNode; //Set newNode as the new head node
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined
        }

        this.length--

        const head = this.head;
        this.head = this.head.prev;

        head.prev = undefined;

        return head.value
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}