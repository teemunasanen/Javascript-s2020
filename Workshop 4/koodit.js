// Exercise 1
function button1Magic() {
  x = document.getElementsByTagName("h1");
  x[0].innerHTML = "Modified Heading!";
}

function button2Magic() {
  x = document.getElementsByTagName("h2");
  x[1].style.background = "red";
  x[1].style.font = "italic bold 30px arial,serif";
}

function button3Magic() {
  var lisaa = document.createElement("p");
  lisaa.innerHTML = `<i>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
 Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. 
 Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. " 
 </i><img src="https://www.onlygfx.com/wp-content/uploads/2016/05/ink-stain-1.png" width="20" height="20"/>`;

  x = document.getElementsByTagName("p");

  x[3].appendChild(lisaa);
  document.body.style.backgroundColor = "pink";
}

//Exercise 2
function hide() {
  document.getElementById("data").style.display = "none";
}

function show() {
  document.getElementById("data").style.display = "block";
}

// Oneway functionality, it disturbs me, but this time I let it be :)
function oneHitWonder() {
  x = document.getElementsByClassName("surprise");

  for (i = 0; i < x.length; i++) {
    x[i].style.fontSize = "20px";
  }
}

// Exercise 3
function carMan() {
  x = document.getElementById("mySelect").value;
  alert("You have chosen " + x + " May the Roadgods be with you");
  y = document.getElementById("carimage");
  if (x == "BMW") {
    y.src = "https://www.bmw.fi/content/dam/bmw/common/all-models/3-series/sedan/2018/navigation/bmw-3-series-modellfinder.png";
  } else if (x == "Audi") {
    y.src = "https://cdn.motor1.com/images/mgl/P1b0r/s3/2021-audi-a3-sedan-rendering.jpg";
  } else if (x == "Mercedes") {
    y.src = "https://pictures.dealer.com/m/mercedesbenzoftampa/1119/56609afbf57544c1bb6fb27122b53b23x.jpg?impolicy=downsize&w=568";
  } else {
    y.src = "https://cdn.tekniikanmaailma.fi/wp-content/uploads/2018/06/s60inscriptionstudio04-e1529508613801-768x400.jpg";
  }
}

function thisOne(){
    document.getElementById("carimage").style.border = "groove yellow";

}

function notForMe(){
    document.getElementById("carimage").style.border = "none";

}

// Exercise 4
function changePosition(){
    document.getElementById("carimage").style.left="-200px";
    document.getElementById("carimage").style.top="500px";
}

function doMove() {
        var elem = document.getElementById("carimage");   
        var pos = 0;
        var id = setInterval(frame, 10);
        function frame() {
          if (pos == 1000) {
            clearInterval(id);
          } else {
            pos++; 
            elem.style.left = pos + 'px'; 
          }
        }
      }

function fadeOut() {
    document.getElementById("carimage").style.opacity -= 0.1;

}

function remove() {
    document.getElementById("carimage").parentNode.removeChild(document.getElementById("carimage"));
}

// Exercise 5

function insertRows(){
var x=document.getElementById('data').insertRow(1);
var a = x.insertCell(0);
var b = x.insertCell(1);
var c = x.insertCell(2);
a.innerHTML=document.getElementById("textfield").value;
b.innerHTML=document.getElementById("textfield2").value;
c.innerHTML=document.getElementById("textfield3").value;
}
// Bonus part I
function replace(){
x=document.getElementsByTagName("li");
for (i = 0; i < x.length; i++) {
    x[i].innerHTML= "<span style='color: red; font-weight:bold;'>Replaced</span>";
  }
}
