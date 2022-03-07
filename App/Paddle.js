const SPEED = 0.07

export default class Paddle {
    constructor(paddleElem) {
        this.paddleElem = paddleElem
        this.reset()
    }

    // Get & set paddle position
    get position() {
        return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue('--position'))
    }

    set position(value) {
        this.paddleElem.style.setProperty('--position', value)
    }

    // Create boundary 
    rect() {
        return this.paddleElem.getBoundingClientRect()
    }

    //  Reset paddle position
    reset() {
        this.position = 50
    }

    // Set computer speed according to the increasing velocity of the ball
    update(delta, ballHeight) {
        this.position += SPEED * delta * (ballHeight - this.position)
    }
}