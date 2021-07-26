const screen = document.getElementById('screen')
const context = screen.getContext('2d')
const state = {
    player1: {x: 0, y: 0},
    player2: {x: 19, y: 19},

    fruit1: {x: 19, y: 0},
    fruit2: {x: 10, y: 10},
    fruit3: {x: 0, y: 19},

    screen: {width: 20, height: 20}
}
const W = 87, A = 65, S = 83, D = 68                                  //keys
const arrowUp = 38, arrowLeft = 37, arrowDown = 40, arrowRight = 39   //keys

const RENDER = () => {
    context.fillStyle = '#FDFD00'
    context.fillRect(state.player1.x, state.player1.y, 1, 1)        //player1
    context.fillRect(state.player2.x, state.player2.y, 1, 1)        //player2

    context.fillStyle = '#005500'
    context.fillRect(state.fruit1.x, state.fruit1.y, 1, 1)
    context.fillRect(state.fruit2.x, state.fruit2.y, 1, 1)
    context.fillRect(state.fruit3.x, state.fruit3.y, 1, 1)
}


createGame()


function keydownHandler(e) {
    let key = e.keyCode
    // > 0, < 19

    switch (key) {
        //player1
        case W: state.player1.y--
            break
        case A: state.player1.x--
            break
        case S: state.player1.y++
            break
        case D: state.player1.x++
            break
        //player2
        case arrowUp: state.player2.y-- && command
            break
        case arrowLeft: state.player2.x--
            break
        case arrowDown: state.player2.y++
            break
        case arrowRight: state.player2.x++
            break
    }
    notifyXY()
    function borderLimit() {

    }
    function notifyXY(command) {
        if (key) {
            console.log(`x: ${state.player1.x}, y: ${state.player1.y}`)
            console.log(`x: ${state.player2.x}, y: ${state.player2.y}`)
        }
    }
}

function createGame() {
    function renderScreen() {
        context.fillStyle = 'white'
        context.clearRect(0,0, 20, 20)

        RENDER()
    }

    renderScreen()

    window.addEventListener('keydown', keydownHandler)
    requestAnimationFrame(createGame, screen)
}