datalogger.onLogFull(function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
basic.showLeds(`
    # . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . #
    `)
datalogger.setColumnTitles(
"son",
"temperature",
"lumiere"
)
loops.everyInterval(1000, function () {
    basic.showIcon(IconNames.Square)
    datalogger.log(
    datalogger.createCV("lumiere", input.lightLevel()),
    datalogger.createCV("son", input.soundLevel()),
    datalogger.createCV("temperature", input.temperature())
    )
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(100)
})
basic.forever(function () {
	
})
