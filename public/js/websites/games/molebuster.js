var gamelength=30;
var timerID=null;
var playing=false;
var numholes=6*10;
var currentpos=-1;

function clrholes() {
    for(var k=0; k<document.dmz.elements.length; k++)
        document.dmz.elements[k].checked=false;
}

function stoptimer() {
    if(playing)
        clearTimeout(timerID);
}

function showtime(remtime) {
    $('input[name="timeleft"]').val("Time: " + remtime);
    if(playing) {
        if(remtime==0) {
        stopgame();
        return;
        }
        else {
            temp=remtime-1;
            timerID=setTimeout("showtime(temp)",1000);
        }
    }
}

function stopgame() {
    stoptimer();
    playing=false;
    $('input[name="timeleft"]').val("Time: " + 0);
    clrholes();
    $('input[name="state"]').val("Game over. Press start to play again.");
    swal("Game Over!", "Your score is:  " + totalhits, "info");
}

function play() {
    stoptimer();
    if(playing) {
        stopgame();
        return;
    }
    playing=true;
    clrholes();
    totalhits=0;
    $('input[name="score"]').val("Score: " + totalhits);
    $('input[name="state"]').val("Game in progress. Press stop to stop the game.");
    launch();
    showtime(gamelength);
}

function launch() {
    var launched=false;
    while(!launched) {
        mynum = Math.floor(Math.random()*100%numholes);
        if(mynum!=currentpos) {
            document.dmz.elements[mynum].checked=true;
            currentpos=mynum;
            launched=true;
        }
    }
}

function hithead(id) {
    if(playing==false) {
        clrholes();
        $('input[name="state"]').val("Press start to play.");
        return;
    }
    if(currentpos!=id) {
        totalhits+=-1;
    }
    else {
        totalhits+=1;
        launch();
    }
    $('input[name="score"]').val("Score: " + totalhits);
    document.dmz.elements[id].checked=false;
}