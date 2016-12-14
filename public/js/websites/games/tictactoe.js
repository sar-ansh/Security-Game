var x_ttt = "js/websites/games/cross.png";
var o_ttt = "js/websites/games/o.png";
var blank_ttt = "js/websites/games/blank.png";
var pause_ttt = 0;
var all_ttt = 0;
var pos_a_ttt = 0;
var pos_b_ttt = 0;
var pos_c_ttt = 0;
var pos_d_ttt = 0;
var pos_e_ttt = 0;
var pos_f_ttt = 0;
var pos_g_ttt = 0;
var pos_h_ttt = 0;
var pos_i_ttt = 0;
var temp_ttt = "";
var ok_ttt = 0;
var cf_ttt = 0;
var choice_ttt = 9;
var aRandomNumber_ttt = 0;
var comp_ttt = 0;
var chance_ttt = 0;
var won_ttt = 0;
var lost_ttt = 0;
var draws_ttt = 0;

function logicOne_ttt(){
    if ((pos_a_ttt == 1) && (pos_b_ttt == 1) && (pos_c_ttt == 1)) all_ttt = 1;
    if ((pos_a_ttt == 1) && (pos_d_ttt == 1) && (pos_g_ttt == 1)) all_ttt = 1;
    if ((pos_a_ttt == 1) && (pos_e_ttt == 1) && (pos_i_ttt == 1)) all_ttt = 1;
    if ((pos_b_ttt == 1) && (pos_e_ttt == 1) && (pos_h_ttt == 1)) all_ttt = 1;
    if ((pos_d_ttt == 1) && (pos_e_ttt == 1) && (pos_f_ttt == 1)) all_ttt = 1;
    if ((pos_g_ttt == 1) && (pos_h_ttt == 1) && (pos_i_ttt == 1)) all_ttt = 1;
    if ((pos_c_ttt == 1) && (pos_f_ttt == 1) && (pos_i_ttt == 1)) all_ttt = 1;
    if ((pos_g_ttt == 1) && (pos_e_ttt == 1) && (pos_c_ttt == 1)) all_ttt = 1;
    if ((pos_a_ttt == 2) && (pos_b_ttt == 2) && (pos_c_ttt == 2)) all_ttt = 2;
    if ((pos_a_ttt == 2) && (pos_d_ttt == 2) && (pos_g_ttt == 2)) all_ttt = 2;
    if ((pos_a_ttt == 2) && (pos_e_ttt == 2) && (pos_i_ttt == 2)) all_ttt = 2;
    if ((pos_b_ttt == 2) && (pos_e_ttt == 2) && (pos_h_ttt == 2)) all_ttt = 2;
    if ((pos_d_ttt == 2) && (pos_e_ttt == 2) && (pos_f_ttt == 2)) all_ttt = 2;
    if ((pos_g_ttt == 2) && (pos_h_ttt == 2) && (pos_i_ttt == 2)) all_ttt = 2;
    if ((pos_c_ttt == 2) && (pos_f_ttt == 2) && (pos_i_ttt == 2)) all_ttt = 2;
    if ((pos_g_ttt == 2) && (pos_e_ttt == 2) && (pos_c_ttt == 2)) all_ttt = 2;
    if ((pos_a_ttt != 0) && (pos_b_ttt != 0) && (pos_c_ttt != 0) && (pos_d_ttt != 0) && (pos_e_ttt != 0) && (pos_f_ttt != 0) && (pos_g_ttt != 0) && (pos_h_ttt != 0) && (pos_i_ttt != 0) && (all_ttt == 0)) 
        all_ttt = 3;
}

