enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("Bruh")
})
for (let index = 0; index < 1000; index++) {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        . # # # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        . # # # .
        . . . . .
        `)
}
loops.everyInterval(500, function () {
	
})
