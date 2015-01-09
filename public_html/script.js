

$("document").ready(function(){
    $('.yeah').css('background-color', 'blue');
    
    $('div:last p:nth-child(3)').css('background-color','pink');

    $('div:last p:nth-child(4)').css('background-color','red');
    
    $('div:last p:nth-child(5)').css('background-color','white');
    
    $('div:last p:nth-child(3)').css('border-style','solid');
    $('div:last p:nth-child(4)').css('border-style','solid');
    $('div:last p:nth-child(5)').css('border-style','solid');
    
    
   $('h1').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe)
    
    $("h1").bind('click', mouseClick);
});     


function mouseOverMe(){
    $("h1").html("this is easy");
}

function mouseOutMe(){
    $('h1').html('do not click on these words');
}

function mouseClick(){
    $('p').html('error, code;2323 your internet connection is not at full strength');
}