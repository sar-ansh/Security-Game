var SecV = SecV || {};

//loading the game assets
SecV.Preload = function(){};

SecV.Preload.prototype = {
  preload: function() {
  	//show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

  	//load game assets      
    this.load.image('map', 'assets/images/map.png');
    this.load.spritesheet('hero', 'assets/images/hero.png', 90, 140);
  },
  create: function() {
  	this.state.start('MainMenu');
  }
};