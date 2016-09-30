var Game = SecV || {};

SecV.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'gameplay');

SecV.game.state.add('Boot', SecV.Boot);
SecV.game.state.add('Preload', SecV.Preload);
SecV.game.state.add('MainMenu', SecV.MainMenu);
SecV.game.state.add('Game', SecV.Game);

SecV.game.state.start('Boot');