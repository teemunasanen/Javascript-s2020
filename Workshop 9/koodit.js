//Excercise 1: Adding jQuery to document
// Add jQuery script to page, done

//Exercise 2: Basic Dom Scripting
/* 1. find all H3-tags:
$('h3');
*/

//2. find div id='contant' replace content with something
$("#contant").find("h2").html("This is replaced content!");
//Replacing div id='contant' h2-tag with new text

//3. Find img and change its source
$("img:first").attr(
  "src",
  "https://cdn.educba.com/academy/wp-content/uploads/2019/05/what-is-jquery-1.png"
);
//Finding first img and changing its source

//4. Find the element with a class sideBarListBox and show/hide it?
$(".sideBarListBox").hide();
//$('.sideBarListBox').show();

//5.Find any li element that contains the text "Lorem" and add css underline -attribute to them?
$('li:contains("Lorem")').css("text-decoration", "underline");

//6.Find all the anchor tags within the class SideBarListBox and apply css modifications of your choice to them.
$(".sideBarListBox").find("a").css("background-color", "yellow");

//Exercise 3: Effects and animation
//Fade out lines of the page
$("#button").click(function () {
  $("li").fadeOut("slow");
});

//Fade in lines of the page
$("#button2").click(function () {
  $("li").fadeIn("slow");
});

//SlideUp lines of the page
$("#button3").click(function () {
  $("li").slideUp();
});

//SlideDown lines of the page
$("#button4").click(function () {
  $("li").slideDown();
});

//Study the animate() -function. Write an animation sequence of your own on the page
$("#button5").click(function () {
  $(this).parent().css({ position: "relative" }); //set position to relative
  $(this).parent().animate(
    {
      height: "+=150px",
    },
    "slow"
  ); //add height to parent element
  $(this).parent().animate(
    {
      left: "+=350px",
    },
    "slow"
  ); //move parent element
  $(this).parent().animate(
    {
      left: "-=350px",
    },
    "slow"
  ); //move back
  $(this).parent().animate(
    {
      height: "-=150px",
    },
    "slow"
  ); //return height
});

//Exercise 4: Ajax
//First try Ajax with console. Use load() -function
//to inject content from the web (ex. http://www.iltalehti.fi/rss.xml) into the div below.
//Then write a JavaScript function, which will fire when the pulldown menu item is changed. Each selection loads a different content from web to the div below.
//Change the pulldown item names accordingly as well.


//It works, but selected names are added after not on load. Enough lines for this workshop :)
$("#mySelect").change(function () { //function on change
  if ($("#mySelect").val() == "first") {//if selected is first, define call:
    var data = $.get("http://www.iltalehti.fi/rss.xml", function () {//url
      var title = $(data.responseXML).find("title").eq(1).text();//title
      var info = $(data.responseXML).find("category").eq(0).text();//selected text
      var link = $(data.responseXML).find("link").eq(1).text();//link for more
      $("#mySelect option:selected").html(info);//add info to selected
      //add to div
      $("#ajax").html(
        title +
          "<br>" +
          "<br>" +
          "<a href='" +
          link +
          "'target='_blank'>Katso Uutinen</a>"
      );
    });
  } else if ($("#mySelect").val() == "second") {//if selected is second, define call:
    var data = $.get("http://www.iltalehti.fi/rss.xml", function () {//url
      var title = $(data.responseXML).find("title").eq(2).text();//title
      var info = $(data.responseXML).find("category").eq(1).text();//selected text
      var link = $(data.responseXML).find("link").eq(2).text();//link for more
      $("#mySelect option:selected").html(info);//add info to selected
      //add to div
      $("#ajax").html(
        title +
          "<br>" +
          "<br>" +
          "<a href='" +
          link +
          "'target='_blank'>Katso Uutinen</a>"
      );
    });
  } else if ($("#mySelect").val() == "third") {//if selected is third, define call:
    var data = $.get("http://www.iltalehti.fi/rss.xml", function () {//url
      var title = $(data.responseXML).find("title").eq(3).text();//title
      var info = $(data.responseXML).find("category").eq(2).text();//selected text
      var link = $(data.responseXML).find("link").eq(3).text();//link for more
      $("#mySelect option:selected").html(info);//add info to selected
//add to div
      $("#ajax").html(
        title +
          "<br>" +
          "<br>" +
          "<a href='" +
          link +
          "'target='_blank'>Katso Uutinen</a>"
      );
    });
  }
});
