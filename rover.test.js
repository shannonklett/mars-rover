import Rover from './rover.js'

describe('Rover', () => {
    describe('constructor', () => {
        it('should initialize the rover with the given params', () => {
            const rover = new Rover(4, 8, 0, 1, 'N')

            expect(rover.getMaxX()).toEqual(3)
            expect(rover.getMaxY()).toEqual(7)
            expect(rover.getOrientation()).toEqual('N')
            expect(rover.getPosition()).toEqual({ x: 0, y: 1 })
            expect(rover.getIsLost()).toEqual(false)
        })
    })
    describe('turnLeft', () => {
        it('should update orientation to W when it is currently N', () => {
            const rover = initializeRover({ orientation: 'N' })

            rover.turnLeft()

            expect(rover.getOrientation()).toEqual('W')
        })
        it('should update orientation to S when it is currently W', () => {
            const rover = initializeRover({ orientation: 'W' })

            rover.turnLeft()

            expect(rover.getOrientation()).toEqual('S')
        })
        it('should update orientation to E when it is currently S', () => {
            const rover = initializeRover({ orientation: 'S' })

            rover.turnLeft()

            expect(rover.getOrientation()).toEqual('E')
        })
        it('should update orientation to N when it is currently E', () => {
            const rover = initializeRover({ orientation: 'E' })

            rover.turnLeft()

            expect(rover.getOrientation()).toEqual('N')
        })
        it('should not update orientation if the rover is lost', () => {
            const rover = initializeRover({ x: 0, y: 0, orientation: 'S' })

            rover.moveForward()
            expect(rover.getIsLost()).toEqual(true)
            rover.turnLeft()

            expect(rover.getOrientation()).toEqual('S')
        })
    })
    describe('turnRight', () => {
        it('should update orientation to E when it is currently N', () => {
            const rover = initializeRover({ orientation: 'N' })

            rover.turnRight()

            expect(rover.getOrientation()).toEqual('E')
        })
        it('should update orientation to S when it is currently E', () => {
            const rover = initializeRover({ orientation: 'E' })

            rover.turnRight()

            expect(rover.getOrientation()).toEqual('S')
        })
        it('should update orientation to W when it is currently S', () => {
            const rover = initializeRover({ orientation: 'S' })

            rover.turnRight()

            expect(rover.getOrientation()).toEqual('W')
        })
        it('should update orientation to N when it is currently W', () => {
            const rover = initializeRover({ orientation: 'W' })

            rover.turnRight()

            expect(rover.getOrientation()).toEqual('N')
        })
        it('should not update orientation if the rover is lost', () => {
            const rover = initializeRover({ x: 0, y: 0, orientation: 'S' })

            rover.moveForward()
            expect(rover.getIsLost()).toEqual(true)
            rover.turnRight()

            expect(rover.getOrientation()).toEqual('S')
        })
    })
    describe('moveForward', () => {
        it('should increase y by one when it is facing North', () => {
            const rover = initializeRover({ x: 0, y: 0, orientation: 'N' })

            rover.moveForward()

            expect(rover.getPosition()).toEqual({ x: 0, y: 1 })
        })
        it('should decrease y by one when it is facing South', () => {
            const rover = initializeRover({ height: 2, x: 0, y: 1, orientation: 'S' })

            rover.moveForward()
            0
            expect(rover.getPosition()).toEqual({ x: 0, y: 0 })
        })
        it('should increase x by one when it is facing East', () => {
            const rover = initializeRover({ x: 0, y: 0, orientation: 'E' })

            rover.moveForward()

            expect(rover.getPosition()).toEqual({ x: 1, y: 0 })
        })
        it('should decrease x by one when it is facing West', () => {
            const rover = initializeRover({ width: 2, x: 1, y: 0, orientation: 'W' })

            rover.moveForward()

            expect(rover.getPosition()).toEqual({ x: 0, y: 0 })
        })
        it('should become lost and not change position when facing North and at the top of the grid', () => {
            const rover = initializeRover({ height: 2, x: 0, y: 1, orientation: 'N' })

            rover.moveForward()

            expect(rover.getPosition()).toEqual({ x: 0, y: 1 })
            expect(rover.getIsLost()).toEqual(true)
        })
        it('should become lost and not change position when facing South and at the bottom of the grid', () => {
            const rover = initializeRover({ x: 0, y: 0, orientation: 'S' })

            rover.moveForward()

            expect(rover.getPosition()).toEqual({ x: 0, y: 0 })
            expect(rover.getIsLost()).toEqual(true)
        })
        it('should become lost and not change position when facing East and at the end of the grid', () => {
            const rover = initializeRover({ width: 2, x: 1, y: 0, orientation: 'E' })

            rover.moveForward()

            expect(rover.getPosition()).toEqual({ x: 1, y: 0 })
            expect(rover.getIsLost()).toEqual(true)
        })
        it('should become lost and not change position when facing West and at the start of the grid', () => {
            const rover = initializeRover({ x: 0, y: 0, orientation: 'W' })

            rover.moveForward()

            expect(rover.getPosition()).toEqual({ x: 0, y: 0 })
            expect(rover.getIsLost()).toEqual(true)
        })
    })
    describe('integration', () => {
        it('once lost, a rover should remain lost and its position should not update', () => {
            const rover = initializeRover({ x: 0, y: 0, orientation: 'S' })

            rover.moveForward()
            expect(rover.getIsLost()).toEqual(true)
            rover.turnRight()
            rover.turnRight()
            rover.moveForward()
            rover.moveForward()

            expect(rover.getPosition()).toEqual({ x: 0, y: 0 })
            expect(rover.getIsLost()).toEqual(true)
        })
        it('sample input 1', () => {
            const rover = new Rover(4, 8, 2, 3, 'E')

            rover.turnLeft()
            rover.moveForward()
            rover.turnRight()
            rover.moveForward()
            rover.moveForward()

            // Assuming the sample output is incorrect since the grid in only 4 wide and 0-indexed
            expect(rover.getPosition()).toEqual({ x: 3, y: 4 })
            expect(rover.getOrientation()).toEqual('E')
            expect(rover.getIsLost()).toEqual(true)
        })
        it('sample input 2', () => {
            const rover = new Rover(4, 8, 0, 2, 'N')

            rover.moveForward()
            rover.moveForward()
            rover.turnLeft()
            rover.moveForward()
            rover.turnRight()
            rover.moveForward()
            rover.moveForward()

            expect(rover.getPosition()).toEqual({ x: 0, y: 4 })
            expect(rover.getOrientation()).toEqual('W')
            expect(rover.getIsLost()).toEqual(true)
        })
        it('sample input 3', () => {
            const rover = new Rover(4, 8, 2, 3, 'N')

            rover.moveForward()
            rover.turnLeft()
            rover.turnLeft()
            rover.moveForward()
            rover.turnRight()

            expect(rover.getPosition()).toEqual({ x: 2, y: 3 })
            expect(rover.getOrientation()).toEqual('W')
            expect(rover.getIsLost()).toEqual(false)
        })
        it('sample input 4', () => {
            const rover = new Rover(4, 8, 1, 0, 'S')

            rover.moveForward()
            rover.moveForward()
            rover.turnRight()
            rover.turnLeft()
            rover.moveForward()

            expect(rover.getPosition()).toEqual({ x: 1, y: 0 })
            expect(rover.getOrientation()).toEqual('S')
            expect(rover.getIsLost()).toEqual(true)
        })
        it('should be able to navigate from the SW corner to the NE corner', () => {
            const rover = new Rover(3, 3, 0, 0, 'N')

            rover.moveForward()
            rover.turnRight()
            rover.moveForward()
            rover.turnLeft()
            rover.moveForward()
            rover.turnRight()
            rover.moveForward()

            expect(rover.getPosition()).toEqual({ x: 2, y: 2 })
            expect(rover.getOrientation()).toEqual('E')
            expect(rover.getIsLost()).toEqual(false)
        })


    })
})

const initializeRover = ({ width = 2, height = 2, x = 0, y = 0, orientation = 'N' }) => {
    return new Rover(width, height, x, y, orientation)
}