
var VARIABLE_GLOBALE = false;
var ZOOM = null;
var BOOL_MODAL_LOUPE = false;
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
         
        loupeModule(event)
        
    });
    $(document).on('contextmenu', function(event){
        loupeModule(event)
    });
    $('#myModalLoupe').on('hidden', function () {
        $('#myModalLoupe').modal('hide');
        $('.modal').modal('hide');
        alert('fff');
    });
});


function loupeModule(event){
    if(VARIABLE_GLOBALE){
            
            if(event.which == 3){
                event.preventDefault();
                //removeClassZoom();
                var target = $(event.target);
                if(!target.is( ".btn, .btn-default" ) && (target.is( ":input" ) || target.is( "p" )  || target.is( "cite" ) || target.is( "a" ) || target.is( "span" ) || target.is('pre') || target.is( "img" ))){
                    var MODAL_LOUPE = "<div class='modal fade' id='myModalLoupe' tabindex='-1' role='dialog' aria-labelledby='myModalLabel'>  <div class='modal-dialog modal-lg' role='document'>    <div class='modal-content'>      <div class='modal-header'>        <h4 class='modal-title' id='myModalLabel'>Loupe</h4>      </div>      <div class='modal-body modal-body-Loupe ' style='overflow: scroll;'><h1>"+target.html()+"</h1></div>      <div class='modal-footer'>        <button type='button' class='btn btn-default' data-dismiss='modal'>Fermer</button>      </div>    </div>  </div></div>";


                    $( "body" ).append(MODAL_LOUPE);


                    $("#myModalLoupe").modal('show');
                    BOOL_MODAL_LOUPE = true;
                }else{
                    if(BOOL_MODAL_LOUPE && !$('#myModalLoupe').hasClass('in')){
                        target.remove();
                        BOOL_MODAL_LOUPE = false;
                    }
                }
                console.log(target.prop("tagName"));
            }

        }else{
            //removeClassZoom()
        }
}

envoie();
setInterval(envoie, 1500);







