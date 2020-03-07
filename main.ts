// Send message to start challenge, wait for the
// smiley and then begin
input.onButtonPressed(Button.B, function () {
    radio.sendString("START")
    basic.showIcon(IconNames.Happy)
})
// Send message to challenge and wait for the check
// icon to tell if it is correct
input.onButtonPressed(Button.A, function () {
    radio.sendString("hello world")
    basic.showIcon(IconNames.Yes)
})
radio.setGroup(10)
