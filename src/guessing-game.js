class GuessingGame {
    constructor() {
        let start = 0;
        let end = 0;
        let first = 0;
        let last = 0;
        let result = 0;
        let candidate = 0;
        let middle = 0;
    }

    setRange(min, max) {
        this.start = min;
        this.end = max;
    }

    guess() {
        this.middle = Math.round(this.start + (this.end - this.start) / 2);
        return this.middle;
    }

    lower() {
        this.end = this.middle;
    }

    greater() {
        this.start = this.middle;
    }
}

module.exports = GuessingGame;
