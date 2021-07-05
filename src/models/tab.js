import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';
import { getRandomInt, factorial } from './utils';

const columnPrice = 1;

export class Tab {
    id = null;
    index = null;
    system = 6;
    numbers = [];

    constructor(index) {
        makeAutoObservable(this, {
            id: false,
            index: false
        });
        this.id = uuidv4();
        this.index = index;
    }

    setSystem(system) {
        this.system = system;
    }

    selectNumber(number) {
        this.numbers.push(number);
    }

    deselectNumber(number) {
        this.numbers = this.numbers.filter(n => n !== number);
    }

    isNumberSelected(number) {
        return this.numbers.includes(number);
    }

    clear() {
        this.system = 6;
        this.numbers = [];
    }

    quickPick() {
        const n = new Set();
        while(n.size !== this.system) {
            n.add(getRandomInt(1, 49))
        }
        this.numbers = [...n];
    }

    get isValid() {
        return this.numbers.length === 0 || this.numbers.length === this.system;
    }

    get price() {
        if (this.isDirty && this.isValid) {
            if (this.system === 6) return columnPrice;
            return factorial(this.system) / factorial(6) * factorial(this.system - 6) * columnPrice;
        }

        return 0;
    }

    get priceFormatted() {
        return `$${this.price.toFixed(2)}`;
    }

    get isDirty() {
        return this.numbers.length > 0;
    }

    get errorMessage() {
        if (!this.isValid) {
            const diff = Math.abs(this.system - this.numbers.length);
            return this.numbers.length > this.system ?
                `Remove ${diff} number${diff > 1 ? 's': ''}` :
                `Select ${diff} more number${diff > 1 ? 's': ''}`;
        }
        return null;
    }

}