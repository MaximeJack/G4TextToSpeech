// Plugin changing cursor before element
;
(function ($) {
    $.fn.changeCursor = function (cursorPicUrl, active) {
        if(typeof active === 'undefined'){
            active = true;
            console.log('ddd');
        }
        function inFunction(e) {
            $cursor.show();
            return false;
        }
        function outFunction(e) {
            $cursor.hide();
            return false;
        }
        function moveFunction(e) {
            var x = e.clientX - 100;
            var y = e.clientY - 100;
           
            
            $cursor.css({
                "transform": "translate(" + x + "px," + y + "px)"
            });
        }
        var $cursor = $('<div id="#custom-cursor"></div>').css({
            /*cursor: none;*/
            width:      '150px',
            height:     '150px',
            background: 'url("' + cursorPicUrl + '") no-repeat left top',
            position:   'absolute',
            display:    'none',
            'z-index':  '10000'
        }).addClass("CURSOR_ZOOM_EXTENSION");

        this.append( $cursor )
            .on( "mouseenter", inFunction )
            .on( "mouseleave", outFunction )
            //.hover( inFunction, function() {
            //    return   outFunction()
            //})
            .mousemove( moveFunction );
            
        
        return this;
    };

})(jQuery);