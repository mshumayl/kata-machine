export default class MinHeap {
    public length: number;
    private data: number[]; //The array that represents the MinHeap

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    
    delete(): number {
        if (this.length === 0) {
            return -1;
        }
        
        //If the MinHeap has one element remaining
        const out = this.data[0];
        this.length--;
        if (this.length === 0) { 
            this.data = [];
            
            return out
        }

        //If the MinHeap has more than one element remaining
        this.data[0] = this.data[this.length];
        this.heapifyDown(0); //Start heapifyDown from head of MinHeap

        return out;
    }

    private heapifyDown(idx: number): void {
        //1. Remove head element
        //2. Take minimum heap element (last element) and put it in the first position
        //3. Heapify down

        const leftIdx = this.getLeftChildIdx(idx);
        const rightIdx = this.getRightChildIdx(idx);

        //Base case: 
        //1. If the index is greater than the array 
        //2. If latest left index is greater than length, because the heap gets filled from left to right
        if (idx >= this.length || leftIdx >= this.length) {
            return;
        }

        const leftV = this.data[leftIdx];
        const rightV = this.data[rightIdx];
        const v = this.data[idx];

        if (leftV > rightV && v > rightV) { //Right value is the smallest
            //Swap
            this.data[idx] = rightV;
            this.data[rightIdx] = v;

            this.heapifyDown(rightIdx);
        } else if (rightV > leftV && v > leftV) { //Left value is the smallest
            //Swap
            this.data[idx] = leftV;
            this.data[leftIdx] = v;

            this.heapifyDown(leftIdx);
        }

    }

    private heapifyUp(idx: number): void {
        //Recursively compare with the parent
        
        //Base case
        if (idx === 0) {
            return;
        }

        const pIdx = this.getParentIdx(idx);
        const pValue = this.data[pIdx];
        const value = this.data[idx];

        if  (pValue > value) { //Go up until the current value is larger than the parent value
            //Swap
            this.data[idx] = pValue;
            this.data[pIdx] = value;

            //Heapify up to parent index
            this.heapifyUp(pIdx);
        }
    }

    private getParentIdx(childIdx: number): number {
        return Math.floor((childIdx - 1) / 2);
    }

    private getLeftChildIdx(parentIdx: number): number {
        return ((parentIdx * 2) + 1); 
    }
    
    private getRightChildIdx(parentIdx: number): number {
        return ((parentIdx * 2) + 2); 
    }
}