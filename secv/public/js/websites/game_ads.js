var game_ad1 = function(){
    var ad_content = "<br><div class='game_adverts' id='game_advert_1'><br><div class='marquee1'>Free website domains!</div><br><span>Call Now: +91-8765678248</span><br><div class='marquee2'><br>Limited availability</div></div><br>";
    return(ad_content);   
};

var game_ad2 = function(){
    var ad_content = "<br><div class='game_adverts' id='game_advert_2'><span>Claim ASAP</span><div class='marquee'>Congratulations! Congratulations! Congratulations! You are the proud owner of a brand new Genesis</div></div><br>";
    return(ad_content);   
};

var game_ad3 = function(){
    var ad_content = "<br><div class='game_adverts' id='game_advert_3'><span style='font-size: 20px; float:left; font-weight: bold; color: #fff;'>Click now! Click now! Click now!</span><div class='marquee'>You are our millionth visitor.</div><div style='float: right;'>Ads by <span style='background: #FFF; color: #24d453;'>Techiata</span></div></div><br>";
    return(ad_content);
};

var game_ad4 = function(){
    var ad_content = "<br><div class='game_adverts' id='game_advert_4'><div class='banner'><div class='phrase-1 marquee'>Do you kid's grades scare you?</div><div class='phrase-2'>Join Marksy for better future of your children.</div></div></div><br>";
    return(ad_content);
};

var game_ad5 = function(){
    var ad_content = "<br><div class='game_adverts' id='game_advert_5'><div class='banner'><div class='phrase-1'>Are you getting the most out of your website?<br><br>We can help you get there.</div><div class='phrase-2'>Join us for better advertising services.<br>Join us to handle advertisements efficiently.<br>Join us and forget your code.</div></div></div><br>";
    return(ad_content);
};

$('#game_advert_2 .marquee').marquee({
    duration: 2000,
    gap: 50,
    delayBeforeStart: 0,
    direction: 'up',
    duplicated: false,
    pauseOnHover: 'true'
});

$('#game_advert_3 .marquee').marquee({
    duration: 2000,
    gap: 50,
    delayBeforeStart: 0,
    direction: 'right',
    duplicated: false
});

$('#game_advert_4 .marquee').marquee({
    duration: 10000,
    gap: 50,
    delayBeforeStart: -5000,
    direction: 'left',
    duplicated: false
});