var SecV = SecV || {};

SecV.Game = function(){
    GAME_WIDTH = 1920;
	GAME_HEIGHT = 1080;
    target_x = 0;
    target_y = 0;
};

SecV.Game.prototype = {
    create: function() {
        map = this.game.add.sprite(0, 0, 'map');
        
        this.game.world.setBounds(0, 0, GAME_WIDTH, GAME_HEIGHT);

        hero = this.game.add.sprite(GAME_WIDTH/2, GAME_HEIGHT/2, 'hero');
        hero.anchor.setTo(0.5, 1);
        this.game.physics.enable(hero, Phaser.Physics.ARCADE);
        
        hero.body.collideWorldBounds = true;
        
        this.game.camera.follow(hero);
    },

    update: function() {  
        hero_x1 = hero.body.x;
        hero_y1 = hero.body.y;
        hero_x2 = hero_x1 + hero.width;
        hero_y2 = hero_y1 + hero.height;
        
        if (this.game.input.mousePointer.isDown){
            target_x = this.game.input.mousePointer.x + this.game.camera.x;
            target_y = this.game.input.mousePointer.y + this.game.camera.y;
          
            this.game.physics.arcade.moveToPointer(hero, 300);
            var pointer = this.game.add.graphics(target_x, target_y);
            pointer.lineStyle(4, 0xffd900);
            pointer.drawEllipse(0, 0, 20, 6);
            
            setTimeout(function(){
                pointer.destroy();
            },10);
        }  
        
        if (Phaser.Rectangle.contains(hero.body, target_x, target_y)){
            hero.body.velocity.setTo(0, 0);
        }

        pos_x = this.game.input.mousePointer.x + this.game.camera.x;
        pos_y = this.game.input.mousePointer.y + this.game.camera.y;

        if (pos_x >= hero_x1 && pos_x <= hero_x2){
            if(pos_y < hero_y1){
                hero.animations.add('anim', [4], 10, true);
                hero.animations.play('anim');
                //console.log("4");
            }
            else if(pos_y > hero_y2){
                hero.animations.add('anim', [0], 10, true);
                hero.animations.play('anim');                    
                //console.log("0");                            
            }
            else{
                hero.animations.add('anim', [0], 10, true);
                hero.animations.play('anim'); 
                //console.log("0");                            
            }                   
        }
        else if (pos_x > hero_x2){
            if(pos_y < hero_y1){
                hero.animations.add('anim', [5], 10, true);
                hero.animations.play('anim'); 
                //console.log("5");
            }
            else if(pos_y > hero_y2){
                hero.animations.add('anim', [7], 10, true);
                hero.animations.play('anim'); 
                //console.log("7");
            }
            else{
                hero.animations.add('anim', [6], 10, true);
                hero.animations.play('anim'); 
                //console.log("6");
            }
        }
        else if (pos_x < hero_x1){
            if(pos_y < hero_y1){
                hero.animations.add('anim', [3], 10, true);
                hero.animations.play('anim'); 
                //console.log("3");
            }
            else if(pos_y > hero_y2){
                hero.animations.add('anim', [1], 10, true);
                hero.animations.play('anim'); 
                //console.log("1");
            }
            else{
                hero.animations.add('anim', [2], 10, true);
                hero.animations.play('anim'); 
                //console.log("2");
            }
        }
    },
    
    render: function() {
        this.game.debug.cameraInfo(this.game.camera, 500, 32);
        this.game.debug.spriteCoords(hero, 32, 32);
    }
};