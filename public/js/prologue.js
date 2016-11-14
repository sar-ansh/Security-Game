var finish = false;
var hacked = false;
var start = false;
var access = false;
var power_button = false;
var start_game = false;
var timer;
var Typer={
    text: null,
    accessCountimer:null,
    index:0, // current cursor position
    speed:1, // speed of the Typer
    file:null, //file, must be setted
    
    init: function(){
        accessCountimer=setInterval(function(){
            Typer.updLstChr();
        },1000); // inizialize timer for blinking cursor
        $.get(Typer.file,function(data){// get the text file
            Typer.text=data;// save the textfile in Typer.text
        });
    },

    content:function(){
        return $("#console_prologue").html();// get console content
    },

    write:function(str){// append to console content
        $("#console_prologue").append(str);
        return false;
    },

    addText:function(){
            var cont=Typer.content(); // get the console content
            if(cont.substring(cont.length-1,cont.length)=="|") // if the last char is the blinking cursor
                $("#console_prologue").html($("#console_prologue").html().substring(0,cont.length-1)); // remove it before adding the text
                Typer.index+=Typer.speed;	// add to the index the speed
            
            var text=Typer.text.substring(0,Typer.index)// parse the text for stripping html enities
            var rtn= new RegExp("\n", "g"); // newline regex

            $("#console_prologue").html(text.replace(rtn,"<br/>"));// replace newline chars with br, tabs with 4 space and blanks with an html blank
            $('.viewport_prologue')[0].scrollTop = $('.viewport_prologue')[0].scrollHeight;        
    },

    updLstChr:function(){ // blinking cursor
        if(!finish){
            var cont=this.content(); // get console 
            if(cont.substring(cont.length-1,cont.length)=="|") // if last char is the cursor
                $("#console_prologue").html($("#console_prologue").html().substring(0,cont.length-1)); // remove it
            else
                this.write("|"); // else write it
        }
    }
}

var type = setInterval(function(){
    if(start){
        start = false;
        timer = setInterval("timtom();", 10);
        clearInterval(type);
    }
}, 1000);

var timtom = function() {
    Typer.addText();
    if (Typer.index > Typer.text.length) {
        finish = true;
        clearInterval(timer);
        $('.viewport_prologue').append("<span class=\"cursor_last_prologue blink_prologue\" id=\"console_prologue\">|</span>");
        $('.viewport_prologue')[0].scrollTop = $('.viewport_prologue')[0].scrollHeight;
        $(document).keypress(function(event) {
            var keycode = event.keyCode || event.which;
            if(keycode == '13' && hacked == false) {
                $('.cursor_last_prologue').hide();
                $('.viewport_prologue').append("<hr><div id=\"console_prologue\"><div><p id=\"c_prologue\">You\'ve accessed the mainframe. You need to brute-force the passcode. Press enter to start breaking the key...</p.</p></div><div id=\"b_prologue\" class=\"button_prologue\">Transaction Passcode:</div><div class=\"password_prologue\"></div><div id=\"a_prologue\" class=\"blink_prologue granted_prologue hidden_prologue\">ACCESS GRANTED!</div></div>");
                $('.viewport_prologue')[0].scrollTop = $('.viewport_prologue')[0].scrollHeight;
                hacked = true;
            }
        });
    }
};

var passwords = ['password123', 'qwertyuiop', 'admin2015', 'trustno1', 'letmein6969'];
var indexOld;
var index = Math.floor((Math.random() * passwords.length));
var password = passwords[index];
var characters = [];
var counter = 0;

var interval = setInterval(function(){
        for(i = 0; i < counter; i++) {
            characters[i] = password.charAt(i);
        }
        for(i = counter; i < password.length; i++) {
            characters[i] = Math.random().toString(36).charAt(2);
        }
        $('.password_prologue').text(characters.join(''));
    }, 25);

$(document).keypress(function(event) {
    var keycode = event.keyCode || event.which;
    if(hacked && keycode == '13' && access == false) 
        hack();
});

function hack() {
    counter++;
    if(counter == password.length){
        $('.granted_prologue').removeClass('hidden_prologue');
        $('.viewport_prologue').append("<br><div id=\"console_prologue\">Press any key to proceed.</div>");
        $('.viewport_prologue').append("<span class=\"cursor_last_prologue blink_prologue\" id=\"console_prologue\">|</span>");
        $('.viewport_prologue')[0].scrollTop = $('.viewport_prologue')[0].scrollHeight;
        $(document).on('keydown', function(){
            var shake = setInterval(
            function() {
                $('.viewport_prologue').effect('pulsate');
            }, 1000);
            setTimeout(function(){
                $('.viewport_prologue').fadeOut(5000);
                clearInterval(shake);
            }, 5000);
            $('#load_prologue').delay(15000).fadeIn(5000);
            $('#load_prologue').delay(5000).fadeOut(5000);
            $('#bank_prologue').delay(30000).fadeIn(5000);
            setTimeout(function(){
                access = true;
            }, 40000);
        });
    }
}

$('#start_game').click(function(){
    if(start_game == false){
        start_game = true;
        $("#title_prologue").css("display", "none");
        $(".screen_prologue").css("visibility", "hidden");
        $(".macbook_prologue").fadeIn(2000);
        $(this).html("Pause");
        $(this).attr('data-title', "Pause");
    }
    else{
        // add pause functionality;
        swal("Add pause functionality");
    }
});

$('#power').click(function(){
    if(power_button == false){
        power_button = true;
        $("#power_prologue").css("color", "white");
        $("#led_prologue").css("background-color", "white");
        $(".lid_prologue").css("display", "none");
        $(".screen_prologue").css("visibility", "visible");
        $(".screen_prologue").css("transform", "rotateX(0deg)");
        $(".viewport_prologue").fadeIn(10000);
        setTimeout(function(){
            $("#myProgress_prologue").fadeIn(500);    
        }, 10000);
        setTimeout(function(){
            var elem = document.getElementById("myBar_prologue");
            var width = 0;
            var id = setInterval(frame, 50);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                }
                else {
                    width++;
                    elem.style.width = width + '%';
                    document.getElementById("label_prologue").innerHTML = width * 1  + '%';
                }
            }
        }, 12000);
        setTimeout(function(){
            Typer.file = "js/new.txt";
            Typer.init();
            start = true;
        }, 18000);
    }
});

var over_prologue = setInterval(function(){
    if(access){
        $("#prologue").fadeOut(5000);
        setTimeout(function(){
            $("#base").fadeIn(5000);
        }, 5000);
        clearInterval(over_prologue);
    }
}, 1000);
    