input.onButtonPressed(Button.A, function () {
    zebra.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    zebra.change(LedSpriteProperty.Y, 1)
})
let emptyObstacleY = 0
let zebra: game.LedSprite = null
let index = 0
let obstacles2: game.LedSprite[] = []
zebra = game.createSprite(0, 0)
zebra.set(LedSpriteProperty.Brightness, 200)
zebra.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (obstacles2.length > 0 && obstacles2[0].get(LedSpriteProperty.X) == 0) {
        obstacles2.removeAt(0).delete()
    }
    for (let index2 = 0; index2 < 4; index2++) {
        for (let obstacle of obstacles2) {
            obstacle.change(LedSpriteProperty.X, -1)
        }
        basic.pause(1000)
    }
    emptyObstacleY = randint(0, 4)
    for (let index = 0; index <= 4; index++) {
        if (index != emptyObstacleY) {
            obstacles2.push(game.createSprite(4, index))
        }
    }
    for (let obstacle of obstacles2) {
        if (obstacle.get(LedSpriteProperty.X) == zebra.get(LedSpriteProperty.X) && obstacle.get(LedSpriteProperty.Y) == zebra.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
})
