var task$2_6 = 0;
var task$3_3 = 0;

$('#randomgame_back').click(function(){
    $('#url-randomgamec').hide();
    $('#url-indexc').show();
});

$('#randomgame_next').click(function(){
    var game_name = ["tictactoe", "molebuster", "guesswhat"];
    var game_num = Math.floor(Math.random()*3);
    if(task$2_6 == 1)
        game_num = 2;
    else if(task$3_3 == 1)
        game_num = 1;
    var randomgame = game_name[game_num];
    $('#browser-url').val("www." + randomgame + ".game");
    urltosite();
});