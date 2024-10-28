$(window).scroll(function(){



    // HOLA

    //Si el elemento es visible
    if ($(".cambio-background ").visible(true)) {
        //Añade la clase “visible”
        $(".cambio-background").addClass("visible");
    } else {
        //Si no es visible quita:
        $(".cambio-background").removeClass("visible");
    }


    // IMAGEN APARECE
    //Si el elemento es visible
    if ($(".marco ").visible(true)) {
        //Añade la clase “visible”
        $(".marco").addClass("visible");
    } else {
        //Si no es visible quita:
        $(".marco").removeClass("visible");
    }


    if ($(".marco-2").visible(true)) {
        //Añade la clase “visible”
        $(".marco-2").addClass("visible");
    } else {
        //Si no es visible quita:
        $(".marco-2").removeClass("visible");
    }




});