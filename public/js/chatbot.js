$(document).ready(function() {
    
    var conv;
    $.getJSON('../json/chat.json', function(chat_data){
        conv = chat_data;
    });
    function chatBot() {
        this.input;

        this.respondTo = function(input) {
            this.input = input.toLowerCase();

            for(var i=0; i<conv.length; i++){
                for(var j=0; j<conv[i].user.length; j++){
                    if (this.match(conv[i].user[j])){
                        var reply_len = conv[i].reply.length;
                        var k = Math.floor(Math.random()*reply_len);
                        return conv[i].reply[k];
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
		var input = $('.inputbot input').val();
		if(input == '') 
            return;
		$('.inputbot input').val('');
		updateChat(you, input);
		
		var reply = bot.respondTo(input);
		if(reply == null) return;
		
		var latency = Math.floor((Math.random() * (delayEnd - delayStart)) + delayStart);
		$('.busybot').css('display', 'block');
		setTimeout( function() {
			if(typeof reply === 'string') {
				updateChat(robot, reply);
			} else {
				for(var r in reply) {
					updateChat(robot, reply[r]);
				}
			}
			$('.busybot').css('display', 'none');
		}, latency);
        $('.msg_body').scrollTop($('.msg_body')[0].scrollHeight);
	}
	
	var updateChat = function(party, text) {
        
        var style = 'you';
		if(party != you) {
			style = 'robot';
		}
		
		var line = $('<div><span class="party"></span> <span class="text"></span></div>');
		line.find('.party').addClass(style).text(party + ':');
		line.find('.text').addClass(style).text(text);
		
		chat.append(line);
	}
	
	$('.inputbot').bind('keydown', function(e) {
		if(e.keyCode == 13) {
			submitChat();
		}
	});
    
    $('.inputbot a').bind('click', submitChat);
    
    var you = 'You';
	var robot = 'Buddy';
	
	var delayStart = 400;
	var delayEnd = 800;
	
	var bot = new chatBot();
	var chat = $('.chatbot');
	$('.busybot').text(robot + ' is typing...');
	
	updateChat(robot, 'Hi there. Type something!');

});