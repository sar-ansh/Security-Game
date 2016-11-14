var gamelength=30;
var timerID=null;
var playing=false;
var numholes=6*10;
var currentpos=-1;
var timer_mb = null;
var click$3_3 = false;

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
    if(task$3_3 == 1){
        swal({title: "Game Over!", text: "Your score is: " + totalhits, type: "info", showCancelButton: false, closeOnConfirm: false },function(){
            clearTimeout(timer_mb);
            check3_3();
        });
    }
    else{
        swal("Game Over!", "Your score is:  " + totalhits, "info");
    }
    scoreAnim(totalhits);
}

function play() {
    if(playing) 
        return;
    $('#layer_mb').hide();
    if(task$3_3 == 1){
        setTimeout(function(){
            timer_mb = setInterval(function(){
                $('#layer_mb').fadeToggle(500); 
            }, 3000);
        }, 3000);
    }
    stoptimer();
    playing=true;
    clrholes();
    totalhits=0;
    $('input[name="score"]').val("Score: " + totalhits);
    $('input[name="state"]').val("Game in progress.");
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

$('#layer_mb').click(function(){
    if(task$3_3 == 1){
        $(this).css("opacity", "1");
        clearTimeout(timer_mb);
        click$3_3 = true;
        swal({title: "Oops!", text: "This was a layered advertisement.", type: "error", showCancelButton: false, closeOnConfirm: false },function(){
            clearTimeout(timer_mb);
            check3_3();
        });
        stoptimer();
        playing=false;
        $('input[name="timeleft"]').val("Time: " + 0);
        clrholes();
        $('input[name="state"]').val("Game over. Press start to play again.");
    }
    else{
        swal("Oops", "This was a layered advertisement.", "error")
    }
});