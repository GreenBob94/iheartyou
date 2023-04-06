input.onButtonPressed(Button.A, function () {
    basic.showString("I")
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("[name]")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
