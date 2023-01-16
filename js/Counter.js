import { UI } from './UI.js'

export class Counter extends UI {
    value = null;
    #element = null;

    init() {
        this.#element = this.getElement(this.UiSelectors.counter)
    }

    //ustawienie początkowej wartości
    setValue(value) {
        this.value = value;
        this.#updateValue();
    }

    //publiczne bo będziemy ją wywoływać gdzie indziej.
    increment() {
        this.value++;
        this.#updateValue();
    }

    decrement() {
        this.value--;
        this.#updateValue();
    }

    #updateValue() {
        this.#element.textContent = this.value
    }
}