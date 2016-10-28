var file$2_2 = 0;

$.getJSON('../../json/mail_sent.json', function(json_data){
    var mail_sent = json_data;
    for(var i=0; i<mail_sent.length; i++){
        $("#mail-sentc tr:first").after("<tr class=\"message_sent\"><td class=\"mail_message_to\">" + mail_sent[i].sent_to + "</td><td class=\"mail_message_subject\">" + mail_sent[i].sent_subject + "</td><td class=\"mail_message_body\">" + mail_sent[i].sent_body + "</td><td class=\"mail_message_time\">" + mail_sent[i].sent_time + "</td></tr>");
    }

    $('.message_sent').click(function() {
        swal({
            html: true,
            title: "It says",
            text: $(this).find('.mail_message_body').html()
        });

        $('.mail_message_link').click(function() {
            if($(this).hasClass('mail_message_file'))
                $.notify("Download completed.", "success");
            else{
                swal.close();
                $('#browser-url').val($(this).attr('mail_message_url'));
                urltosite();
            }
        });
     });
});

$.getJSON('../../json/mail_unread.json', function(json_data){
    var mail_unread = json_data;
    for(var i=0; i<mail_unread.length; i++){
        $("#mail-unreadc tr:first").after("<tr class=\"message_unread\"><td class=\"mail_message_from\">" + mail_unread[i].unread_from + "</td><td class=\"mail_message_subject\">" + mail_unread[i].unread_subject + "</td><td class=\"mail_message_body\">" + mail_unread[i].unread_body + "</td><td class=\"mail_message_time\">" + mail_unread[i].unread_time + "</td></tr>");
    }

    $('.message_unread').click(function() {
        swal({
            html: true,
            title: "It says",
            text: $(this).find('.mail_message_body').html()
        });

        $('.mail_message_link').click(function() {
            if($(this).hasClass('mail_message_file')){
                $('#downloads').effect('highlight', 3000);
                $.notify("Download completed.", "success");
                if(file$2_2==1)
                    check2_2($(this).text());
            }
            else{
                swal.close();
                if($(this).attr('mail_message_url') == "www.musicfiles.game"){
                    if(task$3_4 == 1){
                        $('#browser-url').val($(this).attr('mail_message_url'));
                        urltosite();
                    }
                    else
                        $.notify("Unfortunately, you aren't allowed to visit this website now. You need to initiate the task 3.4 for this.", "error");
                }
                else{
                    $('#browser-url').val($(this).attr('mail_message_url'));
                    urltosite();
                }
            }
        });
     });
});

$.getJSON('../../json/mail_inbox.json', function(json_data){
    var mail_inbox = json_data;
    for(var i=0; i<mail_inbox.length; i++){
        $("#mail-inboxc tr:first").after("<tr class=\"message_inbox\"><td class=\"mail_message_from\">" + mail_inbox[i].inbox_from + "</td><td class=\"mail_message_subject\">" + mail_inbox[i].inbox_subject + "</td><td class=\"mail_message_body\">" + mail_inbox[i].inbox_body + "</td><td class=\"mail_message_time\">" + mail_inbox[i].inbox_time + "</td></tr>");
    }

    $('.message_inbox').click(function() {
        swal({
            html: true,
            title: "It says",
            text: $(this).find('.mail_message_body').html()
        });

        $('.mail_message_link').click(function() {
            if($(this).hasClass('mail_message_file')){
                $('#downloads').effect('highlight', 3000);
                $.notify("Download completed.", "success");
            }
            else{
                swal.close();
                $('#browser-url').val($(this).attr('mail_message_url'));
                urltosite();
            }
        });
     });
});

$.getJSON('../../json/mail_spam.json', function(json_data){
    var mail_spam = json_data;
    for(var i=0; i<mail_spam.length; i++){
        $("#mail-spamc tr:first").after("<tr class=\"message_spam\"><td class=\"mail_message_from\">" + mail_spam[i].spam_from + "</td><td class=\"mail_message_subject\">" + mail_spam[i].spam_subject + "</td><td class=\"mail_message_body\">" + mail_spam[i].spam_body + "</td><td class=\"mail_message_time\">" + mail_spam[i].spam_time + "</td></tr>");
    }

    $('.message_spam').click(function() {
        swal({
            html: true,
            title: "It says",
            text: $(this).find('.mail_message_body').html()
        });

        $('.mail_message_link').click(function() {
            if($(this).hasClass('mail_message_file')){
                $('#downloads').effect('highlight', 3000);
                $.notify("Download completed.", "success");
            }
            else{
                swal.close();
                $('#browser-url').val($(this).attr('mail_message_url'));
                urltosite();
            }
        });
     });
});    


