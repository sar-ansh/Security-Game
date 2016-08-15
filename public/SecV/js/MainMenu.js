var SecV = SecV || {};

//title screen
SecV.MainMenu = function(){
    GAME_WIDTH = 1280;
	GAME_HEIGHT = 720;
};

SecV.MainMenu.prototype = {
  init: function(score) {
    var score = score || 0;
    this.highestScore = this.highestScore || 0;

    this.highestScore = Math.max(score, this.highestScore);
   },
  create: function() {

    //start game text
    var text = "Start";
    var style = { font: "30px Arial", fill: "#FFFFFF", align: "center" };
    var t = this.game.add.text(GAME_WIDTH/2, GAME_HEIGHT/2 - 100, text, style);
    t.anchor.set(0.5);

  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Game');
    }
  }
};