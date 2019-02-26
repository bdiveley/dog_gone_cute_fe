function getAllBreeds() {
  $.ajax({
    type: 'GET',
    url: "https://dog.ceo/api/breeds/list/all",
    success: function(result) {
      var breeds = result.message
      var allBreeds = ""
      Object.keys(breeds).forEach( function(breed) {
        if(breeds[`${breed}`].length === 0) {
          allBreeds += `<div class='breed'><h2>${breed}</h2></div>`
        } else {
          breeds[`${breed}`].forEach( function(name) {
            allBreeds += `<option>${name} ${breed}</option>`
          })
        }
      })
      document.getElementById("loaded-breeds").innerHTML = `<select id='all-breeds'><option>Pick an Option</option><option>Random</option><option>Cutest</option>${allBreeds}</select>`;
    }
  })
}

function getRandomPicture() {
  $.ajax({
    type: 'GET',
    url: "https://dog.ceo/api/breeds/image/random",
    success: function(result) {
      var image = result.message
      document.getElementById("dog-image").innerHTML = `<img id='${image}' src=${image}>`
      $("#dog-stats").show();
    },
    error: function(response) {
      alert(response.responseJSON.error);
    }
  })
}

getAllBreeds();

$( document ).ready(function() {

  $( "#all-breeds" ).change(function() {
    var chosen = $( "#all-breeds option:selected" ).val();
    if(chosen == "Random") {
      getRandomPicture();
    }
  });

  $( "#heart-1" ).click(function() {
    var heart = document.getElementById("heart-1").id;
    var score = heart.split("-").length-1;
    var url = document.getElementById("dog-image").firstChild.id
  });

})
