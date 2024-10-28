$(window).scroll(function(){

    /*
    var lista = [$(".seccion1"), $(".seccion2"), $(".ind1"), $(".ind2"), $(".filtrada")];

    lista.forEach(function(element) {
        if (element.visible(true)) {
            //Añade la clase “visible”
            element.addClass("visible");
        } else {
            //Si no es visible quita:
            element.removeClass("visible");
        }
    });
*/
    
    // INICIO COPIA
    //Si el elemento es visible
    if ($(".seccion1 ").visible(true)) {
        //Añade la clase “visible”
        $(".seccion1").addClass("visible");
    } else {
        //Si no es visible quita:
        $(".seccion1").removeClass("visible");
    }
    // FINAL COPIA


    //Si el elemento es visible
    if ($(".seccion2 ").visible(true)) {
        //Añade la clase “visible”
        $(".seccion2").addClass("visible");
    } else {
        //Si no es visible quita:
        $(".seccion2").removeClass("visible");
    }    


    // INICIO COPIA
    //Si el elemento es visible
    if ($(".ind1").visible(true)) {
        //Añade la clase “visible”
        $(".ind1").addClass("visible");
    } else {
        //Si no es visible quita:
        $(".ind1").removeClass("visible");
    }
    // FINAL COPIA    


   // INICIO COPIA
    //Si el elemento es visible
    if ($(".ind2").visible(true)) {
        //Añade la clase “visible”
        $(".ind2").addClass("visible");
    } else {
        //Si no es visible quita:
        $(".ind2").removeClass("visible");
    }
    // FINAL COPIA 

   // INICIO COPIA
    //Si el elemento es visible
    if ($(".filtrada").visible(true)) {
        //Añade la clase “visible”
        $(".filtrada").addClass("visible");
    } else {
        //Si no es visible quita:
        $(".filtrada").removeClass("visible");
    }
    // FINAL COPIA     

});