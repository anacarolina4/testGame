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
const W = 87, A = 65, S = 83, D = 68 

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
    
    if (key === W && state.player1.y > 0) {
        state.player1.y--

        console.log(`y: ${state.player1.y}, key 'W' has been pressed`)
        return
    }
    if (key === A && state.player1.x > 0) {
        state.player1.x--

        console.log(`x: ${state.player1.x}, key 'A' has been pressed`)
        return
    }
    if (key === S && state.player1.y < 19) {
        state.player1.y++

        console.log(`y: ${state.player1.y}, key 'S' has been pressed`)
        return
    }
    if (key === D && state.player1.x < 19) {
        state.player1.x++

        console.log(`x: ${state.player1.x}, key 'D' has been pressed`)
        return
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


//falta configs do player2
//random spawn e respawn das fruits