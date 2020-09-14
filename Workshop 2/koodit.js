(function () {
    document.getElementById("rivi1").innerHTML = "\"If I had nine hours to chop down a tree, I'd spend the first six sharpening my ax.\"";
    document.getElementById("rivi2").innerHTML = "-- Abraham Lincoln";
})();
    
(function repeatingText(){
    var full = "";
	for (var b=0; b<50; b++) {
        full += "repetition is the secret to success" + "<br>";
        document.getElementById("text").innerHTML= full;
    }
})();

function testBrowser(){
    
    if(navigator.appCodeName == "Mozilla"){
        
        window.open("http://mozilla.org");
    }else{
        window.open("http://www.microsoft.com");
    }
    
}

function areYouStudent(){
    
    
        var txt;
        var r = confirm("Are you a Student?");
        if (r == true) {
          txt = "Welcome student";
          document.getElementById('vip').src="vip.mp4";
          document.getElementById('vip').play();
          document.getElementById("demo").innerHTML = txt;
        } else {
          txt = "Sorry, this material is for students only";
          document.getElementById("demo").innerHTML = txt;
        }
        
      }

      

      
