//Exercise 1: Parsing XML data
function parseData(){
var quotes =  document.getElementsByTagName("quote");
var authors = document.getElementsByTagName("author");
var arrivals = document.getElementById("airport");

for (var i = 0; i < 2; i++) {
    arrivals.innerHTML+= document.getElementsByTagName("quote")[i].childNodes[0].nodeValue;
    arrivals.innerHTML+= "<br>";
    arrivals.innerHTML+= "--" + document.getElementsByTagName("author")[i].childNodes[0].nodeValue + "--";
    arrivals.innerHTML+= "<br>";
    arrivals.innerHTML+= "<br>";
}
}

//Exercise 2: AJAX call to an XML file
function hereBoy(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://quotes.rest/qod.xml" ,true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("quotes").innerHTML = xmlhttp.responseText;
        }
    }
}

//Exercise 3: Parsing the XML
function parseXML(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://quotes.rest/qod.xml" ,true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var xmlDoc = xmlhttp.responseXML;
           var x = document.getElementsByTagName("td");

            var quotes =  xmlDoc.getElementsByTagName("quote");
            var firstQuote = quotes[0];
            var quoteText = firstQuote.innerHTML; 
            x[2].innerHTML = quoteText;

            var authors =  xmlDoc.getElementsByTagName("author");
            var firstAuthor = authors[0];
            var authorText = firstAuthor.innerHTML; 
            x[3].innerHTML = authorText;

        }
    }
}

//Exercise 4: AJAX call to a live newsfeed
// Did not work at all

function news(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://www.iltalehti.fi/rss/rss.xml" ,false);
    
    xmlhttp.send(null);
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            
            document.getElementById("newsfeed").innerHTML = xmlhttp.responseText;
        }
    }
}
