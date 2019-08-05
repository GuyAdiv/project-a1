export class Item {
    constructor (text) {
        this.text = text;
        this.id = undefined;
        this.next = undefined;
    }

    Next (next) {
        this.next = next;
    }
}