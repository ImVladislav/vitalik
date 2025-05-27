
$(function() {
  $('.boxy').addClass('on');
});

$( document ).ready(function() {
  $("img.lazy").lazyload();
});

/* AUDIO */

   var soundclick2 = document.getElementById("ouch");

   soundclick2.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

/* VIDEO */




$( document ).ready(function() {


/* audio controller */

$("#volume").click(function() {
  var bool = $("#ouch").prop("muted");
  var bool2 = $("#gikopast").prop("muted");
  
  $("#ouch").prop("muted",!bool);
  $("#gikopast").prop("muted",!bool2);

  $(".volumebox").toggleClass("off");

});

    /* load the site broo */

    $( ".enter" ).click(function(event) {

      event.preventDefault();

      $(".boxy").removeClass( "on" );
      $(".bigday").addClass( "off" );

      soundclick2.play();
      return false;

    });

 
    $( ".menu-button" ).click(function(event) {

      event.preventDefault();

      $( ".mobile-menu, .menu-overlay" ).addClass( "on" );
      $(".close-button").addClass( "on" );
      $(this).addClass( "on" );
      
    });

    $( ".menu-overlay" ).click(function(event) {

      event.preventDefault();

      $( ".mobile-menu, .menu-overlay" ).removeClass( "on" );

      $(".close-button").removeClass( "on" );
      $(".menu-button").addClass( "on" );
    });


    $( ".close-button, .overlay" ).click(function(event) {

      event.preventDefault();

      $( ".mobile-menu, .menu-overlay" ).removeClass( "on" );
      $( this ).removeClass( "on" );
      $(".menu-button").addClass( "on" );

      
    });

    $( ".pimpit" ).click(function(event) {

      event.preventDefault();

      $( ".infomodal, .overlay" ).addClass( "active" );
      $( ".mobile-menu, .menu-overlay" ).removeClass( "on" );
      
    });

    $( ".close2, .overlay" ).click(function(event) {

      event.preventDefault();

      $( ".infomodal, .overlay" ).removeClass( "active" );
      
    });


});



/* SAVE THE HEADERS */


$(document).ready(function (){

  var width = $("body").width();

  if (width > 1024) {
  


  $('#header1').click(function(){
var link = document.createElement('a');
        link.href = '/images/headers/twitter-header-1.png';  // use realtive url 
        link.download = 'VITALIK-header.png';
        document.body.appendChild(link);
        link.click();     
 });
 $('#header2').click(function(){
  var link = document.createElement('a');
          link.href = '/images/headers/twitter-header-2.png';  // use realtive url 
          link.download = 'VITALIK-header.png';
          document.body.appendChild(link);
          link.click();     
   });

   $('#header3').click(function(){
    var link = document.createElement('a');
            link.href = '/images/headers/twitter-header-3.png';  // use realtive url 
            link.download = 'VITALIK-header.png';
            document.body.appendChild(link);
            link.click();     
     });

     $('#header4').click(function(){
      var link = document.createElement('a');
              link.href = '/images/headers/twitter-header-4.png';  // use realtive url 
              link.download = 'VITALIK-header.png';
              document.body.appendChild(link);
              link.click();     
       });

    $('#header5').click(function(){
        var link = document.createElement('a');
                link.href = '/images/headers/twitter-header-5.png';  // use realtive url 
                link.download = 'VITALIK-header.png';
                document.body.appendChild(link);
                link.click();     
         });
    $('#header6').click(function(){
          var link = document.createElement('a');
                  link.href = '/images/headers/twitter-header-6.png';  // use realtive url 
                  link.download = 'VITALIK-header.png';
                  document.body.appendChild(link);
                  link.click();     
           });
    
    $('#header7').click(function(){
            var link = document.createElement('a');
                    link.href = '/images/headers/twitter-header-7.png';  // use realtive url 
                    link.download = 'VITALIK-header.png';
                    document.body.appendChild(link);
                    link.click();     
             });
    
             $('#header8').click(function(){
              var link = document.createElement('a');
                      link.href = '/images/headers/twitter-header-8.png';  // use realtive url 
                      link.download = 'VITALIK-header.png';
                      document.body.appendChild(link);
                      link.click();     
               });

               $('#header9').click(function(){
                var link = document.createElement('a');
                        link.href = '/images/headers/twitter-header-9.png';  // use realtive url 
                        link.download = 'VITALIK-header.png';
                        document.body.appendChild(link);
                        link.click();     
                 });

          }
})


