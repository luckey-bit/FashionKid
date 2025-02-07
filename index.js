$(document).ready(function(){
    $('.js--c-type').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
        
    }, {
        offset: '90px'
    })
})

