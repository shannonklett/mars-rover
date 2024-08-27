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

class Rover {

    constructor(orientation) {
        this.orientation = orientation

    }

    turnLeft() {
        this.orientation = nextLeftDirection[this.orientation]
    }

    turnRight() {
        this.orientation = nextRightDirection[this.orientation]
    }

    getOrientation() {
        return this.orientation
    }
}

export default Rover