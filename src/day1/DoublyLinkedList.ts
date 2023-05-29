type Node<T> = {
    value: T,
    prev: Node<T> | undefined;
    next: Node<T> | undefined;
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const newNode = {value: item} as Node<T>;
        
        this.length++        
        
        if (!this.head) { //If DoublyLinkedList is empty
            this.head = this.tail = newNode;
            return;
        }

        //Assign newNode to head's previous
        this.head.prev = newNode;

        //Assign newNode's next to head
        newNode.next = this.head;

        //Assign newNode as new head
        this.head = newNode;
    }
    
    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("Index out of bounds");
        } else if (idx === this.length) {
            this.append(item);
        } else if (idx === 0) {
            this.prepend(item);
        }

        const newNode = {value: item} as Node<T>;

        this.length++

        let curr = this.head
        //Get the node with linear traverse
        for (let i = 0; i <= idx && curr; i++) {
            let prev = curr
            curr = curr.next

            if (i===idx) {
                newNode.prev = prev
                newNode.next = curr

                if (prev) {
                    prev.next = newNode
                }

                if (curr) {
                    curr.prev = newNode
                }
            }
        }
    }
    
    append(item: T): void {
        const newNode = {value: item} as Node<T>;

        this.length++;

        if (!this.tail) {
            this.tail = this.head = newNode;
            return;
        }

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }
    
    remove(item: T): T | undefined {
        
        let curr = this.head;
        for (let i=0; i<this.length && curr; i++) {
            
            if (curr.value === item ) {

                if (curr.next) {
                    curr.next.prev = curr.prev
                }

                if (curr.prev) {
                    curr.prev.next = curr.next
                }

                this.length--;

                if (this.length === 0) {
                    const out = this.head?.value;
                    this.head = this.tail = undefined;
                    return out;
                }

                if (curr === this.head) {
                    this.head = curr.next;
                }

                if (curr === this.tail) {
                    this.tail = curr.prev;
                }

                //Remove obsolete node
                curr.prev = curr.next = undefined; 

                return curr.value;
            } 
            
            curr = curr.next //Walk
        }

        return;
    }
    
    get(idx: number): T | undefined {
        
        let curr = this.head;
        for (let i = 0; i <= idx && curr; i++) {
            
            if (i === idx) {
                return curr?.value;
            }
            curr = curr.next;
        }

        return;
    }
    
    removeAt(idx: number): T | undefined {

        let curr = this.head;
        for (let i = 0; i <= idx && curr; i++) {
            
            if (i === idx) {
                this.length--;

                if (this.length === 0) {
                    const out = this.head?.value;
                    this.head = this.tail = undefined;
                    return out;
                }

                if (curr === this.head) {
                    this.head = curr.next;
                }

                if (curr === this.tail) {
                    this.tail = curr.prev;
                }

                if (curr.prev) {
                    curr.prev.next = curr.next;
                }

                if (curr.next) {
                    curr.next.prev = curr.prev;
                }
                
                return curr?.value;
            }
            curr = curr.next;
        }

        return;
    }
}