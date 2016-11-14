var x_ttt = "js/websites/games/cross.png";
var o_ttt = "js/websites/games/o.png";
var blank_ttt = "js/websites/games/blank.png";
var pause_ttt = 0;
var all_ttt = 0;
var a_ttt = 0;
var b = 0;
var c = 0;
var d_tt = 0;
var e = 0;
var f_ttt = 0;
var g_ttt = 0;
var h_ttt = 0;
var i_ttt = 0;
var temp_ttt="";
var ok_ttt = 0;
var cf_ttt = 0;
var choice_ttt=9;
var aRandomNumber_ttt = 0;
var comp_ttt = 0; 
var t = 0;
var wn_ttt = 0;
var ls_ttt = 0;
var ts_ttt = 0;

function logicOne_ttt() {
    if ((a_ttt==1)&&(b==1)&&(c==1)) all_ttt=1;
    if ((a_ttt==1)&&(d_tt==1)&&(g_ttt==1)) all_ttt=1;
    if ((a_ttt==1)&&(e==1)&&(i_ttt==1)) all_ttt=1;
    if ((b==1)&&(e==1)&&(h_ttt==1)) all_ttt=1;
    if ((d_tt==1)&&(e==1)&&(f_ttt==1)) all_ttt=1;
    if ((g_ttt==1)&&(h_ttt==1)&&(i_ttt==1)) all_ttt=1;
    if ((c==1)&&(f_ttt==1)&&(i_ttt==1)) all_ttt=1;
    if ((g_ttt==1)&&(e==1)&&(c==1)) all_ttt=1;
    if ((a_ttt==2)&&(b==2)&&(c==2)) all_ttt=2;
    if ((a_ttt==2)&&(d_tt==2)&&(g_ttt==2)) all_ttt=2;
    if ((a_ttt==2)&&(e==2)&&(i_ttt==2)) all_ttt=2;
    if ((b==2)&&(e==2)&&(h_ttt==2)) all_ttt=2;
    if ((d_tt==2)&&(e==2)&&(f_ttt==2)) all_ttt=2;
    if ((g_ttt==2)&&(h_ttt==2)&&(i_ttt==2)) all_ttt=2;
    if ((c==2)&&(f_ttt==2)&&(i_ttt==2)) all_ttt=2;
    if ((g_ttt==2)&&(e==2)&&(c==2)) all_ttt=2;
    if ((a_ttt != 0)&&(b != 0)&&(c != 0)&&(d_tt != 0)&&(e != 0)&&(f_ttt != 0)&&(g_ttt != 0)&&(h_ttt != 0)&&(i_ttt != 0)&&(all_ttt == 0)) all_ttt = 3;
}

function logicTwo_ttt() {
    if ((a_ttt==2)&&(b==2)&&(c== 0)&&(temp_ttt=="")) temp_ttt="C";
    if ((a_ttt==2)&&(b== 0)&&(c==2)&&(temp_ttt=="")) temp_ttt="B";
    if ((a_ttt== 0)&&(b==2)&&(c==2)&&(temp_ttt=="")) temp_ttt="A";
    if ((a_ttt==2)&&(d_tt==2)&&(g_ttt== 0)&&(temp_ttt=="")) temp_ttt="G";
    if ((a_ttt==2)&&(d_tt== 0)&&(g_ttt==2)&&(temp_ttt=="")) temp_ttt="D";
    if ((a_ttt== 0)&&(d_tt==2)&&(g_ttt==2)&&(temp_ttt=="")) temp_ttt="A";
    if ((a_ttt==2)&&(e==2)&&(i_ttt== 0)&&(temp_ttt=="")) temp_ttt="I";
    if ((a_ttt==2)&&(e== 0)&&(i_ttt==2)&&(temp_ttt=="")) temp_ttt="E";
    if ((a_ttt== 0)&&(e==2)&&(i_ttt==2)&&(temp_ttt=="")) temp_ttt="A";
    if ((b==2)&&(e==2)&&(h_ttt== 0)&&(temp_ttt=="")) temp_ttt="H";
    if ((b==2)&&(e== 0)&&(h_ttt==2)&&(temp_ttt=="")) temp_ttt="E";
    if ((b== 0)&&(e==2)&&(h_ttt==2)&&(temp_ttt=="")) temp_ttt="B";
    if ((d_tt==2)&&(e==2)&&(f_ttt== 0)&&(temp_ttt=="")) temp_ttt="F";
    if ((d_tt==2)&&(e== 0)&&(f_ttt==2)&&(temp_ttt=="")) temp_ttt="E";
    if ((d_tt== 0)&&(e==2)&&(f_ttt==2)&&(temp_ttt=="")) temp_ttt="D";
    if ((g_ttt==2)&&(h_ttt==2)&&(i_ttt== 0)&&(temp_ttt=="")) temp_ttt="I";
    if ((g_ttt==2)&&(h_ttt== 0)&&(i_ttt==2)&&(temp_ttt=="")) temp_ttt="H";
    if ((g_ttt== 0)&&(h_ttt==2)&&(i_ttt==2)&&(temp_ttt=="")) temp_ttt="G";
    if ((c==2)&&(f_ttt==2)&&(i_ttt== 0)&&(temp_ttt=="")) temp_ttt="I";
    if ((c==2)&&(f_ttt== 0)&&(i_ttt==2)&&(temp_ttt=="")) temp_ttt="F";
    if ((c== 0)&&(f_ttt==2)&&(i_ttt==2)&&(temp_ttt=="")) temp_ttt="C";
    if ((g_ttt==2)&&(e==2)&&(c== 0)&&(temp_ttt=="")) temp_ttt="C";
    if ((g_ttt==2)&&(e== 0)&&(c==2)&&(temp_ttt=="")) temp_ttt="E";
    if ((g_ttt== 0)&&(e==2)&&(c==2)&&(temp_ttt=="")) temp_ttt="G";
}

