const nextLeftDirection = {
    'N': 'W',
    'E': 'N',
    'S': 'E',
    'W': 'S',
}

const nextRightDirection = {
    'N': 'E',
    'E': 'S',
    'S': 'W',
    'W': 'N',
}

const minX = 0
const minY = 0

class Rover {

    #maxX
    #maxY
    #x
    #y
    #orientation
    #isLost = false

    constructor(width, height, x, y, orientation) {
        this.#maxX = width - 1
        this.#maxY = height - 1
        this.#x = x
        this.#y = y
        this.#orientation = orientation
    }

    getMaxX() {
        return this.#maxX
    }

    getMaxY() {
        return this.#maxY
    }

    getPosition() {
        return { x: this.#x, y: this.#y }
    }

    getOrientation() {
        return this.#orientation
    }

    getIsLost() {
        return this.#isLost
    }

    turnLeft() {
        if (this.#isLost) {
            return
        }
        this.#orientation = nextLeftDirection[this.#orientation]
    }

    turnRight() {
        if (this.#isLost) {
            return
        }
        this.#orientation = nextRightDirection[this.#orientation]
    }

    moveForward() {
        if (this.#isLost) {
            return
        }
        switch (this.#orientation) {
            case 'N':
                if (this.#y >= this.#maxY) {
                    this.#isLost = true
                    return;
                }
                this.#y++
                break;
            case 'E':
                if (this.#x >= this.#maxX) {
                    this.#isLost = true
                    return;
                }
                this.#x++
                break;
            case 'S':
                if (this.#y <= minY) {
                    this.#isLost = true
                    return;
                }
                this.#y--
                break;
            case 'W':
                if (this.#x <= minX) {
                    this.#isLost = true
                    return;
                }
                this.#x--
                break;
        }


    }
}

export default Rover