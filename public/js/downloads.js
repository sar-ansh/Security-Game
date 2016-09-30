$.getJSON('../json/downloads_file.json', function(json_data){
    var downloads_file = json_data;
    
    for(var i=0; i<downloads_file.length; i++){
        if(downloads_file[i].file_dir=="old"){
            $('<span class="downloads_file" file_name="' + downloads_file[i].file_name + '" file_content="' + downloads_file[i].file_content + '">' + downloads_file[i].file_name + '</span>').appendTo('#dir_old .subdir');
        }
        else if(downloads_file[i].file_dir=="new"){
            $('<span class="downloads_file" file_name="' + downloads_file[i].file_name + '" file_content="' + downloads_file[i].file_content + '">' + downloads_file[i].file_name + '</span>').appendTo('#dir_new .subdir');
        }
    }
        
    $('.downloads_file').click(function(){
        var dfile_name = $(this).attr('file_name');
        var dfile_content = $(this).attr('file_content');
        $('#downloads_content').html("<h1 style='text-align: center; font-weight: bold; font-size: 30px; text-decoration: underline;'>" + dfile_name + '</h1>' + dfile_content);
    });
});