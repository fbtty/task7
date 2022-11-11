input.onButtonPressed(Button.A, function () {
    led.setBrightness(input.lightLevel())
    basic.showNumber(led.brightness())
})
input.onButtonPressed(Button.B, function () {
    X = input.lightLevel()
    basic.showNumber(X)
    if (X < 50) {
        led.setBrightness(255)
    } else if (X >= 200) {
        led.setBrightness(0)
    } else if (X >= 100) {
        led.setBrightness(64)
    } else {
        led.setBrightness(128)
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
let X = 0
basic.showString("2F21")
basic.forever(function () {
	
})
