input.onGesture(Gesture.ScreenUp, function () {
    basic.showArrow(ArrowNames.North)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showArrow(ArrowNames.East)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.West)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showArrow(ArrowNames.South)
})
basic.forever(function () {
	
})
