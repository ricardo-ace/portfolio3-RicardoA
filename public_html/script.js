

$("document").ready(function(){
    $('.yeah').css('background-color', 'blue');
    
    $('#superHuman').accordion({header:"h3"});
    
    //this is for the background color and for the border style
    $('div:last p:nth-child(2)').css('background-color', 'red');
    $('div:last p:nth-child(3)').css('background-color', 'white');
    $('div:last p:nth-child(4)').css('background-color', 'red');
    $('div:last p:nth-child(7)').css('background-color', 'white');
    $('div:last p:nth-child(6)').css('background-color', 'red');
    $('div:last p:nth-child(5)').css('background-color','white');
    $('div:last p:nth-child(8)').css('background-color','red');
    $('div:last p:nth-child(9)').css('background-color','white');
    $('div:last p:nth-child(10)').css('background-color','red');
    
    $('div:last p:nth-child(2)').css('border-style','solid');
    $('div:last p:nth-child(3)').css('border-style','solid');
    $('div:last p:nth-child(4)').css('border-style','solid');
    $('div:last p:nth-child(5)').css('border-style','solid');
    $('div:last p:nth-child(6)').css('border-style','solid');
    $('div:last p:nth-child(7)').css('border-style','solid');
    $('div:last p:nth-child(8)').css('border-style','solid');
    $('div:last p:nth-child(9)').css('border-style','solid');
    $('div:last p:nth-child(10)').css('border-style','solid');
    
    
    
    
    //these are tio bind all of my code lower at the bottom
   $('h1').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $("h1").bind('click', mouseClick);
    
    $('#replcaementWText').bind('click', replaceWText);
    
    $('#randPara').bind('click', addAPara);
    
    $('#removepara').bind('click', removeAPara);
    
    $('#log').bind('click', hideTheImage);
    
    $('#randPara').bind('click', showTheImage);
});     
//this is to make my image disappear
function hideTheImage(){
    console.log('hide');
   $('#logo').hide('slide', {}, 2000);
}
//this is to bring the image back
function showTheImage(){
    $('#logo').show('fold',{}, 2500);
}
//to remove  a para 
function removeAPara(){
    $ ('#randPara p:last').remove();
}
//this is to add a para
function addAPara(){
    $('randPara').append('<p>ADDED</p>');
}

function replaceWText(){
    $('#replaceWtext').text('replaced');
}

//this is foor when the mouse goes over the words they do change into  other wordds
function mouseOverMe(){
    $("h1").html("do not click on these words");
}
        //this is for when the mouse goes over the words they dont change
function mouseOutMe(){
    $('h1').html('i am using jquery');
}
//this is for when you click on it they completely change
function mouseClick(){
    $('p').html('error, code;2323 your internet connection is not at full strength');
}



