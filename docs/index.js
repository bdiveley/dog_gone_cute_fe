function getAllBreeds() {
  $.ajax({
    type: 'GET',
    url: "https://dog.ceo/api/breeds/list/all",
    success: function(result) {
      var breeds = result.message
      var allBreeds = ""
      Object.keys(breeds).forEach( function(breed) {
        if(breeds[`${breed}`].length === 0) {
          allBreeds += `<option>${breed}</option>`
        } else {
          breeds[`${breed}`].forEach( function(name) {
            allBreeds += `<option>${name}-${breed}</option>`
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
      document.getElementById("dog-image").innerHTML = `<div class='container'><img id='${image}' src=${image}></div>`
      $("#dog-stats").show();
      $("#random").show();
      $("#filter-btns").hide();
    },
    error: function(response) {
      alert(response.responseJSON.error);
    }
  })
}

function getRandomBreed(breed) {
  if (breed.includes("-")) {
    var type = breed.split("-")[0]
    var brand = breed.split("-")[1]
    var endpoint = `https://dog.ceo/api/breed/${type}/${brand}/images`
  } else {
    var endpoint = `https://dog.ceo/api/breed/${breed}/images`
  }
  $.ajax({
    type: 'GET',
    url: endpoint,
    success: function(result) {
      var images = result.message
      var randomIndex = Math.floor(Math.random() * images.length);
      var image = images[randomIndex]
      document.getElementById("dog-image").innerHTML = `<div class='container'><img id='${image}' src=${image}></div>`
      $("#dog-stats").show();
      $("#random").hide();
      $("#filter-btns").hide();
    },
    error: function(response) {
      alert(response.responseJSON.error);
    }
  })
}

function getAllCutest() {
  $.ajax({
    type: 'GET',
    url: "https://morning-refuge-91147.herokuapp.com/api/v1/dogs",
    success: function(result) {
      $("#dog-stats").hide();
      $("#random").hide();
      $("#filter-btns").show();
      var allDogs = ""
      var dogs = result.data
      if (dogs.length == 0) {
        alert("No dogs have been scored")
        $("#dog-stats").show();
      } else {
        dogs.forEach( function(dog) {
          var dogInfo = dog.attributes
          var average_score = Math.round(10*(dogInfo.ave_score))/10;
          allDogs += `<div class='container'><img id='${dogInfo.photo}' src=${dogInfo.photo}><div class='overlay'><div class='text'> ${dogInfo.breed.name}:<br>${average_score} hearts</div></div></div>`
          document.getElementById("dog-image").innerHTML = allDogs
        })
      }
    }
  })
}

function getLeastCutest() {
  $.ajax({
    type: 'GET',
    url: "https://morning-refuge-91147.herokuapp.com/api/v1/dogs?order=asc",
    success: function(result) {
      $("#dog-stats").hide();
      $("#filter-btns").show();
      var allDogs = ""
      var dogs = result.data
      if (dogs.length == 0) {
        alert("No dogs have been scored")
        $("#dog-stats").show();
      } else {
        dogs.forEach( function(dog) {
          var dogInfo = dog.attributes
          var average_score = Math.round(10*(dogInfo.ave_score))/10;
          allDogs += `<div class='container'><img id='${dogInfo.photo}' src=${dogInfo.photo}><div class='overlay'><div class='text'> ${dogInfo.breed.name}:<br>${average_score} hearts</div></div></div>`
          document.getElementById("dog-image").innerHTML = allDogs
        })
      }
    }
  })
}

function postDogPhoto(heartId) {
  var scoreArray = heartId.split("-");
  var score = scoreArray[scoreArray.length-1];
  var url = document.getElementById("dog-image").firstChild.firstChild.id
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
    } else if (chosen == "Cutest") {
      getAllCutest();
    } else {
      getRandomBreed(chosen)
    }
  });

  $( "#least-cute" ).click(function() {
      getLeastCutest();
  });

  $( "#most-cute" ).click(function() {
      getAllCutest();
  });

  $( "#random" ).click(function() {
      getRandomPicture();
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
