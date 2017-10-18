
var game = new Phaser.Game(800, 600, Phaser.WEBGL, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.image('sky', 'assets/skies/deepblue.png');
    game.load.image('phoenixTexture', 'assets/creature/phoenix.png');
    game.load.json('phoenixMesh', 'assets/creature/phoenix.json');

}

var phoenix = null;

function create() {

    game.add.image(0, 0, 'sky');
    // The image used as a texture by this creature object during rendering. If a string Phaser will get for an entry in the Image Cache. Or it can be an instance of a PIXI.Texture.
    phoenix = game.add.creature(450, 350, 'phoenixTexture', 'phoenixMesh');

    phoenix.setAnimation('flight');

    phoenix.scale.set(25.0);
    
    phoenix.play(true); //  true = loop

}
