(function () {
  document.getElementById("rivi1").innerHTML =
    '"If I had nine hours to chop down a tree, I\'d spend the first six sharpening my ax."';
  document.getElementById("rivi2").innerHTML = "-- Abraham Lincoln";
})();

(function repeatingText() {
  var full = "";
  for (var b = 0; b < 50; b++) {
    full += "repetition is the secret to success" + "<br>";
    document.getElementById("text").innerHTML = full;
  }
})();

function testBrowser() {
  if (navigator.appCodeName == "Mozilla") {
    window.open("http://mozilla.org");
  } else {
    window.open("http://www.microsoft.com");
  }
}

function areYouStudent() {
  var txt;
  var r = confirm("Are you a Student?");
  if (r == true) {
    txt = "Welcome student";
    document.getElementById("vip").src = "vip.mp4";
    document.getElementById("vip").play();
    document.getElementById("demo").innerHTML = txt;
  } else {
    txt = "Sorry, this material is for students only";
    document.getElementById("demo").innerHTML = txt;
  }
}

function myReload(){
    var myWindow = window.open("", "ImgWindow", "width=1000, height=500");
    var images =[
        "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", 
        "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", 
        "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
        ];

    var number = Math.round ( Math.random() * 2 )
    myWindow.document.write("<img src='" + images[number] + "'/>");
}

