input.onButtonPressed(Button.A, function () {
    temp += 100
})
input.onButtonPressed(Button.B, function () {
    if (play == 0) {
        play = 1
        basic.showLeds(`
            . # . . .
            . # # . .
            . # # # .
            . # # . .
            . # . . .
            `)
    } else if (play == 1) {
        play = 2
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    } else {
        play = 0
        basic.showLeds(`
            . . . . .
            . . . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    }
})
let play = 0
play = 0
let temp = 120
basic.forever(function () {
    if (play == 1) {
        music.playMelody("C D E F G G A A ", temp)
        music.playMelody("A A G F F F F E ", temp)
        music.playMelody("E D D D D C - - ", temp)
    } else if (play == 2) {
        music.playMelody("C D E F G - G - ", 120)
    } else {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
})
