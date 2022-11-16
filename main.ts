input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    X += 1
})
let X = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(led.brightness())
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (X % 2 == 0) {
        led.setBrightness(255)
        led.plotBarGraph(
        input.lightLevel(),
        255
        )
    }
    if (X % 2 == 1) {
        led.setBrightness(255 - input.lightLevel())
    }
})
