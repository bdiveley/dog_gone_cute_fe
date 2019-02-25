

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
      document.getElementById("loaded-breeds").innerHTML = `<select id='all-breeds'><option>Random</option><option>Cutest</option>${allBreeds}</select>`;
    }
  })
}

getAllBreeds();
