var score = 0;

function task2_1(){
    conv$2_1 = 0;
    swal({
        html: true,
        title: "Instructions",
        text: "You are bored out of your mind. You need to go on the internet to have random conversations with strangers. Meet at least 3 new people from around the world. Remember, the internet is full of advertisements. Some are genuine, others are malicious. Don't ever click on them unless you know exactly what you are doing. You never know where they may lead you."
    });
}

function check2_1(conv$2_1){
    if(conv$2_1 == 3){
        swal("Nice!", "You got to meet 3 strangers. Found anyone interesting?\nYou can come here at any time to have engaging conversations.", "success");
        $('#tasks_help').hide();
        score += 150;
    }
}

function task2_2(){
    file$2_2 = 1;
    swal({
        html: true,
        title: "Instructions",
        text: "You have recieved a new mail. You need to check it out ASAP. Just be cautious. Not all mails and websites are safe."
    });
}

function check2_2(file_name$2_2){
    if(file_name$2_2 === "letter.txt"){
        swal("Good job!", "You can access the downloaded files in the Downloads section.", "success");
        $('#tasks_help').hide();
        file$2_2 = 0;
        score += 100;
    }
}

function task2_3(){
    task$2_3 = 1;
    swal({
        html: true,
        title: "Instructions",
        text: "You need to check when your account (1003-2323-6565-8461) was used last time. You can access your bank account using the internet. Remember, clicks are your friends, albeit often they are deceitful."
    });
}

function check2_3(){
    swal("You are getting a hang of this.", "So, this click was safe, huh? I must remind you, if you click on a malicious link, you'll fail the task. But you seem to be smart enough to do that. So no worries. Now, you know the exact figure that the hacker stole from you. You need to start planning your vengeance soon.", "success");
    $('#tasks_help').hide();
    score += 100;
    task$2_3 = 0;
}

function task2_4(){
    task$2_4 = 1;
    swal({
        html: true,
        title: "Instructions",
        text: "Create a new account on the 'Look n Meet' beta app in order to exapnd your social network. Hope you know the traits of a good password. There's no provision to recover it though. So you better freeze it in your memory. And remember, same password on multiple accounts is not a safe bet."
    });
}

function checkPassStrength(pass) {
    var score = scorePassword(pass);
    if (score > 80)
        return "strong";
    if (score > 60)
        return "good";
    if (score >= 30)
        return "weak";

    return "";
}

$(document).ready(function() {
    $("#password").on("keypress keyup keydown", function() {
        var pass = $(this).val();
        $("#strength_human").text(checkPassStrength(pass));
        $("#strength_score").text(scorePassword(pass));
    });
});

