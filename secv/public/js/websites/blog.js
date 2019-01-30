$.getJSON('../../json/blog.json', function(json_data){
    var blog_articles = json_data;
    
    for(var i=0; i<blog_articles.length; i++){
        $("#blog_index ol").append('<li class="blog_articles" article_title="' + blog_articles[i].article_title + '" article_body="' + blog_articles[i].article_body + '" article_author ="' + blog_articles[i].article_author + '" article_date="' + blog_articles[i].article_date + '">' + blog_articles[i].article_title + '</li>');
    } 
    
    $('.blog_articles').click(function() {
        var article_title = $(this).attr('article_title');
        var article_body = $(this).attr('article_body');
        var article_author = $(this).attr('article_author');
        var article_date = $(this).attr('article_date');
        $('#blog_header').html(article_title);
        $('#blog_body').html(article_body);
        $('#blog_author').html(article_author);
        $('#blog_date').html(article_date);
     });
});

$('#blog_read_button').click(function(){
    $('.blog_home').hide();
    $('.blog_read').show();
    $('.blog_write').hide();
    $('.blog_why').hide();
});

$('#blog_write_button').click(function(){
    $('.blog_home').hide();
    $('.blog_read').hide();
    $('.blog_write').show();
    $('.blog_why').hide();
});

$('#blog_why_button').click(function(){
    $('.blog_home').hide();
    $('.blog_read').hide();
    $('.blog_write').hide();
    $('.blog_why').show();
});

$('.blog_read button').click(function(){
    $('.blog_read').hide();
    $('.blog_home').show();
});

$('.blog_write button').click(function(){
    $('.blog_write').hide();
    $('.blog_home').show();
});

$('.blog_why button').click(function(){
    $('.blog_why').hide();
    $('.blog_home').show();
});

$('#blog_ads').html(game_ad1());

$('#blog_ads .marquee1').marquee({
    duration: 2000,
    gap: 50,
    delayBeforeStart: 5000,
    direction: 'right',
    duplicated: false,
    startVisible: 'false',
});

$('#blog_ads .marquee2').marquee({
    duration: 1000,
    gap: 50,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: false,
    startVisible: 'false',
});

$(document).on('click','.blog_link',function(){
    if($(this).attr('blog_link_url') == "www.crackdiy.game"){
        if(task$2_5 == 1){
            $('#browser-url').val($(this).attr('blog_link_url'));
            urltosite();
        }
        else
            $.notify("It looks like the author forgot to attach the source link. You might want to visit later to see if this link works. Maybe after initiating the task 2.5", "error");
    }
    else{
        $('#browser-url').val($(this).attr('blog_link_url'));
        urltosite();
    }
});

