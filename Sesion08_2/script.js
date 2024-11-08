$(window).scroll(function(){
    
    // VISIBLE - INVISIBLE

    var lista = [".m1", ".m2", ".m3", ".m4", ".m5", ".indicador"];

    lista.forEach(function(element) {
        if ($(element).visible(true)) {
            //Añade la clase “visible”
            $(element).addClass("visible");
        } else {
            //Si no es visible quita:
            $(element).removeClass("visible");
        }
    });
});