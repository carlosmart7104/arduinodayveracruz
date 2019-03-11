//alert('hola mundo')
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


var map = L.map('map').
setView([19.1991897, -96.1621873],
15);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 20
}).addTo(map);
L.control.scale().addTo(map);
L.marker([41.66, -4.71],{draggable: true}).addTo(map);


function mostrar(nombre){
  if (document.getElementById(nombre).style.display == 'none') {
    document.getElementById(nombre).style.display = 'block';
    }
  else{
    document.getElementById(nombre).style.display = 'none';
  }
  }
