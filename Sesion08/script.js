$(window).scroll(function(){
    //Si el elemento es visible
    if ($(".ejemplo").visible(true)) {
        //Añade la clase “visible”
        $(".ejemplo").addClass("visible");
        } else {
        //Si no es visible quita:
        $(".ejemplo").removeClass("visible");
        }
});