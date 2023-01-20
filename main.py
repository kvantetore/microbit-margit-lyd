def on_button_pressed_a():
    global temp
    temp += 10
input.on_button_pressed(Button.A, on_button_pressed_a)

def show_led_1():
    basic.show_leds("""
        . . # . .
                . # # . .
                . . # . .
                . . # . .
                . # # # .
    """)

def on_button_pressed_b():
    global play
    if play == 0:
        play = 1
        basic.show_leds("""
            . # . . .
                        . # # . .
                        . # # # .
                        . # # . .
                        . # . . .
        """)
    else:
        play = 0
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . # . # .
                        . # . # .
                        . . . . .
        """)
input.on_button_pressed(Button.B, on_button_pressed_b)

play = 0
play = 0
temp = 120

def on_forever():
    if play == 1:
        music.play_melody("C D E F G G A A ", temp)
        music.play_melody("A A G F F F F E ", temp)
        music.play_melody("E D D D D C - - ", temp)
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . # # # .
                        . # # # .
                        . . . . .
        """)
basic.forever(on_forever)
