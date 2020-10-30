// Exercise 1
function checkInput() {
  x = document.getElementById("emailAddress").value;
  y = document.getElementById("commentArea").value;

  if (x.length < 6) {
    document.getElementById("emailAddress").style.border = "solid red";
    document.getElementById("tryAgain").innerHTML = "Way too short email";
    return false;
  } else if (x.length > 14) {
    document.getElementById("emailAddress").style.border = "solid red";
    document.getElementById("tryAgain").innerHTML = "Way too long email";
    return false;
  } else if (x.indexOf("@") == -1) {
    document.getElementById("emailAddress").style.border = "solid red";
    document.getElementById("tryAgain").innerHTML =
      "Email should contain @ -char";
    return false;
  } else if (y.length < 1) {
    document.getElementById("emailAddress").style.border = "none";
    document.getElementById("tryAgain").innerHTML = "Great job with email";
    document.getElementById("commentArea").style.border = "solid red";
    document.getElementById("tryAgain2").innerHTML = "Where is your Comment?";
    return false;
  } else if (y.length > 1) {
    document.getElementById("commentArea").style.border = "none";
    document.getElementById("tryAgain2").innerHTML = "Thank you!";
    alert("Email: " + x + "\nComment: " + y);
  }
}

// Exercise 2
function countDown() {
  var member = document.getElementById("type").value;
  var time = document.getElementById("years").value;

  if (member == "basic") {
    cpy = 10;
  } else if (member == "premium") {
    cpy = 15;
  } else if (member == "gold") {
    cpy = 20;
  } else {
    cpy = 25;
  }

  if (time > 1 && time < 5) {
    final = (cpy * time * 0.8).toFixed(2);

    document.getElementById("cost").value = "$" + final;
    document.getElementById("discount").innerHTML =
      "You have been awarded by -20%";
  } else if (time > 4) {
    final = (cpy * time * 0.8 - 5).toFixed(2);

    document.getElementById("cost").value = "$" + final;
    document.getElementById("discount").innerHTML =
      "You have been awarded by -20%";
    document.getElementById("extraDiscount").innerHTML =
      "Congratulations! You are GREAT customer -$5 of final cost.";
  } else {
    final = (cpy * time).toFixed(2);

    document.getElementById("cost").value = "$" + final;
  }
  return false;
}

// Exercise 3
// shopping.js
// This script calculates an order total.

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
	'use strict';
	
	// For storing the order total:
	var total = parseFloat(total);
    
    // Get references to the form values:
    var quantity = parseInt(document.getElementById('quantity').value) ;
        
    var price =  parseFloat(document.getElementById('price').value) ;
    var tax =  parseFloat(document.getElementById('tax').value) ;
    var discount =  parseFloat(document.getElementById('discount2').value) ;
    var shipping =  parseFloat(document.getElementById('shipping').value) ;
	// Add validation here later!
	if(quantity > 100){
		discount= discount * 2;
	}
	console.log("discount is: " + discount);

	// Calculate the initial total:
	total = quantity * price;
	console.log("total before tax: " + total);
	
	// Make the tax rate easier to use:
	tax = (tax / 100) + 1;
	
	
	// Factor in the tax:
	total = total * tax;
	console.log("total after tax: " + total);
		
	// Factor in the discount:
	total = total - discount;
	console.log("total after discount: " + total);

	// Shipping costs
	if(total>100){
		document.getElementById("shipping").value = 0.00;
	}else{
		document.getElementById("shipping").value = 10.00;
	}
	console.log("total + shipping fees: " + total + " + " + shipping);
	total = total + shipping;

	// Format the total to two decimal places:
	total = total.toFixed(2);
	
	// Display the total:
	document.getElementById('total').value = total;
	
	// Return false to prevent submission:
	return false;
    
} // End of calculate() function.

// Function called when the window has been loaded.
// Function needs to add an event listener to the form.
function init() {
	'use strict';

    // Add an event listener to the form:
    var theNewForm = document.getElementById('theNewForm');
    theNewForm.onsubmit = calculate;

} // End of init() function.

// Assign an event listener to the window's load event:
window.onload = init;



// Exercise 4
function showEmailCopyForm (){
  var extra = document.getElementById("copyForm");
  var email = document.getElementById("CheckboxGroup1_0").checked;
  
  if (!email){
    extra.style.display = "none";
  } else {
   extra.style.display = "block";
   document.getElementById("contact").innerHTML="Email";
   document.getElementById("info").innerHTML="Fill email";
   document.getElementById("CheckboxGroup1_1").checked=false;
  document.getElementById("CheckboxGroup1_2").checked=false;
}
}

function showPhoneCopyForm (){
  var extra = document.getElementById("copyForm");
  var phone = document.getElementById("CheckboxGroup1_1").checked;
 
  
  if (!phone){
    extra.style.display = "none";
  } else {
   extra.style.display = "block";
   document.getElementById("contact").innerHTML="Phone";
   document.getElementById("info").innerHTML="Fill phonenumber";
   document.getElementById("CheckboxGroup1_0").checked=false;
  document.getElementById("CheckboxGroup1_2").checked=false;
}
}

function showSmsCopyForm (){
  var extra = document.getElementById("copyForm");
  var sms = document.getElementById("CheckboxGroup1_2").checked;
  
  if (!sms){
    extra.style.display = "none";
  } else {
  
   extra.style.display = "block";
   document.getElementById("contact").innerHTML="Sms";
   document.getElementById("info").innerHTML="Number for Sms";
   document.getElementById("CheckboxGroup1_0").checked=false;
  document.getElementById("CheckboxGroup1_1").checked=false;
}
}
function clearCopyForm (){
  var extra = document.getElementById("copyForm");
  document.getElementById("CheckboxGroup1_0").checked=false;
  document.getElementById("CheckboxGroup1_1").checked=false;
  document.getElementById("CheckboxGroup1_2").checked=false;
  extra.style.display = "none";

  return false;
  }
 