function check2_4(password$2_4){
    //Add common passwords check as well.
    var score$2_4 = 0;
    if(password$2_4.length < 8)
        $.notify("Length, people! It does matter, you know. 8's good they say.", "error");
    else if(/\s/.test(password$2_4))
        $.notify("I don't really need any space from you, dear!", "error");
    else{
        // award every unique letter until 5 repetitions
        var array$2_4 = new Object();
        for (var i=0; i<password$2_4.length; i++) {
            array$2_4[password$2_4[i]] = (array$2_4[password$2_4[i]] || 0) + 1;
            score$2_4 += Math.floor(5 / array$2_4[password$2_4[i]]) + 1;
        }
        
        // bonus points for mixing it up
        var mixup$2_4 = {
            digits: /\d/.test(password$2_4),
            lower: /[a-z_]/.test(password$2_4),
            upper: /[A-Z]/.test(password$2_4),
            nonWords: /\W/.test(password$2_4),
        }

        var mixcount$2_4 = 0;

        for (var i in mixup$2_4) {
            mixcount$2_4 += (mixup$2_4[i] == true) ? 1 : 0;
        }
        
        score$2_4 += (mixcount$2_4 - 1) * 10;
        
        var message$2_4;
        
        if (score$2_4 > 80)
            message$2_4 = "You must like salsa? You mix quite well. You don't really need any password training.";
        else if (score$2_4 > 60)
            message$2_4 = "Your password was good. But that doesn't mean it can't get any better. Try mixing up a bit the next time.";
        else if (score$2_4 >= 30)
            message$2_4 = "Your password is acceptable but with the right tools, anybody can crack it. You better learn the tricks soon.";
        else
            message$2_4 = "Your password is acceptable but really really poor. You need to learn the tricks of a good password. ASAP.";

        swal({
            title: "Registration succesful",
            text: message$2_4 + "\n\nDo you wish to read the tips for a good password?",
            type: "success",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Sure, I like to get better.",
            cancelButtonText: "Nah! I'll go through it later.",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function(isConfirm){   
            if (isConfirm) {
                swal("Here you go!", "List of tips.\n\nYou can always go through these tips in the progress section as well by clicking on the appropriate task there. ", "info");  
            }
            else
                swal("Hint", "It's alright. You can always read those tricks in the progress section by clicking on the appropriate task there.", "info")
        });
        
        $('#tasks_help').hide();
        
        score += score$2_4;
        task$2_4 = 0; 
    }
}

function task2_5(){
    task$2_5 = 1;
    result$2_5 = 1;
    swal({
        html: true,
        title: "Instructions",
        text: "That pirated version of 'Immortal Enemies' is sitting on your desktop and yet you are unable to play it. Only if they could release the crack sooner. Why don't you try searching the internet for cracks. If you need any help, remember blog writers have much more experience than you."
    });
}

function check2_5(register$2_5){
    if(register$2_5 == -1){
        swal("Oops, you fail!", "That was an advertisement. You shouldn't have clicked that. You can still continue the task, but you'll score only half of the points now, if you pass.", "error");
        result$2_5 = 0;
    }
    else if(register$2_5 == 1){
        if(result$2_5 == 1){
            swal("Great instincts!", "You are smart. Most of the websites that offer free softwares don't ask for registration. If they do, most probably it's a spyware. You can move on to the next task.", "success");
            $('#tasks_help').hide();
            score += 200;
        }
        else{
            swal("Good work!", "You are learning. Most of the websites that offer free softwares don't ask for registration. If they do, most probably it's a spyware. You can move on to the next task.", "success");
            $('#tasks_help').hide();
            score += 100;
        }
        task$2_5 = 0;
    }
    else{
        swal("Oops, you fail!", "Most of the websites that offer free softwares don't ask for registration. If they do, most probably it's a spyware. So you need to run away as fast as you can from them. You don't get any points. Hope, you learnt something.", "error");
        $('#tasks_help').hide();
        score += 0;
        task$2_5 = 0;
    }
}

function task2_6(){
    task$2_6 = 1;
    swal({
        html: true,
        title: "Instructions",
        text: "Check out the new 'www.randomgame.game' website. Last time, it was up, it was forced down as it indexed way too many malicious websites. I hope they have taken better precautions this time. You need to play at least one game to complete this task."
    });
}

function check2_6(){
    swal("Awesome!", "This one looked safe. I am guessing, they did take measures to not include virus prone games this time. You can always come here to boost your total score.", "success");
    $('#tasks_help').hide();
    score += 100;
    task$2_6 = 0;
}

function task3_4(){
    task$3_4 = 1;
    swal({
        html: true,
        title: "Instructions",
        text: "Remember, few weeks back you had given out your mail id to numerous websites when you were searching for Natalie Coria's new album desperately. Now that the album is finally released, expect a wave of replies from at least some of those websites. You need to download the album ASAP. I read the reviews. It's supposed to be really promising."
    });
}

function check3_4(){
    swal({
        title: "",
        text: "Are you sure you want to download?",
        type: "info",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        closeOnConfirm: false,
        closeOnCancel: false
    },
    function(isConfirm){  
        if (isConfirm) {
            swal("Poor choice!", "You see, no music file ever ends with .exe extension. It's clearly an executable and surely a virus. Always read the name of the files carefully before downloading them. No points for you.", "error");
            score += 0;
        }
        else{
            swal("Naaaice!", "You must have noticed the wrong file extension and smartly decided to not download the file. Very wise, I must say. It was clearly an executable and surely a virus. Of course, no music file ever ends with a .exe extension.", "success");
            score += 200;
        }
        $('#tasks_help').hide();
        task$3_4 = 0;
    });
}

$('.taskbox p').click(function(){
    var task_file = $(this).parent('div').parent('div').attr('id');     
    $('#tasks_help').bind('click', function(){
        eval(task_file + "()");
    });                       
    $('#tasks_help').show();
    eval(task_file + "()");
});