import { UI } from './UI.js';

export class Cell extends UI {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.value = 0;
        this.isMine = false;
        this.isReveal = false;
        this.isFlagged = false;
        this.selector = `[data-x="${this.x}"][data-y="${this.y}"]`;   //cell.selector
        this.element = null;
    }
    //odtąd jest prototyp
    createElement() {
        const element = `<div class ="cell border border--concave" data-cell data-x="${this.x}" data-y="${this.y}">`
        return element
    }
    revealCell() {
        this.isReveal = true;
        this.element.classList.remove('border--concave');

        if (this.isMine) {
            this.element.classList.add('cell--is-mine')
            return
        }
        if (this.value) {
            this.element.textContent = this.value;
            this.element.classList.add(`cell-info-${this.value}`)
        }
    }

    toggleFlag() {
        this.isFlagged = !this.isFlagged;
        this.element.classList.toggle('cell--is-flag')
        console.log("cos")

    }

    addMine() {
        this.isMine = true;
    }
}


const cell = new Cell
window.cell = cell