function logicThree_ttt() {
    if ((a_ttt==1)&&(b==1)&&(c==0)&&(temp_ttt=="")) temp_ttt="C";
    if ((a_ttt==1)&&(b==0)&&(c==1)&&(temp_ttt=="")) temp_ttt="B";
    if ((a_ttt==0)&&(b==1)&&(c==1)&&(temp_ttt=="")) temp_ttt="A";
    if ((a_ttt==1)&&(d_tt==1)&&(g_ttt==0)&&(temp_ttt=="")) temp_ttt="G";
    if ((a_ttt==1)&&(d_tt==0)&&(g_ttt==1)&&(temp_ttt=="")) temp_ttt="D";
    if ((a_ttt==0)&&(d_tt==1)&&(g_ttt==1)&&(temp_ttt=="")) temp_ttt="A";
    if ((a_ttt==1)&&(e==1)&&(i_ttt==0)&&(temp_ttt=="")) temp_ttt="I";
    if ((a_ttt==1)&&(e==0)&&(i_ttt==1)&&(temp_ttt=="")) temp_ttt="E";
    if ((a_ttt==0)&&(e==1)&&(i_ttt==1)&&(temp_ttt=="")) temp_ttt="A";
    if ((b==1)&&(e==1)&&(h_ttt==0)&&(temp_ttt=="")) temp_ttt="H";
    if ((b==1)&&(e==0)&&(h_ttt==1)&&(temp_ttt=="")) temp_ttt="E";
    if ((b==0)&&(e==1)&&(h_ttt==1)&&(temp_ttt=="")) temp_ttt="B";
    if ((d_tt==1)&&(e==1)&&(f_ttt==0)&&(temp_ttt=="")) temp_ttt="F";
    if ((d_tt==1)&&(e==0)&&(f_ttt==1)&&(temp_ttt=="")) temp_ttt="E";
    if ((d_tt==0)&&(e==1)&&(f_ttt==1)&&(temp_ttt=="")) temp_ttt="D";
    if ((g_ttt==1)&&(h_ttt==1)&&(i_ttt==0)&&(temp_ttt=="")) temp_ttt="I";
    if ((g_ttt==1)&&(h_ttt==0)&&(i_ttt==1)&&(temp_ttt=="")) temp_ttt="H";
    if ((g_ttt==0)&&(h_ttt==1)&&(i_ttt==1)&&(temp_ttt=="")) temp_ttt="G";
    if ((c==1)&&(f_ttt==1)&&(i_ttt==0)&&(temp_ttt=="")) temp_ttt="I";
    if ((c==1)&&(f_ttt==0)&&(i_ttt==1)&&(temp_ttt=="")) temp_ttt="F";
    if ((c==0)&&(f_ttt==1)&&(i_ttt==1)&&(temp_ttt=="")) temp_ttt="C";
    if ((g_ttt==1)&&(e==1)&&(c==0)&&(temp_ttt=="")) temp_ttt="C";
    if ((g_ttt==1)&&(e==0)&&(c==1)&&(temp_ttt=="")) temp_ttt="E";
    if ((g_ttt==0)&&(e==1)&&(c==1)&&(temp_ttt=="")) temp_ttt="G";
}

