input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(4)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(3)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(2)
})
radio.setGroup(95)
basic.forever(function () {
	
})
