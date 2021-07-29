sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Pizza.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    info.startCountdown(3)
})
let Pizza: Sprite = null
info.setScore(0)
scene.setBackgroundColor(9)
let Mole = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . 1 1 e e e 1 1 . . . . . . . 
    . . 1 f e e e 1 f e . . . . . . 
    . . e e e e e e e e e . . . . . 
    . e e e f f e e e e e . . . . . 
    . e e e f f e e e e e e . . . . 
    . e e e e e e e e e e e . . . . 
    . e e e e e e e e e e e . . . . 
    . e e d d d d d d d e e . . . . 
    . e e d d d d d d d d e . . . . 
    . e e d d d d d d d d e . . . . 
    . e e d d d d d d d e e . . . . 
    . e e e d d d d d d e . . . . . 
    . . e e d d d d d d e . . . . . 
    . . e e d d d d d e e . . . . . 
    . . . e e . . . e e e . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Mole)
Pizza = sprites.create(img`
    . . e . . . . . . . . . . . . . 
    . . 4 e e . . . . . . . . . . . 
    . . 5 4 e e . . . . . . . . . . 
    . . 5 5 5 4 e e . . . . . . . . 
    . . e e 4 4 4 e e e . . . . . . 
    . . 4 e e e 5 4 4 e e e . . . . 
    . 5 2 2 5 5 5 2 2 4 4 e e e . . 
    . 5 2 2 5 e 5 2 2 5 e 4 4 e . . 
    . . 5 5 5 e 5 5 5 5 e 4 4 . . . 
    . . 4 4 5 e e e 5 5 4 4 . . . . 
    . . . e 4 4 4 4 4 . . . . . . . 
    . . . 4 . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
