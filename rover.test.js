import Rover from './rover.js'

describe('Rover', () => {
    describe('turnLeft', () => {
        it('should update orientation to W when it is currently N', () => {
            const rover = new Rover('N')

            rover.turnLeft()

            expect(rover.getOrientation()).toEqual('W')
        })
        it('should update orientation to S when it is currently W', () => {
            const rover = new Rover('W')

            rover.turnLeft()

            expect(rover.getOrientation()).toEqual('S')
        })
        it('should update orientation to E when it is currently S', () => {
            const rover = new Rover('S')

            rover.turnLeft()

            expect(rover.getOrientation()).toEqual('E')
        })
        it('should update orientation to N when it is currently E', () => {
            const rover = new Rover('E')

            rover.turnLeft()

            expect(rover.getOrientation()).toEqual('N')
        })
    })
    describe('turnRight', () => {
        it('should update orientation to E when it is currently N', () => {
            const rover = new Rover('N')

            rover.turnRight()

            expect(rover.getOrientation()).toEqual('E')
        })
        it('should update orientation to S when it is currently E', () => {
            const rover = new Rover('E')

            rover.turnRight()

            expect(rover.getOrientation()).toEqual('S')
        })
        it('should update orientation to W when it is currently S', () => {
            const rover = new Rover('S')

            rover.turnRight()

            expect(rover.getOrientation()).toEqual('W')
        })
        it('should update orientation to N when it is currently W', () => {
            const rover = new Rover('W')

            rover.turnRight()

            expect(rover.getOrientation()).toEqual('N')
        })
    })
})