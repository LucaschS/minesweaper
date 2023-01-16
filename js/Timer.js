import { UI } from './UI.js'

export class Timer extends UI {
    #element = null;
    #interval = null;
    numberOfSeconds = 0;
    maxNumberOfSeconds = 999

    init() {
        this.#element = this.getElement(this.UiSelectors.timer)
    }

    #startTimer() {
        this.#interval = setInterval(() => this.#updateTimer(), 1000)
    }

    stopTimer() {
        clearInterval(this.#interval)
    }

    resetTimer() {
        this.numberOfSeconds = 0;
        this.#setTimerValue(this.numberOfSeconds);
        this.stopTimer(); //czyszczenie a nie stop. usuwa wywoływanie funkcji co określony odstęp czasu określony wcześniej przez metodę setInterval().
        this.#startTimer();
    }
    #updateTimer() {
        this.numberOfSeconds++;
        this.numberOfSeconds <= this.maxNumberOfSeconds
            ? this.#setTimerValue(this.numberOfSeconds)
            : this.stopTimer()
    }

    #setTimerValue(value) {
        this.#element.textContent = value
    }
}