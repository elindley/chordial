
//define scales
  //major
var scale_c_major = Array("C Major", "D minor", "E minor", "F Major", "G Major", "A minor", "B \u00B0");
var scale_d_major = Array("D Major", "E minor", "F minor", "G Major", "A Major", "B minor", "C# \u00B0");
var scale_e_major = Array("E Major", "F# minor", "G# minor", "A Major", "B Major", "C# minor", "D# \u00B0");
  //minor
var scale_c_minor = Array("C minor", "D diminished", "E Major", "F minor", "G minor", "A Major", "B Major");
var scale_d_minor = Array("D minor", "E diminished", "F Major", "G minor", "A minor", "B Major", "C# Major");
var scale_e_major = Array("E minor", "F# diminished", "G# Major", "A minor", "B minor", "C# Major", "D# Major");
  //major 7
var scale_c_major_7 = Array("C \u25B37", "D min7", "E min7", "F \u25B37", "G7", "A min7", "B min7 \u266D5");

//main function
function selectChord(){
    //get value of chord from #root-selector html dropdown menu
  var selected_root = $("#root-selector").val();
  var selected_scale = $("#scale-selector").val();
    //select which scale array to use based on value of dropdown menu
    //major
  if (selected_root == "c" && selected_scale == "major"){
    items = scale_c_major;
  }
  else if (selected_root == "d" && selected_scale == "major") {
    items = scale_d_major;
  }
  else if (selected_root == "e" && selected_scale == "major") {
    items = scale_e_major;
  }
  //minor
  if (selected_root == "c" && selected_scale == "minor"){
    items = scale_c_minor;
  }
  if (selected_root == "d" && selected_scale == "minor"){
    items = scale_d_minor;
  }
  if (selected_root == "e" && selected_scale == "minor"){
    items = scale_e_minor;
  }
  //major7
  if (selected_root == "c" && selected_scale == "major_7"){
    items = scale_c_major_7;
  }
  //select a random chord from the scale array when the card is clicked
  $("#newcard").click(function(){
      var item = items[Math.floor(Math.random()*items.length)];
      $(".flashcard").text(item);
  });
  //display name of selected dropdown item for debugging
  //$("#chord-selected").text(selected_root);
}

  //call the selectChord function when a dropdown menu selection changes
$("#root-selector").change(selectChord);
$("#scale-selector").change(selectChord);

  //simulate a click to refresh the card when a new root or scale is selected from dropdown
$("#root-selector").change(function(){
  $("#newcard").trigger("click");
});
$("#scale-selector").change(function(){
  $("#newcard").trigger("click");
});
  //generate a new card when the page loads
$(document).ready(function(){
  $("#newcard").trigger("click");
});
 //new card when enter or space is pressed
$(document).keypress(function(e) {
    if((e.which == 13) || (e.which == 32))  {
        $("#newcard").trigger("click");
    }
});

selectChord();


//load scales json file into order list
//$("#show-json").load("scales.json");

var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function (){
    if(xhr.readyState === 4){
      //var scales = JSON.parse(xhr.responseText);
      console.log(xhr.responseText);
    }
};

xhr.open('GET', 'scales.json');
xhr.send();
