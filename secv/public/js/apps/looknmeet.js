var task$2_4 = 0;
    $('#looknmeet_register').click(function(){
        if($('#looknmeet_name').val() == "")
            swal("So, you have lived all your life without a name then, huh?", "Try again.", "error");
        else if($('#looknmeet_password').val() == "")
            swal("In a hurry, are we? How would you return without a password?", "Try again.", "error");
        else if(!$('[name="looknmeet_gender"]').is(':checked'))
            swal("Seriously? You couldn't see those big radio buttons?", "Try again.", "error");
        else{
            if(task$2_4 == 1){
                check2_4($('#looknmeet_password').val());
            }
            else
                swal("You aren't allowed to meet those wonderful people out there right now.", "Do visit later, though!", "info");
        }
});