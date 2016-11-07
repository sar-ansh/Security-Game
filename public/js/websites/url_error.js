var error_messages = ["A dog ate your web page. Yeah, that's it.", 
                      "A billion websites, and you had to pick this one.", 
                      "This page has moved to California to find itself.", 
                      "If you had a nickel for each time you hit an incorrect URL, you'd be 5 cents richer right now.", 
                      "If you're reading this, it means this page is no more. It's probably not your fault.", 
                      "Sometimes we like to get a little crazy and type in totally random URLs to see what happens. This is what happens.", 
                      "You're disappointed? Mom wanted us to be a doctor.", 
                      "Your URL is an Unreliable Resource Locator.", 
                      "Aliens must have abducted this page!", 
                      "Wait, don't leave! Let's make our own webpage!", 
                      "Yup, one day this page got up and walked away", 
                      "'I remember when the internet only had a few pages, and they all worked' - 'Sure, Grampa...'", 
                      "Your lucky numbers for today: 4, 0, 4.",
                      "The page you wanted is taking a long lunch.", 
                      "Nothing to see here. Move along, buddy.", 
                      "Some folks can see dead people - can you see dead pages?"];

var errormessage = function() {
    var random_message = Math.floor(Math.random()*error_messages.length);
    $('#url-error-message').html(error_messages[random_message]);
};

$('#url-error-button').click(function(){
    hidesites();
    $('#url-indexc').show();
});