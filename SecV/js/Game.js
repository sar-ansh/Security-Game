var SecV = SecV || {};

SecV.Game = function(){
    GAME_WIDTH = 1280;
	GAME_HEIGHT = 720;
    move_x = 0;
    move_y = 0;
};

SecV.Game.prototype = {
    create: function() {
        map = this.game.add.sprite(0, 0, 'map');
        
        /* When you change the world size below, the camera starts following the player, but the values that mouse gets and ones that are the position of the sprite are obtained w.r.t different frames.*/
        this.game.world.setBounds(0, 0, GAME_WIDTH, GAME_HEIGHT);

        hero = this.game.add.sprite(GAME_WIDTH/2, GAME_HEIGHT/2, 'hero');
        hero.anchor.setTo(0.5, 1);
        this.game.physics.enable(hero, Phaser.Physics.ARCADE);
        
        hero.body.collideWorldBounds = true;
        
        this.game.camera.follow(hero);
    },

    update: function() {
        
        if (this.game.input.mousePointer.isDown){
            move_x = this.game.input.mousePointer.x;
            move_y = this.game.input.mousePointer.y;
            console.log(move_x, move_y);
            
            hero_x1 = hero.body.x;
            hero_y1 = hero.body.y;
            hero_x2 = hero_x1 + hero.width;
            hero_y2 = hero_y1 + hero.height;

            console.log(hero_x1, hero_y1, hero_x2, hero_y2);
          
            this.game.physics.arcade.moveToPointer(hero, 300);
            var graphics1 = this.game.add.graphics(move_x, move_y);
            graphics1.lineStyle(4, 0xffd900);
            graphics1.drawEllipse(0, 0, 20, 6);
            
            setTimeout(function(){
                graphics1.destroy();
            },100);
        }  
        
        //  if it's overlapping the mouse, don't move any more
        if (Phaser.Rectangle.contains(hero.body, move_x, move_y)){
            console.log("in");
            hero.body.velocity.setTo(0, 0);
        }

        pos_x = this.game.input.mousePointer.x;
        pos_y = this.game.input.mousePointer.y;
        //console.log("Pos: " + pos_x + " " + pos_y);

        hero_x1 = hero.body.x;
        hero_y1 = hero.body.y;
        hero_x2 = hero_x1 + hero.width;
        hero_y2 = hero_y1 + hero.height;
        
        //console.log(hero_x1, hero_y1, hero_x2, hero_y2);


        if (pos_x >= hero_x1 && pos_x <= hero_x2){
            if(pos_y < hero_y1){
                hero.animations.add('anim', [4], 10, true);
                hero.animations.play('anim');
                console.log("4");
            }
            else if(pos_y > hero_y2){
                hero.animations.add('anim', [0], 10, true);
                hero.animations.play('anim');                    
                console.log("0");                            
            }
            else{
                hero.animations.add('anim', [0], 10, true);
                hero.animations.play('anim'); 
                console.log("0");                            
            }                   
        }
        else if (pos_x > hero_x2){
            if(pos_y < hero_y1){
                hero.animations.add('anim', [5], 10, true);
                hero.animations.play('anim'); 
                console.log("5");
            }
            else if(pos_y > hero_y2){
                hero.animations.add('anim', [7], 10, true);
                hero.animations.play('anim'); 
                console.log("7");
            }
            else{
                hero.animations.add('anim', [6], 10, true);
                hero.animations.play('anim'); 
                console.log("6");
            }
        }
        else if (pos_x < hero_x1){
            if(pos_y < hero_y1){
                hero.animations.add('anim', [3], 10, true);
                hero.animations.play('anim'); 
                console.log("3");
            }
            else if(pos_y > hero_y2){
                hero.animations.add('anim', [1], 10, true);
                hero.animations.play('anim'); 
                console.log("1");
            }
            else{
                hero.animations.add('anim', [2], 10, true);
                hero.animations.play('anim'); 
                console.log("2");
            }
        }
    },
    
    render: function() {

        this.game.debug.cameraInfo(this.game.camera, 500, 32);
        this.game.debug.spriteCoords(hero, 32, 32);

    }
};