{
    interface Stack {
        readonly size: number;
        push(value: string);
        pop();
    }

    type StackNode = {
        readonly value: string;
        readonly next?: StackNode;
    }

    class StackImpl implements Stack {
        // 내부에서만 쓰이는 변수 _
        private _size: number = 0;
        private head?: StackNode;

        // 보통 size 의 범위를 정해 놓는다. (constructor)
        get size() {
            return this._size;
        }
        push(value: string) {

            const node: StackNode = {value, next: this.head};
            this.head = node;
            this._size++;
        }
        pop() {
            // null == undefined : 얕은 비교 true
            if (this.head == null) {
                throw new Error("Stack is empty!");
            }
            const node = this.head;
            this.head = node.next;
            this._size--;
            return node.value;
        }
    }

    const stack = new StackImpl();
    stack.push("하나");
    stack.push("둘");
    stack.push("셋");
    while (stack.size !== 0) {
        console.log(stack.size);
        console.log(stack.pop());
    }
}