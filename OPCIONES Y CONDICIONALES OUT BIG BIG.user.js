// ==UserScript==
// @name OPCIONES Y CONDICIONALES OUT BIG BIG
// ==/UserScript==

var ezsound = new Audio("https://miyork.000webhostapp.com/Notification%20Elegant%2013.mp3");


      $('.humfun-audio-header').remove();
        $('.humfun-options-extra-btns').remove();
        $('.top-bar').remove();
      
     $('.compress.audio-btn').remove();
        $('.rewind.audio-btn').remove();
        $('.humfun-options-header').hide();


var omaha=document.getElementById("sendThis");

 var n1;
var n2;

document.body.onkeyup = function(event){
  var key = event.key;
   
  switch(key){
      case 'd':
      $('.play.audio-btn').click();
      break;
     case '2':
      wavesurfer.skip(10);
      omaha.value=7;                        
$('.fa.fa-pause').click();      
          var UAH= document.getElementsByName("cid")[0].value;
      var TURURU = JSON.stringify(UAH);
localStorage.setItem("UAH", TURURU);
      
      var perreando= omaha.value;
      var yeibi = JSON.stringify(perreando);
localStorage.setItem("perreando", yeibi);
      submitButton.click();
      break;
      
      
      case '3':
      wavesurfer.skip(10);
      omaha.value=8;                        
$('.fa.fa-pause').click();          
          var UAH= document.getElementsByName("cid")[0].value;
      var TURURU = JSON.stringify(UAH);
localStorage.setItem("UAH", TURURU); 
      
            var perreando= omaha.value;
      var yeibi = JSON.stringify(perreando);
localStorage.setItem("perreando", yeibi);
      submitButton.click();
      break;
     case 's': 
      document.write();
       setInterval(miFuncion, 10000);
             function miFuncion() {
  var x = document.body.innerHTML;
              if(x=='SALTANDO'){
               window.open('https://www.humanatic.com/pages/humfun/profile.cfm', '_blank',"width=200,top=500,height=100");
              }else{
                
              }
                
             }
             
               
           window.location = 'https://www.humanatic.com/x19/category_selector.cfm?category=4';
             
  
                 var quad= duration_seconds;
      var jsonPerson = JSON.stringify(quad);
localStorage.setItem("quad", jsonPerson);
       
      break;
             case '|':
     window.location = 'https://www.humanatic.com/pages/humfun/logout.cfm';
       break;
            case 'p':
      window.open('https://www.humanatic.com/pages/humfun/my_reviews.cfm', '_blank');
        break;
      case 'i':
     window.location = 'https://www.humanatic.com/pages/humfun/payout.cfm';
        break;
           case 'o':
       window.location = 'https://www.humanatic.com/pages/humfun/leaderboard.cfm';
        break;
      case 'm':

      alert(duration_seconds);
        break;
      case 'n':
document.write('SALTANDO');
        break;
         case 'v':
alert(personFromLS);
        break;
            case 'x':
wavesurfer.skip(-0.1);  
    break;
                case 'b':
     $.ajax({
  type : 'GET',
  url : 'https://www.humanatic.com/x19/category_selector.cfm?category=4',
  success : function(data) {
    
    $("body").show().html(data);
  }
});
        break;
       case 'q':
         window.location = 'https://www.humanatic.com/pages/humfun/profile.cfm';
      break;
         case 'k':
         window.location = 'https://www.humanatic.com/pages/humfun/settings.cfm';
      break;
      case '*':
     n1=prompt("introduce tu anchura");
window.resizeTo(n1, 1000);
          break;
              case 'z':
      n2=prompt("introduce tu numero de ventana");
     window.moveTo(n1*n2, 0);
 break;
        case 'a':
         history.back(-1);
          break;
      case 'f':
      
         history.forward(1);
          break;
  }
}

var osmas=duration_seconds;
var personJSONFromLS = localStorage.getItem("quad");
var personFromLS = JSON.parse(personJSONFromLS);


var yotaba = localStorage.getItem("UAH");
var enladisco = JSON.parse(yotaba);

var yeiya = localStorage.getItem("perreando");
var ekisl = JSON.parse(yeiya);
var id=document.getElementsByName("cid")[0].value;