function checkSpace_ttt() {
    if ((temp_ttt=="A")&&(a_ttt==0)) {
    ok_ttt=1;
    if (cf_ttt==0) a_ttt=1;
    if (cf_ttt==1) a_ttt=2;
    }
    if ((temp_ttt=="B")&&(b==0)) {
    ok_ttt=1;
    if (cf_ttt==0) b=1;
    if (cf_ttt==1) b=2;
    }
    if ((temp_ttt=="C")&&(c==0)) {
    ok_ttt=1;
    if (cf_ttt==0) c=1;
    if (cf_ttt==1) c=2;
    }
    if ((temp_ttt=="D")&&(d_tt==0)) {
    ok_ttt=1;
    if (cf_ttt==0) d_tt=1;
    if (cf_ttt==1) d_tt=2;
    }
    if ((temp_ttt=="E")&&(e==0)) {
    ok_ttt=1;
    if (cf_ttt==0) e=1;
    if (cf_ttt==1) e=2;
    }
    if ((temp_ttt=="F")&&(f_ttt==0)) {
    ok_ttt=1
    if (cf_ttt==0) f_ttt=1;
    if (cf_ttt==1) f_ttt=2;
    }
    if ((temp_ttt=="G")&&(g_ttt==0)) {
    ok_ttt=1
    if (cf_ttt==0) g_ttt=1;
    if (cf_ttt==1) g_ttt=2;
    }
    if ((temp_ttt=="H")&&(h_ttt==0)) {
    ok_ttt=1;
    if (cf_ttt==0) h_ttt=1;
    if (cf_ttt==1) h_ttt=2;
    }
    if ((temp_ttt=="I")&&(i_ttt==0)) {
    ok_ttt=1;
    if (cf_ttt==0) i_ttt=1; 
    if (cf_ttt==1) i_ttt=2; 
    }
}

function yourChoice_ttt(chName) {
    pause_ttt = 0;
    if (all_ttt!=0) ended_ttt();
    if (all_ttt==0) {
        cf_ttt = 0;
        ok_ttt = 0;
        temp_ttt=chName;
        checkSpace_ttt();
        if (ok_ttt==1) document.images[chName].src = x_ttt;
        if (ok_ttt==0)taken_ttt();
        process_ttt();
        if ((all_ttt==0)&&(pause_ttt==0)) myChoice_ttt();
    }
}

function taken_ttt() {
    $.notify("This cell in not empty! Try another one.", "error");
    pause_ttt=1;
}

function myChoice_ttt() {
    temp_ttt="";
    ok_ttt = 0;
    cf_ttt=1;
    logicTwo_ttt();
    logicThree_ttt();
    checkSpace_ttt();
    while(ok_ttt==0) {
        aRandomNumber_ttt=Math.random();
        comp_ttt=Math.round((choice_ttt-1)*aRandomNumber_ttt)+1;
        if (comp_ttt==1) temp_ttt="A";
        if (comp_ttt==2) temp_ttt="B";
        if (comp_ttt==3) temp_ttt="C";
        if (comp_ttt==4) temp_ttt="D";
        if (comp_ttt==5) temp_ttt="E";
        if (comp_ttt==6) temp_ttt="F";
        if (comp_ttt==7) temp_ttt="G";
        if (comp_ttt==8) temp_ttt="H";
        if (comp_ttt==9) temp_ttt="I";
        checkSpace_ttt();
    }
    document.images[temp_ttt].src= o_ttt;
    process_ttt();
}

function ended_ttt() {
    $.notify("Game over! To play once more start a new game.", "error")
}

function process_ttt() {
    logicOne_ttt();
    if (all_ttt==1){ swal("Well played!", "You win!", "info"); wn_ttt++; scoreAnim(2); }
    if (all_ttt==2){ swal("Better luck next time!", "You lose!", "info"); ls_ttt++; scoreAnim(0); }
    if (all_ttt==3){ swal("Not bad!", "Draw!", "info"); ts_ttt++; scoreAnim(1); }
    if (all_ttt!=0) {
        $('input[name="you"]').val("Wins: " + wn_ttt);
        $('input[name="computer"]').val("Losses: " + ls_ttt);
        $('input[name="ties"]').val("Draws: " + ts_ttt);
    }
}

function playAgain_ttt() {
    if (all_ttt==0) {
        if(confirm("Sure?")) 
            reset_ttt();
    }
    if (all_ttt>0) reset_ttt();
}

function reset_ttt() {
    all_ttt = 0;
    a_ttt = 0;
    b = 0;
    c = 0;
    d_ttt = 0;
    e = 0;
    f_ttt = 0;
    g_ttt = 0;
    h_ttt = 0;
    i_ttt = 0;
    temp_ttt="";
    ok_ttt = 0;
    cf_ttt = 0;
    choice_ttt=9;
    aRandomNumber_ttt = 0;
    comp_ttt = 0;
    document.images.A.src= blank_ttt;
    document.images.B.src= blank_ttt;
    document.images.C.src= blank_ttt;
    document.images.D.src= blank_ttt;
    document.images.E.src= blank_ttt;
    document.images.F.src= blank_ttt;
    document.images.G.src= blank_ttt;
    document.images.H.src= blank_ttt;
    document.images.I.src= blank_ttt;
    if (t==0) { t=2; myChoice_ttt(); }
    t--;
}

function clearOut_ttt() {
    $('input[name="you"]').val("Wins: 0");
    $('input[name="computer"]').val("Losses: 0");
    $('input[name="ties"]').val("Draws: 0");
}

clearOut_ttt();