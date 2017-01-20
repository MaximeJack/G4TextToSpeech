
var VARIABLE_GLOBALE = false;
var ZOOM = null;
function heheh(i){
    
   if(typeof i !== 'undefined'){
      VARIABLE_GLOBALE = i;  
   }
  
}

function envoie(){
  chrome.runtime.sendMessage({
    'type':'global', 
    'page':'content'
    }, heheh);  
}

function removeClassZoom(){
    $('*').removeClass('zoom-extension');
    $('*').children().removeClass('zoom-extension-child');
}

$( document ).ready(function() {
  
    $(document).bind("click", function(event){
        if(VARIABLE_GLOBALE){
           //removeClassZoom();
           var target = $(event.target);
           if(!target.is( ".btn, .btn-default" ) && (target.is( ":input" ) || target.is( "p" )  || target.is( "cite" ) || target.is( "a" ) || target.is( "span" ) || target.is('pre') || target.is( "img" ))){
               var MODAL_LOUPE = "<div class='modal fade' id='myModalLoupe' tabindex='-1' role='dialog' aria-labelledby='myModalLabel'>  <div class='modal-dialog modal-lg' role='document'>    <div class='modal-content'>      <div class='modal-header'>        <h4 class='modal-title' id='myModalLabel'>Loupe</h4>      </div>      <div class='modal-body modal-body-Loupe'>"+target.html()+"</div>      <div class='modal-footer'>        <button type='button' class='btn btn-default' data-dismiss='modal'>Fermer</button>      </div>    </div>  </div></div>";
               //target.addClass('zoom-extension');
               //target.children().addClass('zoom-extension-child');
               if($('#myModalLoupe').length>0) {
                   $('#myModalLoupe').remove();
               }
               
               $( "html" ).append(MODAL_LOUPE);
               $("#myModalLoupe").modal('show');
           }
           console.log(target.prop("tagName"));
        }else{
            //removeClassZoom()
        }
        
    });
});




envoie();
setInterval(envoie, 500);