function logicTwo_ttt(){
    if ((pos_a_ttt == 2) && (pos_b_ttt == 2) && (pos_c_ttt == 0) && (temp_ttt == "")) temp_ttt = "C";
    if ((pos_a_ttt == 2) && (pos_b_ttt == 0) && (pos_c_ttt == 2) && (temp_ttt == "")) temp_ttt = "B";
    if ((pos_a_ttt == 0) && (pos_b_ttt == 2) && (pos_c_ttt == 2) && (temp_ttt == "")) temp_ttt = "A";
    if ((pos_a_ttt == 2) && (pos_d_ttt == 2) && (pos_g_ttt == 0) && (temp_ttt == "")) temp_ttt = "G";
    if ((pos_a_ttt == 2) && (pos_d_ttt == 0) && (pos_g_ttt == 2) && (temp_ttt == "")) temp_ttt = "D";
    if ((pos_a_ttt == 0) && (pos_d_ttt == 2) && (pos_g_ttt == 2) && (temp_ttt == "")) temp_ttt = "A";
    if ((pos_a_ttt == 2) && (pos_e_ttt == 2) && (pos_i_ttt == 0) && (temp_ttt == "")) temp_ttt = "I";
    if ((pos_a_ttt == 2) && (pos_e_ttt == 0) && (pos_i_ttt == 2) && (temp_ttt == "")) temp_ttt = "E";
    if ((pos_a_ttt == 0) && (pos_e_ttt == 2) && (pos_i_ttt == 2) && (temp_ttt == "")) temp_ttt = "A";
    if ((pos_b_ttt == 2) && (pos_e_ttt == 2) && (pos_h_ttt == 0) && (temp_ttt == "")) temp_ttt = "H";
    if ((pos_b_ttt == 2) && (pos_e_ttt == 0) && (pos_h_ttt == 2) && (temp_ttt == "")) temp_ttt = "E";
    if ((pos_b_ttt == 0) && (pos_e_ttt == 2) && (pos_h_ttt == 2) && (temp_ttt == "")) temp_ttt = "B";
    if ((pos_d_ttt == 2) && (pos_e_ttt == 2) && (pos_f_ttt == 0) && (temp_ttt == "")) temp_ttt = "F";
    if ((pos_d_ttt == 2) && (pos_e_ttt == 0) && (pos_f_ttt == 2) && (temp_ttt == "")) temp_ttt = "E";
    if ((pos_d_ttt == 0) && (pos_e_ttt == 2) && (pos_f_ttt == 2) && (temp_ttt == "")) temp_ttt = "D";
    if ((pos_g_ttt == 2) && (pos_h_ttt == 2) && (pos_i_ttt == 0) && (temp_ttt == "")) temp_ttt = "I";
    if ((pos_g_ttt == 2) && (pos_h_ttt == 0) && (pos_i_ttt == 2) && (temp_ttt == "")) temp_ttt = "H";
    if ((pos_g_ttt == 0) && (pos_h_ttt == 2) && (pos_i_ttt == 2) && (temp_ttt == "")) temp_ttt = "G";
    if ((pos_c_ttt == 2) && (pos_f_ttt == 2) && (pos_i_ttt == 0) && (temp_ttt == "")) temp_ttt = "I";
    if ((pos_c_ttt == 2) && (pos_f_ttt == 0) && (pos_i_ttt == 2) && (temp_ttt == "")) temp_ttt = "F";
    if ((pos_c_ttt == 0) && (pos_f_ttt == 2) && (pos_i_ttt == 2) && (temp_ttt == "")) temp_ttt = "C";
    if ((pos_g_ttt == 2) && (pos_e_ttt == 2) && (pos_c_ttt == 0) && (temp_ttt == "")) temp_ttt = "C";
    if ((pos_g_ttt == 2) && (pos_e_ttt == 0) && (pos_c_ttt == 2) && (temp_ttt == "")) temp_ttt = "E";
    if ((pos_g_ttt == 0) && (pos_e_ttt == 2) && (pos_c_ttt == 2) && (temp_ttt == "")) temp_ttt = "G";
}