$('#mail-home').click(function(){
    $('#mail-landingc').hide();
    $('#mail-homec').show();
    $('#mail-contactsc').hide();
    $('#mail-composec').hide();
    $('#mail-sentc').hide();
    $('#mail-unreadc').hide();
    $('#mail-inboxc').hide();
    $('#mail-spamc').hide();
    $('#mail-homet').show();
    $('#mail-contactst').hide();
    $('#mail-composet').hide();
    $('#mail-sentt').hide();
    $('#mail-unreadt').hide();
    $('#mail-inboxt').hide();
    $('#mail-spamt').hide();
});

$('#mail-contacts').click(function(){
    $('#mail-landingc').hide();
    $('#mail-homec').hide();
    $('#mail-contactsc').show();
    $('#mail-composec').hide();
    $('#mail-sentc').hide();
    $('#mail-unreadc').hide();
    $('#mail-inboxc').hide();
    $('#mail-spamc').hide();
    $('#mail-homet').hide();
    $('#mail-contactst').show();
    $('#mail-composet').hide();
    $('#mail-sentt').hide();
    $('#mail-unreadt').hide();
    $('#mail-inboxt').hide();
    $('#mail-spamt').hide();
});

$('#mail-compose').click(function(){
    $('#mail-landingc').hide();
    $('#mail-homec').hide();
    $('#mail-contactsc').hide();
    $('#mail-composec').show();
    $('#mail-sentc').hide();
    $('#mail-unreadc').hide();
    $('#mail-inboxc').hide();       
    $('#mail-spamc').hide();
    $('#mail-homet').hide();
    $('#mail-contactst').hide();
    $('#mail-composet').show();
    $('#mail-sentt').hide();
    $('#mail-unreadt').hide();
    $('#mail-inboxt').hide();    
    $('#mail-spamt').hide();
});

$('#mail-unread').click(function(){
    $('#mail-landingc').hide();
    $('#mail-homec').hide();
    $('#mail-contactsc').hide();
    $('#mail-composec').hide();
    $('#mail-sentc').hide();
    $('#mail-unreadc').show();
    $('#mail-inboxc').hide();    
    $('#mail-spamc').hide();
    $('#mail-homet').hide();
    $('#mail-contactst').hide();
    $('#mail-composet').hide();
    $('#mail-sentt').hide();
    $('#mail-unreadt').show();
    $('#mail-inboxt').hide();     
    $('#mail-spamt').hide();
});

$('#mail-inbox').click(function(){
    $('#mail-landingc').hide();
    $('#mail-homec').hide();
    $('#mail-contactsc').hide();
    $('#mail-composec').hide();
    $('#mail-sentc').hide();
    $('#mail-unreadc').hide();
    $('#mail-inboxc').show();      
    $('#mail-spamc').hide();
    $('#mail-homet').hide();
    $('#mail-contactst').hide();
    $('#mail-composet').hide();
    $('#mail-sentt').hide();
    $('#mail-unreadt').hide();
    $('#mail-inboxt').show();      
    $('#mail-spamt').hide();
});

$('#mail-sent').click(function(){
    $('#mail-landingc').hide();
    $('#mail-homec').hide();
    $('#mail-contactsc').hide();
    $('#mail-composec').hide();
    $('#mail-sentc').show();
    $('#mail-unreadc').hide();
    $('#mail-inboxc').hide();     
    $('#mail-spamc').hide();
    $('#mail-homet').hide();
    $('#mail-contactst').hide();
    $('#mail-composet').hide();
    $('#mail-sentt').show();
    $('#mail-unreadt').hide();
    $('#mail-inboxt').hide();      
    $('#mail-spamt').hide();
});

$('#mail-spam').click(function(){
    $('#mail-landingc').hide();
    $('#mail-homec').hide();
    $('#mail-contactsc').hide();
    $('#mail-composec').hide();
    $('#mail-sentc').hide();
    $('#mail-unreadc').hide();
    $('#mail-inboxc').hide();        
    $('#mail-spamc').show();
    $('#mail-homet').hide();
    $('#mail-contactst').hide();
    $('#mail-composet').hide();
    $('#mail-sentt').hide();
    $('#mail-unreadt').hide();
    $('#mail-inboxt').hide();        
    $('#mail-spamt').show();
});