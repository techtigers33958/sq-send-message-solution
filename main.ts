input.onButtonPressed(Button.B, function () {
    radio.sendString("START")
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("hello world")
    basic.showIcon(IconNames.Yes)
})
radio.setGroup(10)