function logicThree_ttt(){
    if ((pos_a_ttt == 1) && (pos_b_ttt == 1) && (pos_c_ttt == 0) && (temp_ttt == "")) temp_ttt = "C";
    if ((pos_a_ttt == 1) && (pos_b_ttt == 0) && (pos_c_ttt == 1) && (temp_ttt == "")) temp_ttt = "B";
    if ((pos_a_ttt == 0) && (pos_b_ttt == 1) && (pos_c_ttt == 1) && (temp_ttt == "")) temp_ttt = "A";
    if ((pos_a_ttt == 1) && (pos_d_ttt == 1) && (pos_g_ttt == 0) && (temp_ttt == "")) temp_ttt = "G";
    if ((pos_a_ttt == 1) && (pos_d_ttt == 0) && (pos_g_ttt == 1) && (temp_ttt == "")) temp_ttt = "D";
    if ((pos_a_ttt == 0) && (pos_d_ttt == 1) && (pos_g_ttt == 1) && (temp_ttt == "")) temp_ttt = "A";
    if ((pos_a_ttt == 1) && (pos_e_ttt == 1) && (pos_i_ttt == 0) && (temp_ttt == "")) temp_ttt = "I";
    if ((pos_a_ttt == 1) && (pos_e_ttt == 0) && (pos_i_ttt == 1) && (temp_ttt == "")) temp_ttt = "E";
    if ((pos_a_ttt == 0) && (pos_e_ttt == 1) && (pos_i_ttt == 1) && (temp_ttt == "")) temp_ttt = "A";
    if ((pos_b_ttt == 1) && (pos_e_ttt == 1) && (pos_h_ttt == 0) && (temp_ttt == "")) temp_ttt = "H";
    if ((pos_b_ttt == 1) && (pos_e_ttt == 0) && (pos_h_ttt == 1) && (temp_ttt == "")) temp_ttt = "E";
    if ((pos_b_ttt == 0) && (pos_e_ttt == 1) && (pos_h_ttt == 1) && (temp_ttt == "")) temp_ttt = "B";
    if ((pos_d_ttt == 1) && (pos_e_ttt == 1) && (pos_f_ttt == 0) && (temp_ttt == "")) temp_ttt = "F";
    if ((pos_d_ttt == 1) && (pos_e_ttt == 0) && (pos_f_ttt == 1) && (temp_ttt == "")) temp_ttt = "E";
    if ((pos_d_ttt == 0) && (pos_e_ttt == 1) && (pos_f_ttt == 1) && (temp_ttt == "")) temp_ttt = "D";
    if ((pos_g_ttt == 1) && (pos_h_ttt == 1) && (pos_i_ttt == 0) && (temp_ttt == "")) temp_ttt = "I";
    if ((pos_g_ttt == 1) && (pos_h_ttt == 0) && (pos_i_ttt == 1) && (temp_ttt == "")) temp_ttt = "H";
    if ((pos_g_ttt == 0) && (pos_h_ttt == 1) && (pos_i_ttt == 1) && (temp_ttt == "")) temp_ttt = "G";
    if ((pos_c_ttt == 1) && (pos_f_ttt == 1) && (pos_i_ttt == 0) && (temp_ttt == "")) temp_ttt = "I";
    if ((pos_c_ttt == 1) && (pos_f_ttt == 0) && (pos_i_ttt == 1) && (temp_ttt == "")) temp_ttt = "F";
    if ((pos_c_ttt == 0) && (pos_f_ttt == 1) && (pos_i_ttt == 1) && (temp_ttt == "")) temp_ttt = "C";
    if ((pos_g_ttt == 1) && (pos_e_ttt == 1) && (pos_c_ttt == 0) && (temp_ttt == "")) temp_ttt = "C";
    if ((pos_g_ttt == 1) && (pos_e_ttt == 0) && (pos_c_ttt == 1) && (temp_ttt == "")) temp_ttt = "E";
    if ((pos_g_ttt == 0) && (pos_e_ttt == 1) && (pos_c_ttt == 1) && (temp_ttt == "")) temp_ttt = "G";
}

function checkSpace_ttt(){
    if ((temp_ttt == "A") && (pos_a_ttt == 0)){
        ok_ttt = 1;
        if (cf_ttt == 0) pos_a_ttt = 1;
        if (cf_ttt == 1) pos_a_ttt = 2;
    }
    if ((temp_ttt == "B") && (pos_b_ttt == 0)){
        ok_ttt = 1;
        if (cf_ttt == 0) pos_b_ttt = 1;
        if (cf_ttt == 1) pos_b_ttt = 2;
    }
    if ((temp_ttt == "C") && (pos_c_ttt == 0)){
        ok_ttt = 1;
        if (cf_ttt == 0) pos_c_ttt = 1;
        if (cf_ttt == 1) pos_c_ttt = 2;
    }
    if ((temp_ttt == "D") && (pos_d_ttt == 0)){
        ok_ttt = 1;
        if (cf_ttt == 0) pos_d_ttt = 1;
        if (cf_ttt == 1) pos_d_ttt = 2;
    }
    if ((temp_ttt == "E") && (pos_e_ttt == 0)){
        ok_ttt = 1;
        if (cf_ttt == 0) pos_e_ttt = 1;
        if (cf_ttt == 1) pos_e_ttt = 2;
    }
    if ((temp_ttt == "F") && (pos_f_ttt == 0)){
        ok_ttt = 1
        if (cf_ttt == 0) pos_f_ttt = 1;
        if (cf_ttt == 1) pos_f_ttt = 2;
    }
    if ((temp_ttt == "G") && (pos_g_ttt == 0)){
        ok_ttt = 1
        if (cf_ttt == 0) pos_g_ttt = 1;
        if (cf_ttt == 1) pos_g_ttt = 2;
    }
    if ((temp_ttt == "H") && (pos_h_ttt == 0)){
        ok_ttt = 1;
        if (cf_ttt == 0) pos_h_ttt = 1;
        if (cf_ttt == 1) pos_h_ttt = 2;
    }
    if ((temp_ttt == "I") && (pos_i_ttt == 0)){
        ok_ttt = 1;
        if (cf_ttt == 0) pos_i_ttt = 1;
        if (cf_ttt == 1) pos_i_ttt = 2;
    }
}

