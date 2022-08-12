def on_button_pressed_a():
    if x != 2:
        game.game_over()
    else:
        basic.show_icon(IconNames.HEART)
        basic.pause(time / 4)
        basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if x != 2:
        game.game_over()
    else:
        basic.show_icon(IconNames.HEART)
        basic.pause(time / 4)
        basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

x = 0
time = 0
list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
escape = False
basic.show_string("Time?")
for value in list2:
    basic.show_string("" + str(value) + "00")
    if input.button_is_pressed(Button.A) or input.button_is_pressed(Button.B):
        basic.clear_screen()
        time = parse_float("" + str(value) + "00")
        break
if time == 0:
    time = 400
x = 2
isAdded = True

def on_forever():
    global isAdded, x
    led.plot(x, 2)
    basic.pause(time)
    led.unplot(x, 2)
    basic.pause(time)
    if x == 4:
        isAdded = False
    elif x == 0:
        isAdded = True
    if isAdded:
        x += 1
    else:
        x += -1
basic.forever(on_forever)
