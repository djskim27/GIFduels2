$(function() {

//click event for gif1 win
$('.animated-gif').on('click', function(val){

    (val.target.className.indexOf('gif1') > -1) ? (
        $('.gif1').css('border','20px solid green');
        $('.gif2').off();
    ) : (
        $('.gif2').css('border','20px solid green');
        $('.gif1').off();
    )}
    function newDuel() {
        window.location.reload();
    }
    setTimeout(newDuel,1500);
});

});
