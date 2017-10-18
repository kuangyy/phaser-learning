
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.atlasJSONHash('bot', 'assets/sprites/running_bot.png', 'assets/sprites/running_bot.json');
    game.load.spritesheet('mummy', 'assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);

}

var bot;

function create() {

    bot = game.add.sprite(200, 200, 'bot');

    // create a animate
    bot.animations.add('run');
    // start play(name, frameRate(frame per second), loop (true/false), killOnComplete(If set to true when the animation completes (only happens if loop=false) the parent Sprite will be killed.))
    bot.animations.play('run', 15, true);

    game.input.onDown.addOnce(changeMummy, this);

}

function changeMummy() {

	// 改变游戏对象的基础结构。旧的纹理被删除，新的一个被引用或从缓存中获取。 from witch frame
    bot.loadTexture('mummy', 0);

    bot.animations.add('walk');

    bot.animations.play('walk', 30, true);

}
