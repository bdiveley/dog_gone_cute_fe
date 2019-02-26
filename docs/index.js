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

function postDogPhoto(heartId) {
  var scoreArray = heartId.split("-");
  var score = scoreArray[scoreArray.length-1];
  var url = document.getElementById("dog-image").firstChild.id
  $.ajax({
    type: 'POST',
    url: "https://morning-refuge-91147.herokuapp.com/api/v1/dogs",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    data: { "photo": url, "score": score },
    success: function(result) {
      alert(`Your score of ${score} has been recorded`)
    },
    error: function(response) {
      alert(response.responseJSON.error);
    }
  })
}

$( document ).ready(function() {

  $( "#all-breeds" ).change(function() {
    var chosen = $( "#all-breeds option:selected" ).val();
    if(chosen == "Random") {
      getRandomPicture();
    }
  });

  $( "#heart-1" ).click( function(event) {
    postDogPhoto(document.getElementById("heart-1").id);
    event.stopImmediatePropagation();
  });

  $( "#heart-2" ).click( function(event) {
    postDogPhoto(document.getElementById("heart-2").id);
    event.stopImmediatePropagation();
  });

  $( "#heart-3" ).click( function(event) {
    postDogPhoto(document.getElementById("heart-3").id);
    event.stopImmediatePropagation();

  });

  $( "#heart-4" ).click( function(event) {
    postDogPhoto(document.getElementById("heart-4").id);
    event.stopImmediatePropagation();
  });

  $( "#heart-5" ).click( function(event) {
    postDogPhoto(document.getElementById("heart-5").id);
    event.stopImmediatePropagation();
  });
})

getAllBreeds();
