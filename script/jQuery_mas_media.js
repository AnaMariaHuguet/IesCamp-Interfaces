$(function () {// abreviatura de $(document).ready(function () 

    function update() {   
        //var mql = window.matchMedia("(orientation: portrait)");
        var mql1 = window.matchMedia("(min-width:300px)");
        var mql2 = window.matchMedia("(min-width:800px)");
        var mql3 = window.matchMedia("(min-width:1200px)");
                  
        if (mql3.matches){
            $("main h2:first-child").text("PC Screen");
                }  
            else if (mql2.matches) {
                $("main h2:first-child").text("Tablet");
                }else if (mql1.matches) {
                    $("main h2:first-child").text("Smartphone");
            
            }
   
    $("h3").text("Viewport Size....." + $(window).width() + " x " + $(window).height() );    
}
    update();

    /* Window event. Resize browser window */
    /* resize= cuando cambia tamaño de la ventana*/
    $(window).resize(function () { update(); });
});


