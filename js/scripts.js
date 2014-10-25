$('.yes').hide();
$('.no').hide();

$("#yes").click(function(){
    $('.no').hide();
    $('.yes').show();
});  
      
$("#no").click(function(){
    $('.yes').hide();
    $('.no').show();
});