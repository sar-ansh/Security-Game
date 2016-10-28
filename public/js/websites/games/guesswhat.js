var num_gw, count;
    
function start_gw() {
    var to_gw = Number($('input[name="to_gw"]').val());
    count = 0;
    num_gw = Math.floor(Math.random()*to_gw)+1;
    while(num_gw < $('input[name="from_gw"]').val())
        num_gw = Math.floor(Math.random()*to_gw)+1;
    $('input[name="message_gw"]').val("Enter your guess and press Guess.");
    $('input[name="count_gw"]').val("Number of guesses: " + 0);
}

function guess_gw() {
    var input_gw = $('input[name="number_gw"]').val();
    count++;
    $('input[name="count_gw"]').val("Number of guesses: " + count);
    if(input_gw < num_gw)
        $('input[name="message_gw"]').val("My number is greater than " + input_gw + ".");
    else if(input_gw>num_gw)
        $('input[name="message_gw"]').val("My number is less than " + input_gw + ".");
    else{
        if(task$2_6 == 1){
            if(count == 1)
                swal({title: "Outstanding!", text: "You guessed the number in a single go.", type: "info", showCancelButton: false, closeOnConfirm: false },function(){   
                    check2_6();
                });
            else
                swal({title: "Good enough!", text: "It took you " + count + " attempts to guess the number.", type: "info", showCancelButton: false, closeOnConfirm: false },function(){   
                    check2_6();
                });
        }
        else{
            if(count == 1)
                swal("Outstanding!", "You guessed the number in a single go.", "info");
            else
                swal("Good enough!", "It took you " + count + " attempts to guess the number.", "info");
        }
        $('input[name="message_gw"]').val("");
        $('input[name="from_gw"]').val("");
        $('input[name="to_gw"]').val("");
        $('input[name="number_gw"]').val("");
        $('input[name="count_gw"]').val("");
    }
}

function end_gw() {
    if(task$2_6 == 1)
        swal({title: "Game Over!", text: "The number was " + num_gw + ".", type: "info",showCancelButton: false, closeOnConfirm: false },
        function(){   
            check2_6();
        });
    else
        swal("Game Over!", "The number was " + num_gw + ".", "info");
    $('input[name="message_gw"]').val("");
    $('input[name="from_gw"]').val("");
    $('input[name="to_gw"]').val("");
    $('input[name="number_gw"]').val("");
    $('input[name="count_gw"]').val("");
}

$('.to_randomgame').click(function(){
    $('#browser-url').val("www.randomgame.game");
    urltosite();
});