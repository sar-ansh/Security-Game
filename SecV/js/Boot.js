var SecV = SecV || {};

SecV.Boot = function(){};

//setting game configuration and loading the assets for the loading screen
SecV.Boot.prototype = {
  preload: function() {
  	//assets we'll use in the loading screen
    this.load.image('preloadbar', 'assets/images/preloader_bar.png');
  },
  create: function() {
  	//loading screen will have a white background
    this.game.stage.backgroundColor = '#000000';

    //scaling options
    this.input.maxPointers = 1;
    this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;  
	//this.scale.minWidth = 240;
	//this.scale.minHeight = 170;
	//this.scale.maxWidth = 1920;
	//this.scale.maxHeight = 1080;
	
	//have the game centered horizontally
	this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

	//screen size will be set automatically
	this.scale.setScreenSize(true);

	//physics system for movement
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    this.state.start('Preload');
  }
};