function yourChoice_ttt(chName){
    pause_ttt = 0;
    if (all_ttt != 0) ended_ttt();
    if (all_ttt == 0){
        cf_ttt = 0;
        ok_ttt = 0;
        temp_ttt = chName;
        checkSpace_ttt();
        if (ok_ttt == 1) document.images[chName].src = x_ttt;
        if (ok_ttt == 0) taken_ttt(); 
        process_ttt();
        if ((all_ttt == 0) && (pause_ttt == 0)) myChoice_ttt();
   }
}

function taken_ttt(){
    $.notify("This cell in not empty! Try another one.", "error");
    pause_ttt = 1;
}

function myChoice_ttt(){
    temp_ttt = "";
    ok_ttt = 0;
    cf_ttt = 1;
    logicTwo_ttt();
    logicThree_ttt();
    checkSpace_ttt();
    while(ok_ttt == 0){
        aRandomNumber_ttt = Math.random()
        comp_ttt = Math.round((choice_ttt-1) * aRandomNumber_ttt) + 1;
        if (comp_ttt == 1) temp_ttt = "A";
        if (comp_ttt == 2) temp_ttt = "B";
        if (comp_ttt == 3) temp_ttt = "C";
        if (comp_ttt == 4) temp_ttt = "D";
        if (comp_ttt == 5) temp_ttt = "E";
        if (comp_ttt == 6) temp_ttt = "F";
        if (comp_ttt == 7) temp_ttt = "G";
        if (comp_ttt == 8) temp_ttt = "H";
        if (comp_ttt == 9) temp_ttt = "I";
        checkSpace_ttt();
    }
    document.images[temp_ttt].src = o_ttt;
    process_ttt();
}

function ended_ttt() {
    $.notify("Game over! To play once more start a new game.", "error");
}

function process_ttt() {
    logicOne_ttt();
    if (all_ttt==1){ swal("Well played!", "You win!", "info"); won_ttt++; scoreAnim(2); }
    if (all_ttt==2){ swal("Better luck next time!", "You lose!", "info"); lost_ttt++; scoreAnim(0); }
    if (all_ttt==3){ swal("Not bad!", "Draw!", "info"); draws_ttt++; scoreAnim(1); }
    if (all_ttt!=0) {
        $('input[name="you_ttt"]').val("Wins: " + won_ttt);
        $('input[name="computer_ttt"]').val("Losses: " + lost_ttt);
        $('input[name="ties_ttt"]').val("Draws: " + draws_ttt);
    }
}

function playAgain_ttt() {
    if (all_ttt == 0) {
        if(confirm("Sure?")) 
            reset_ttt();
    }
    if (all_ttt>0) reset_ttt();
}

function reset_ttt() {
    all_ttt = 0;
    pos_a_ttt = 0;
    pos_b_ttt = 0;
    pos_c_ttt = 0;
    pos_d_ttt = 0;
    pos_e_ttt = 0;
    pos_f_ttt = 0;
    pos_g_ttt = 0;
    pos_h_ttt = 0;
    pos_i_ttt = 0;
    temp_ttt = "";
    ok_ttt = 0;
    cf_ttt = 0;
    choice_ttt = 9;
    aRandomNumber_ttt = 0;
    comp_ttt = 0;
    document.images.A.src = blank_ttt;
    document.images.B.src = blank_ttt;
    document.images.C.src = blank_ttt;
    document.images.D.src = blank_ttt;
    document.images.E.src = blank_ttt;
    document.images.F.src = blank_ttt;
    document.images.G.src = blank_ttt;
    document.images.H.src = blank_ttt;
    document.images.I.src = blank_ttt;
    if (chance_ttt == 0){ 
        chance_ttt = 2; 
        myChoice_ttt(); 
    }
    chance_ttt--;
}

function clearOut_ttt() {
    $('input[name="you_ttt"]').val("Won: 0");
    $('input[name="computer_ttt"]').val("Lost: 0");
    $('input[name="ties_ttt"]').val("Draws: 0");
}

clearOut_ttt();