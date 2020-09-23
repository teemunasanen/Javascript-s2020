// Excercise 1 Button1
function myFunction() {
  var pvm = new Date();
  alert(
    `You clicked me! \n ${pvm.getDate()}-${pvm.getMonth()}-${pvm.getFullYear()} \n ${pvm.getHours()}:${pvm.getMinutes()}`
  );
}
// Button 2
function showTable() {
  var html = `
    <thead>
    <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Salary</th>
    </tr>
</thead>
<tfoot>
</tfoot>
<tbody>
    <tr>
        <td>Tiger Nixon</td>
        <td>System Architect</td>
        <td>$320,800</td>
    </tr>
    <tr>
        <td>Garrett Winters</td>
        <td>Accountant</td>
        <td>$170,750</td>
    </tr>
    <tr>
        <td>Ashton Cox</td>
        <td>Junior Technical Author</td>
        <td>$86,000</td>
    </tr>
    <tr>
        <td>Cedric Kelly</td>
        <td>Senior Javascript Developer</td>
        <td>$433,060</td>
    </tr>
    <tr>
        <td>Airi Satou</td>
        <td>Accountant</td>
        <td>$162,700</td>
    </tr>

</tbody>
</table>
    `;

  document.getElementById("money").innerHTML = html;
}
// Button 3
function tableOfArray() {
  var persons = [
    "Nyssa P. Skinner",
    "593-4241 Lacus, St.",
    "Cape Verde",
    "Camilla F. Strickland",
    "391-2150 Ac Rd.",
    "Andorra",
    "Reagan U. Andrews",
    "P.O. Box 472, 2271 Mauris Ave",
    "Faroe Islands",
    "Kelsey D. Clark",
    "P.O. Box 866, 7793 Aliquet Ave",
    "Bulgaria",
  ];

  var perrow = 3,
    html = `<table>
      <thead>
      <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Country</th>
      </tr>
  </thead>
  <tfoot>
  </tfoot><tr>`;

  for (var i = 0; i < persons.length; i++) {
    html += "<td>" + persons[i] + "</td>";

    var next = i + 1;
    if (next % perrow == 0 && next != persons.length) {
      html += "</tr><tr>";
    }
  }
  html += "</tr></table>";

  document.getElementById("person").innerHTML = html;
}
// Excercise 2
document.getElementById("demo").onmouseover = function() {mouseOver()};
document.getElementById("demo").onmouseout = function() {mouseOut()};

function mouseOver() {
    console.log("Stepped over by a mouse!");
}

function mouseOut() {
  alert("Bye bye mouse!");
}
// Excercise 3
function focusFunction(x) {
    var count = 0;
    document.getElementById("textdata").onkeydown = function(){
       var x = document.getElementById("textdata").value;
       count++;
       document.getElementById("demo2").innerHTML=count;
     }
     document.getElementById("textdata").onkeyup = function(){
        var x = document.getElementById("textdata").value;
        document.getElementById("demo3").innerHTML=x.length;
     }
         
     
    x.style.background = "yellow";
    document.getElementById("textdata").placeholder="Please fill in the form with proper data.";
    
  }