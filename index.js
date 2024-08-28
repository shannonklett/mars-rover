import { parseWidthAndHeight, parseTestCase, executeCommands, createOutputString } from './IOHelper.js'
import Rover from './rover.js';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

const readLine = () => {
    return inputString[currentLine++];
}

const main = () => {
    const gridInput = readLine().trim()
    const { width, height } = parseWidthAndHeight(gridInput)

    while (currentLine < inputString.length) {
        const input = readLine().trim()
        if (input.length <= 1) {
            break;
        }
        const { x, y, orientation, commands } = parseTestCase(input)
        const rover = new Rover(width, height, x, y, orientation)
        executeCommands(rover, commands)
        console.log(createOutputString(rover))
    }
}
