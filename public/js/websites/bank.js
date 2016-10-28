var task$2_3 = 0;
    
    $('#bank_home').click(function(){
        $('#bank_homec').show();
        $('#bank_accountsc').hide();
        $('#bank_billsc').hide();
        $('#bank_cardsc').hide();
        $('#bank_transferc').hide();
        $('#bank_rechargec').hide();
    });
    
    $('#bank_accounts').click(function(){
        $('#bank_homec').hide();
        $('#bank_accountsc').show();
        $('#bank_billsc').hide();
        $('#bank_cardsc').hide();
        $('#bank_transferc').hide();
        $('#bank_rechargec').hide();
    });
    
    $('#bank_bills').click(function(){
        $('#bank_homec').hide();
        $('#bank_accountsc').hide();
        $('#bank_billsc').show();
        $('#bank_cardsc').hide();
        $('#bank_transferc').hide();
        $('#bank_rechargec').hide();
    });
    
    $('#bank_cards').click(function(){
        $('#bank_homec').hide();
        $('#bank_accountsc').hide();
        $('#bank_billsc').hide();
        $('#bank_cardsc').show();
        $('#bank_transferc').hide();
        $('#bank_rechargec').hide();
    });
    
    $('#bank_transfer').click(function(){
        $('#bank_homec').hide();
        $('#bank_accountsc').hide();
        $('#bank_billsc').hide();
        $('#bank_cardsc').hide();
        $('#bank_transferc').show();
        $('#bank_rechargec').hide();
    });
    
    $('#bank_recharge').click(function(){
        $('#bank_homec').hide();
        $('#bank_accountsc').hide();
        $('#bank_billsc').hide();
        $('#bank_cardsc').hide();
        $('#bank_transferc').hide();
        $('#bank_rechargec').show();
    });
    
    $('#account1').click(function(){
        $('#account_defaultc').hide();
        $('#account1c').show();
        $('#account2c').hide();
        $('#account3c').hide();
        $('#account4c').hide();
    });
    
    $('#account2').click(function(){
        $('#account_defaultc').hide();
        $('#account1c').hide();
        $('#account2c').show();
        $('#account3c').hide();
        $('#account4c').hide();
    });
    
    $('#account3').click(function(){
        $('#account_defaultc').hide();
        $('#account1c').hide();
        $('#account2c').hide();
        $('#account3c').show();
        $('#account4c').hide();
    });
    
    $('#account4').click(function(){
        $('#account_defaultc').hide();
        $('#account1c').hide();
        $('#account2c').hide();
        $('#account3c').hide();
        $('#account4c').show();
    });
    
    $("#account_select").on("click", function(e){
        e.preventDefault();

        if($(this).hasClass("open")) {
        $(this).removeClass("open");
        $(this).children("ul").slideUp("fast");
        } else {
        $(this).addClass("open");
        $(this).children("ul").slideDown("fast");
        }
    });
    
    $("#hack_transaction").click(function (){ 
        if(task$2_3 == 1)
            check2_3();
    });
    
    /*
    
    
  Scheduled Payments for payment biller
  Pending Presentment Bills 
  [Pending Payment - ( 0 )   Awaiting Acceptance - ( 0 ) ]
  View Billers / Register for a new biller
  Your registered billers
  View past payments
  View Rejected Bills
  Online Tax Payments
    
    
  Debit Cards 		  Card Payments 


Debit Card > Debit Card Services


Debit Card Services 
    Card Details
    Debit Card Hotlisting
    Debit Card Loyalty Points
    Set Domestic/International Usage of Debit Card


    
    
    Debit Cards 	  Card Payments 


  Card Payments > Card Payment Services


Card Payment Services 
    VISA Card Payment
    IDBI Bank Credit Card Payment


  Self Account Transfer 		  Third Party Transfer  		  Instant Fund Transfer (24X7)-IMPS  		  National Electronic Funds Transfer 
  Transfers > Self/Linked Account Transfer	Select 	Submit


  From Account  	
  To Account	
  Transfer Amount	
 INR
  Remarks	
Note :- Fund Transfer through i-netbanking are subject to a default limit of Rs. 50,000/- per day or the enhanced limit, if applied for by the customer.



Transfer	  Clear  



Mobile
DTH
    
    
    */