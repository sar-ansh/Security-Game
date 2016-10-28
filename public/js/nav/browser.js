var hidesites = function(){
        $('#url-gabberc').hide();
        $('#url-mailc').hide();
        $('#url-gamereviewsc').hide();
        $('#url-blogc').hide();
        $('#url-bankc').hide();
        $('#url-randomgamec').hide();
        $('#url-tictactoec').hide();
        $('#url-molebusterc').hide();
        $('#url-guesswhatc').hide();
        $('#url-travelc').hide();
        $('#url-shopc').hide();
        $('#url-crackdiyc').hide();
        $('#url-musicfilesc').hide();
        $('#url-indexc').hide();
        $('#url-errorc').hide();
}

var urltosite = function(){
    var url_wait = Math.floor(Math.random()*5+1);
    var url = $('#browser-url').val();
    if(!url){
        $('#url-error-message').html("So, you are one of those hitchhikers without a destination in mind. Where are you headed smarty?");
        hidesites();
        $('#url-errorc').show();
    }
    else{
        $('#url-error-message').html("A dog ate your web page. Yeah that's it.");
        switch(url){
            case "www.gabber.game":
                hidesites();
                $('#url-loaderc').show();
                setTimeout(function(){
                    $('#url-loaderc').hide();
                    $('#url-gabberc').show();
                }, url_wait*1000);
                break;
            case "www.mail.game":
                hidesites();
                $('#url-loaderc').show();
                setTimeout(function(){
                    $('#url-loaderc').hide();
                    $('#url-mailc').show();
                }, url_wait*1000);
                break;
            case "www.gamereviews.game":
                hidesites();
                $('#url-loaderc').show();
                setTimeout(function(){
                    $('#url-loaderc').hide();
                    $('#url-gamereviewsc').show();
                }, url_wait*1000);
                break;
            case "www.blog.game":
                hidesites();
                $('#url-loaderc').show();
                setTimeout(function(){
                    $('#url-loaderc').hide();
                    $('#url-blogc').show();
                }, url_wait*1000);
                break;
            case "www.bank.game":
                hidesites();
                $('#url-loaderc').show();
                setTimeout(function(){
                    $('#url-loaderc').hide();
                    $('#url-bankc').show();
                }, url_wait*1000);
                break;
            case "www.randomgame.game":
                hidesites();
                $('#url-loaderc').show();
                setTimeout(function(){
                    $('#url-loaderc').hide();
                    $('#url-randomgamec').show();
                }, url_wait*1000);
                break;
            case "www.tictactoe.game":
                hidesites();
                $('#url-loaderc').show();
                setTimeout(function(){
                    $('#url-loaderc').hide();
                    $('#url-tictactoec').show();
                }, url_wait*1000);
                break;
            case "www.molebuster.game":
                hidesites();
                $('#url-loaderc').show();
                setTimeout(function(){
                    $('#url-loaderc').hide();
                    $('#url-molebusterc').show();
                }, url_wait*1000);
                break;
            case "www.guesswhat.game":
                hidesites();
                $('#url-loaderc').show();
                setTimeout(function(){
                    $('#url-loaderc').hide();
                    $('#url-guesswhatc').show();
                }, url_wait*1000);
                break;
            case "www.travel.game":
                hidesites();
                $('#url-loaderc').show();
                setTimeout(function(){
                    $('#url-loaderc').hide();
                    $('#url-travelc').show();
                }, url_wait*1000);
                break;
            case "www.shop.game":
                hidesites();
                $('#url-loaderc').show();
                setTimeout(function(){
                    $('#url-loaderc').hide();
                    $('#url-shopc').show();
                }, url_wait*1000);
                break;
            case "www.crackdiy.game":
                hidesites();
                $('#url-loaderc').show();
                setTimeout(function(){
                    $('#url-loaderc').hide();
                    $('#url-crackdiyc').show();
                }, url_wait*1000);
                break;
            case "www.musicfiles.game":
                hidesites();
                $('#url-loaderc').show();
                setTimeout(function(){
                    $('#url-loaderc').hide();
                    $('#url-musicfilesc').show();
                }, url_wait*1000);
                break;
            case "www.index.game":
                hidesites();
                $('#url-indexc').show();
                break;
            default:
                hidesites();
                $('#url-errorc').show();
                break;
        }
    }
}

$('.address_bar').bind('keydown', function(e) {
    if(e.keyCode == 13) {
        urltosite();
    }
});

$('#url-go').bind('click', urltosite);

$('#url-refresh').click(function(){
    hidesites();
    urltosite();
});

$('#url-index').click(function(){
    hidesites();
    $('#url-indexc').show();
});