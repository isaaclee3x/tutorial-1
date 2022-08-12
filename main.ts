input.onButtonPressed(Button.A, function () {
    if (x == 2) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 150, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.clearScreen()
        basic.showString("Conntinue")
    }
})
input.onButtonPressed(Button.B, function () {
    if (x == 2) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 152, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    } else {
    	
    }
})
let x = 0
let time = 0
let escape = false
let list2 = [
1,
2,
3,
4,
5,
6,
7,
8,
9
]
basic.showString("Time?")
for (let value of list2) {
    if (input.isGesture(Gesture.Shake)) {
        basic.clearScreen()
        time = parseFloat("" + value + "00")
        break;
    }
    basic.showString("" + value + "00")
}
if (time == 0) {
    time = 400
}
x = 2
let isAdded = true
basic.forever(function () {
    led.plot(x, 2)
    basic.pause(time)
    led.unplot(x, 2)
    basic.pause(time)
    if (x == 4) {
        isAdded = false
    } else if (x == 0) {
        isAdded = true
    }
    if (isAdded) {
        x += 1
    } else {
        x += -1
    }
})
