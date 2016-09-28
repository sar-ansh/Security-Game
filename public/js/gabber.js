$(document).ready(function() {
    var gabber_conv;

    function chatBot() {
        this.input;
        this.respondTo = function(input) {
            this.input = input.toLowerCase();
            for(var i=0; i<gabber_conv.length; i++){
                for(var j=0; j<gabber_conv[i].user.length; j++){
                    if (this.match(gabber_conv[i].user[j])){
                        var reply_len = gabber_conv[i].reply.length;
                        var k = Math.floor(Math.random()*reply_len);
                        return gabber_conv[i].reply[k];
                        break;
                    }
                }
            }
            return input + " what?";
        }
        this.match = function(regex) {
            return new RegExp(regex).test(this.input);
        }
    }

	var submitChat = function() {
		var input = $('#gabber_input input').val();
		if(input == '') 
            return;
		$('#gabber_input input').val('');
		updateChat(you, input);
		
		var reply = bot.respondTo(input);
		if(reply == null) 
            return;
		
		var latency = Math.floor((Math.random() * (delayEnd - delayStart)) + delayStart);
        $('#gabber_instruct').hide();  
		$('#gabber_busy').show();
		setTimeout( function() {
			if(typeof reply === 'string') {
				updateChat(robot, reply);
			}
            else {
				for(var r in reply) {
					updateChat(robot, reply[r]);
				}
			}
			$('#gabber_busy').hide();
            $('#gabber_instruct').text('Reply to the stranger.');
            $('#gabber_instruct').show();  
		}, latency);
	}
	
	var updateChat = function(party, text) {
        
        var style = 'you';
		if(party != you) {
			style = 'other';
		}
		
		var line = $('<div><span class="party"></span> <span class="text"></span></div>');
		line.find('.party').addClass(style).text(party + ':');
		line.find('.text').text(text);
		
		gabber_chat.append(line);
		
		gabber_chat.stop().animate({ scrollTop: gabber_chat.prop("scrollHeight")});
	}
	
	$('#gabber_input').bind('keydown', function(e) {
		if(e.keyCode == 13) {
			submitChat();
		}
	});
    
    var you = 'You';
	var robot = 'Stranger';
	
	var delayStart = 400;
	var delayEnd = 800;
	
	var bot = new chatBot();
	var gabber_chat = $('#gabber_chat');
    $('#gabber_busy').text(robot + ' is typing...');
    
    $('#gabber_start').click(function(){
        $('#gabber_send').bind('click', submitChat);
    
        var gabber_file = Math.floor(Math.random()*3+1);

        $.getJSON('js/gabber_chat'+ gabber_file +'.json', function(chat_data){
            gabber_conv = chat_data;
        });
        
        $('#gabber_about').hide();
        $('#gabber_body').show();

        var convotype = Math.floor(Math.random()*2);

        if(convotype==0){
            var fmessage = ['Hi there buddy. ASL?', 'Hola!!!', 'Hey idiot? Who the hell are you?'];
            var randomfmessage = Math.floor(Math.random()*fmessage.length);
            updateChat(robot, fmessage[randomfmessage]);
            $('#gabber_instruct').text('Connection established. Reply to the stranger.');
            $('#gabber_instruct').show();        
        }
        else{  
            $('#gabber_instruct').text('Connection established. Start by saying hello.');
            $('#gabber_instruct').show();     
        }
    });

    $('#gabber_end').click(function(){
        $('#gabber_about').show();
        $('#gabber_body').hide();
        $('#gabber_chat').empty();
        $('#gabber_inputbox').val('');
    });
});