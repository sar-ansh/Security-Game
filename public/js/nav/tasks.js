var score = 0;

function scoreAnim(task_score){
    $({score_value: 0}).animate({score_value: task_score},{
        duration: 1000,
        easing:"linear",
        step: function(now, fx){
            $("#score_value").html(score + Math.floor(now));
        },
        queue:false,
        complete: function(now, fx){
            score += task_score;
        }
    });
    
    $('#score_tag').text("+" + task_score);
    $("#score_tag").fadeIn({
        duration:700,
        easing:"linear",
        step:function(now, fx){
            $(this).css("top", -55 * now  +"px");
        }
      }).fadeOut({
        duration:300,
        step:function(now, fx){
            $(this).css("top",-55 * ( 2 - now) + "px");
        }
      });
}

function task2_1(){
    conv$2_1 = 0;
    swal({
        html: true,
        title: "Instructions",
        text: "You are bored out of your mind. You need to go on the internet to have random conversations with strangers. Meet at least 3 new people from around the world. Remember, the internet is full of advertisements. Some are genuine, others are malicious. Don't ever click on them unless you know exactly what you are doing. You never know where they may lead you."
    });
}

function check2_1(conv$2_1){
    var score$2_1 = 0;
    if(conv$2_1 == 3){
        swal("Nice!", "You got to meet 3 strangers. Found anyone interesting?\nYou can come here at any time to have engaging conversations.", "success");
        $('#tasks_help').hide();
        score$2_1 = 150;
        scoreAnim(score$2_1);
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
    var score$2_2 = 0;
    if(file_name$2_2 === "letter.txt"){
        swal("Good job!", "You can access the downloaded files in the Downloads section.", "success");
        file$2_2 = 0;
        $('#tasks_help').hide();
        score$2_2 = 100;
        scoreAnim(score$2_2);
    }
}

function task2_3(){
    task$2_3 = 1;
    swal({
        html: true,
        title: "Instructions",
        text: "You need to check when your account (1003-2323-6565-8461) was used last time. You can access your bank account using the internet. Click on the transaction that you don't remember doing. Remember, clicks are your friends, albeit often they are deceitful."
    });
}

function check2_3(){
    var score$2_4 = 0;
    swal("You are getting a hang of this.", "So, this click was safe, huh? I must remind you, if you click on a malicious link, you'll fail the task. But you seem to be smart enough to do that. So no worries. Now, you know the exact figure that the hacker stole from you. You need to start planning your vengeance soon.", "success");
    $('#tasks_help').hide();
    score$2_4 = 100;
    scoreAnim(score$2_4);
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
                swal("Here you go!", "1. 8 characters minimum is good, 12 even better.\n2. Mix it up with numbers, symbols, Capital letters and lower case letters.\n3. Try not including a dictionary word.\n4. Don't use obvious substitutions like 0 for o.\n5. If you get bored try googling most common passwords just to make sure yours isn't one of them.\n\nYou can always go through these tips in the timeline section as well by clicking on the appropriate task there. ", "info");  
            }
            else
                swal("Hint", "It's alright. You can always read those tricks in the timeline section by clicking on the appropriate task there.", "info")
        });
        
        $('#tasks_help').hide();
        scoreAnim(score$2_4);
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
    var score$2_5 = 0;
    if(register$2_5 == -1){
        swal("Oops, you fail!", "That was an advertisement. You shouldn't have clicked that. You can still continue the task, but you'll score only half of the points now, if you pass.", "error");
    }
    else if(register$2_5 == 1){
        if(result$2_5 == 1){
            swal("Great instincts!", "You are smart. Most of the websites that offer free softwares don't ask for registration. If they do, most probably it's a spyware. You can move on to the next task.", "success");
            $('#tasks_help').hide();
            score$2_5 = 200;
            scoreAnim(score$2_5);
            task$2_5 = 0;
        }
        else{
            swal("Good work!", "You are learning. Most of the websites that offer free softwares don't ask for registration. If they do, most probably it's a spyware. You can move on to the next task.", "success");
            $('#tasks_help').hide();
            score$2_5 = 100;
            scoreAnim(score$2_5);
            task$2_5 = 0;
        }
    }
    else{
        swal("Oops, you fail!", "Most of the websites that offer free softwares don't ask for registration. If they do, most probably it's a spyware. So you need to run away as fast as you can from them. You don't get any points. Hope, you learnt something.", "error");
        $('#tasks_help').hide();
        score$2_5 = 0;
        scoreAnim(score$2_5);
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
    var score$2_6 = 0;
    swal("Awesome!", "This game looks safe. I am guessing, they did take better measures this time to not include virus prone games. You can always come back here to boost your total score.", "success");
    $('#tasks_help').hide();
    score$2_6 = 100;
    scoreAnim(score$2_6);
    task$2_6 = 0;
}

function task3_1(){
    task$3_1 = 1;
    swal({
        html: true,
        title: "Instructions",
        text: "In order to know more about your past, try visiting the explorer app. You may find some old diary pages that you got scanned recently. Hard Drive is the file manager."
    });
}

function check3_1(file$3_1){
    var score$3_1 = 0;
    if(file$3_1 == "diary.png"){
        swal("Great discovery!", "You had visited the downloads section before. Explorer is another place where you can find several files lying on the hard disk. In addition you might find some important info about the computer and some essential data about your past as well.\nHappy exploring!", "success");
        $('#tasks_help').hide();
        score$3_1 = 100;
        scoreAnim(score$3_1);
        task$3_1 = 0;
    }
}

function task3_2(){
    task$3_2 = 1;
    swal({
        html: true,
        title: "Instructions",
        text: ""
    });
}

function check3_2(){
    var score$3_2 = 0;
    if(1){
        swal("", "", "success");
        $('#tasks_help').hide();
        score += 100;
        scoreAnim();
        task$3_2 = 0;
    }
}

function task3_3(){
    task$3_3 = 1;
    click$3_3 = false;
    swal({
        html: true,
        title: "Instructions",
        text: "Remember when you went to the arcade game parlour, there used to be this game called MoleBuster where all you had to do was pick up the rubber hammer and mash into the moles on the console. Apparently there exists a similar game on the internet. Go squash some bugs and and whack some moles for the sake of nostalgia. See if www.randomgame.game serves you the right game. Have fun!"
    });
}

function check3_3(){
    var score$3_3 = 0;
    if(click$3_3){
        swal("Failed!", "Well, this was an example of clickjacking. This is the phenomenon where often advertisements and malicious links are layered over or under normal appearing links or buttons. The user of course is oblivious to this fact and hence clicks the hidden link and thus enables harmful possibilites. Hope you learnt something new at the cost of the score.", "error");
        score$3_3 = 0;
    }
    else{
        swal("Perfect!", "You see, this was an example of clickjacking. This is the phenomenon where often advertisements and malicious links are layered over or under normal appearing links or buttons. The user of course is oblivious to this fact and hence clicks the hidden link and thus enables harmful possibilites. You safely avoided them. You deserve a cookie! However all I can provide are points, so you'll need to manage your own cookie. Go ahead!", "success");
        score$3_3 = 200;
    }
    $('#tasks_help').hide();
    scoreAnim(score$3_3);
    task$3_3 = 0;
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
    var score$3_4 = 0;
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
            score$3_4 = 0;
        }
        else{
            swal("Naaaice!", "You must have noticed the wrong file extension and smartly decided to not download the file. Very wise, I must say. It was clearly an executable and surely a virus. Of course, no music file ever ends with a .exe extension.", "success");
            score$3_4 = 200;
        }
        $('#tasks_help').hide();
        scoreAnim(score$3_4);
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