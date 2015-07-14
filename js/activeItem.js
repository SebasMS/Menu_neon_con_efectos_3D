(function(){
    var nav = $('nav');    
    nav.delegate('a','click', function(ev){

        /* Eliminamos la clase del elemento activo*/
        nav.find('.active').removeClass('active'); 

        /* Agregamos la clase al nuevo elemento activado*/
        $(ev.target).closest('a').addClass('active');
    });
})();