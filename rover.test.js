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
})

const initializeRover = ({ width = 2, height = 2, x = 0, y = 0, orientation = 'N' }) => {
    return new Rover(width, height, x, y, orientation)
}