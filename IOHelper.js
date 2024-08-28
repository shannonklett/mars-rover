export const parseWidthAndHeight = (input) => {
    const [width, height] = input.split(' ').map((i) => parseInt(i))
    return { width, height }
}

export const parseTestCase = (input) => {
    const [initialization, commands] = input.substring(1).split(')')
    const initializationParts = initialization.split(',')
    return {
        x: parseInt(initializationParts[0]),
        y: parseInt(initializationParts[1]),
        orientation: initializationParts[2].trim(),
        commands: commands.trim()
    }
}

export const executeCommands = (rover, commands) => {
    for (let char of commands) {
        switch (char) {
            case 'L':
                rover.turnLeft()
                break;
            case 'R':
                rover.turnRight()
                break;
            case 'F':
                rover.moveForward()
                break;
        }
    }
}

export const createOutputString = (rover) => {
    const position = rover.getPosition()
    let output = `(${position.x}, ${position.y}, ${rover.getOrientation()})`
    if (rover.getIsLost()) {
        output = output.concat(" LOST")
    }
    return output
}