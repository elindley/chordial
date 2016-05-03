
//define scales
var scale_c_major = Array("C Major", "D minor", "E minor", "F Major", "G Major", "A minor", "B \u00B0");
var scale_d_major = Array("D Major", "E minor", "F minor", "G Major", "A Major", "B minor", "C# \u00B0");
var scale_e_major = Array("E Major", "F# minor", "G# minor", "A Major", "B Major", "C# minor", "D# \u00B0");


function selectChord(){
    //get value of chord from #chord-selector html dropdown menu
  var selected_chord = $("#chord-selector").val();
    //select which scale array to use based on value of dropdown menu
  if (selected_chord == "c-major"){
    items = scale_c_major;
  }
  else if (selected_chord == "d-major") {
    items = scale_d_major;
  }
  else if (selected_chord == "e-major") {
    items = scale_e_major;
  }
    //select a random chord from the scale array when the card is clicked
  $(".flashcard").click(function(){
      var item = items[Math.floor(Math.random()*items.length)];
      $(".flashcard").text(item);
  });
  //display name of selected dropdown item for debugging
  //$("#chord-selected").text(selected_chord);
}

  //call the selectChord function when the dropdown menu selection changes
$("#chord-selector").change(selectChord);
  //simulate a click to refresh the card when a new chord is selected from dropdown
$("#chord-selector").change(function(){
  $(".flashcard").trigger("click");
});

selectChord();


//load scales json file into order list
//$("#json-list").load("scales.json");