if( osmas > 89){
               document.write();
   setInterval(miFuncion, 10000);
             function miFuncion() {
  var x = document.body.innerHTML;
              if(x=='SALTANDO'){
               window.open('https://www.humanatic.com/pages/humfun/profile.cfm', '_blank',"width=200,top=500,height=100");
              }else{
                
              }
                
             }
             
               
           window.location = 'https://www.humanatic.com/x19/category_selector.cfm?category=4';
             
  
                 


           } else if(osmas == personFromLS){
               document.write();
      setInterval(miFuncion, 10000);
             function miFuncion() {
  var x = document.body.innerHTML;
              if(x=='SALTANDO'){
               window.open('https://www.humanatic.com/pages/humfun/profile.cfm', '_blank',"width=200,top=500,height=100");
              }else{
                
              }
                
             }
     
               
            window.location = 'https://www.humanatic.com/x19/category_selector.cfm?category=4';
                          
        
      }else {     

wavesurfer.on('ready', function () {   
var plugin_h = {
    // propiedades
    urlMala : 'https://www.humanatic.com/pages/humfun/break_room.cfm',
    urlBuena : 'https://www.humanatic.com/pages/humfun/category.cfm',
    audio: null,
    velocidadControl: null,
    opciones : null,
    screenVelocidad : null,
    audioSec :0,
  

    // metodos
    iniciarPlugin: function(){
        //alert('Plugin iniciado con exito.');
        plugin_h.opciones=document.querySelectorAll('div.humfun-options-list div.humfun-options-list-items div.humfun-options-list-item.ripple-btn div.humfun-options-list-item-left');
        plugin_h.audio = document.querySelectorAll('audio')[0];
        plugin_h.screenVelocidad = document.querySelectorAll('div.playback.slider-value')[0];
        plugin_h.velocidadControl = document.querySelectorAll('input.playback')[0];
      
        addEventListener('keypress', plugin_h.teclado);
      
        if(id == enladisco){  
        
             maixus = document.createElement('button');
      maixus.id = 'makius';
     
        $(maixus).append('<style>#makius { height: 100%; color: green; background: #3349FF; font-size:20px; border-radius: 4px; width: 20%; transition-duration: 0.1s ; } #boton:hover{ background: white; color: #007def; } #boton:active{ color: black; }</style>');
  $('.audio-controls').append(maixus);
         $('.rewind.audio-btn').hide();
        $('.humfun-options-header').hide();      
      $('.fa.fa-pause').click();
    wavesurfer.skip(20);
       omaha.value= ekisl;
      submitButton.click();
             
        
      }else{
      
      
                      dureishonbb = document.createElement('button');
                dureishonbb.id = 'boton';
        $(dureishonbb).append('<style>#boton { height: 5%; color: green; background: #0DF414; font-size:20px; border-radius: 4px; width: 20%; transition-duration: 0.1s ; } #boton:hover{ background: white; color: #007def; } #boton:active{ color: black; }</style>');
  $('.audio-player').append(dureishonbb);
              ezsound.play();
         
              
            plugin_h.velocidadControl.value = 2.3;
            plugin_h.audio.playbackRate = 2.3;
            plugin_h.screenVelocidad.innerHTML = 'x2.0'
                    $('.fa.fa-pause').click();

              setTimeout(miFuncion, 3500);
             function miFuncion() {
              autobb = document.createElement('button');
                autobb.id = 'osis';
        $(autobb).append('<style>#osis { height: 5%; color: green; background: #F1D90F; font-size:20px; border-radius: 4px; width: 20%; transition-duration: 0.1s ; } #boton:hover{ background: white; color: #007def; } #boton:active{ color: black; }</style>');
   $('.audio-player').append(autobb);
               }
            
      }


    }, 
    teclado: function(event){
      var quad;
        var tecla = event.keyCode;
        let opcion;
        console.log(tecla);
        switch (true) {
               case tecla==71:
                // Click en opcion 1
               
                break;
            case tecla==72:
                // Click en opcion 2
                

                break;
            case tecla==73:
                // Click en opcion 3
               

                break;
            case tecla==52:
                // Click en opcion 4
                opcion = plugin_h.opciones[3].children;
                opcion[0].click();
             submitButton.click();
            $('.fa.fa-pause').click();

                break;
            case tecla==53:
                // Click en opcion 5
                opcion = plugin_h.opciones[4].children;
                opcion[0].click();
             submitButton.click();
      $('.play.audio-btn').click();
                break;
            case tecla==54:
                // Click en opcion 6
                opcion = plugin_h.opciones[5].children;
                opcion[0].click();
             submitButton.click();
      $('.play.audio-btn').click();
                break;
            case tecla==55:
                // Click en opcion 7
                opcion = plugin_h.opciones[6].children;
                opcion[0].click();
             submitButton.click();
      $('.play.audio-btn').click();
                break;
            case tecla==56:
                // Click en opcion 8
                opcion = plugin_h.opciones[7].children;
                opcion[0].click();
             submitButton.click();
      $('.play.audio-btn').click();
                break;
            case tecla==57:
                // Click en opcion 9
                opcion = plugin_h.opciones[8].children;
                opcion[0].click();  
             submitButton.click();
      $('.play.audio-btn').click();
            break;
            case tecla==48:
                // Click en opcion 0
                /plugin_h.opciones[0].click();/
                break;
            case tecla==46:
            alert('La duracion es: '+document.querySelectorAll('audio')[0].duration);
            break;
                 case tecla==119:
                window.location = 'https://www.humanatic.com/x19/category_selector.cfm?category=4';
    $('.fa.fa-pause').click();
                var quad= document.getElementsByName("cid")[0].value;
      var jsonPerson = JSON.stringify(quad);
localStorage.setItem("quad", jsonPerson);
    
            break;
            
                 case tecla==117 || tecla==85:
                // Click en para actualizar las opciones
                plugin_h.opciones=document.querySelectorAll('div.humfun-options-list div.humfun-options-list-items div.humfun-options-list-item.ripple-btn div.humfun-options-list-item-left');
                console.log('Opciones', plugin_h.opciones);
                break;
                case tecla==114:
                 // aumenta la velocidad x 1
                // console.log( 'step', plugin_h.audio.playbackRate);
                // console.log( 'playback', plugin_h.velocidadControl.value);
                plugin_h.velocidadControl.value = 2.3;
                plugin_h.audio.playbackRate = 2.3;
                plugin_h.screenVelocidad.innerHTML = 'x2.0';
                break;
              case tecla==101:
                 // Disminuye la velocidad x 1
                plugin_h.velocidadControl.value = 1;
                plugin_h.audio.playbackRate = 1;
                plugin_h.screenVelocidad.innerHTML = 'x1.0';
                break;
            default:
                // statements_def
                break;
        }
    }
};

plugin_h.iniciarPlugin();
   });
        
      }
