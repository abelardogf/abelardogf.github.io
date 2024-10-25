$(window).scroll(function(){
    //Si el elemento es visible
    if ($(".cambio-background").visible(true)) {
        //Añade la clase “visible”
        $(".cambio-background").addClass("visible");
        } else {
        //Si no es visible quita:
        $(".cambio-background").removeClass("visible");
        }
});