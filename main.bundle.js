/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	"use strict";
	
	function getAllBreeds() {
	  $.ajax({
	    type: 'GET',
	    url: "https://dog.ceo/api/breeds/list/all",
	    success: function success(result) {
	      var breeds = result.message;
	      var allBreeds = "";
	      Object.keys(breeds).forEach(function (breed) {
	        if (breeds["" + breed].length === 0) {
	          allBreeds += "<div class='breed'><h2>" + breed + "</h2></div>";
	        } else {
	          breeds["" + breed].forEach(function (name) {
	            allBreeds += "<option>" + name + " " + breed + "</option>";
	          });
	        }
	      });
	      document.getElementById("loaded-breeds").innerHTML = "<select id='all-breeds'><option>Pick an Option</option><option>Random</option><option>Cutest</option>" + allBreeds + "</select>";
	    }
	  });
	}
	
	function getRandomPicture() {
	  $.ajax({
	    type: 'GET',
	    url: "https://dog.ceo/api/breeds/image/random",
	    success: function success(result) {
	      var image = result.message;
	      document.getElementById("dog-image").innerHTML = "<div class='container'><img id='" + image + "' src=" + image + "></div><button type='button' id='random-btn'>I'll Have Another</button>";
	      $("#dog-stats").show();
	      $("#filter-btns").hide();
	    },
	    error: function error(response) {
	      alert(response.responseJSON.error);
	    }
	  });
	}
	
	function getAllCutest() {
	  $.ajax({
	    type: 'GET',
	    url: "https://morning-refuge-91147.herokuapp.com/api/v1/dogs",
	    success: function success(result) {
	      $("#dog-stats").hide();
	      $("#filter-btns").show();
	      var allDogs = "";
	      var dogs = result.data;
	      if (dogs.length == 0) {
	        alert("No dogs have been scored");
	        $("#dog-stats").show();
	      } else {
	        dogs.forEach(function (dog) {
	          var dogInfo = dog.attributes;
	          var average_score = Math.round(10 * dogInfo.ave_score) / 10;
	          allDogs += "<div class='container'><img id='" + dogInfo.photo + "' src=" + dogInfo.photo + "><div class='overlay'><div class='text'> " + dogInfo.breed.name + ":<br>" + average_score + " hearts</div></div></div>";
	          document.getElementById("dog-image").innerHTML = allDogs;
	        });
	      }
	    }
	  });
	}
	
	function getLeastCutest() {
	  $.ajax({
	    type: 'GET',
	    url: "https://morning-refuge-91147.herokuapp.com/api/v1/dogs?order=asc",
	    success: function success(result) {
	      $("#dog-stats").hide();
	      $("#filter-btns").show();
	      var allDogs = "";
	      var dogs = result.data;
	      if (dogs.length == 0) {
	        alert("No dogs have been scored");
	        $("#dog-stats").show();
	      } else {
	        dogs.forEach(function (dog) {
	          var dogInfo = dog.attributes;
	          var average_score = Math.round(10 * dogInfo.ave_score) / 10;
	          allDogs += "<div class='container'><img id='" + dogInfo.photo + "' src=" + dogInfo.photo + "><div class='overlay'><div class='text'> " + dogInfo.breed.name + ":<br>" + average_score + " hearts</div></div></div>";
	          document.getElementById("dog-image").innerHTML = allDogs;
	        });
	      }
	    }
	  });
	}
	
	function postDogPhoto(heartId) {
	  var scoreArray = heartId.split("-");
	  var score = scoreArray[scoreArray.length - 1];
	  var url = document.getElementById("dog-image").firstChild.firstChild.id;
	  $.ajax({
	    type: 'POST',
	    url: "https://morning-refuge-91147.herokuapp.com/api/v1/dogs",
	    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
	    data: { "photo": url, "score": score },
	    success: function success(result) {
	      alert("Your score of " + score + " has been recorded");
	    },
	    error: function error(response) {
	      alert(response.responseJSON.error);
	    }
	  });
	}
	
	$(document).ready(function () {
	
	  $("#all-breeds").change(function () {
	    var chosen = $("#all-breeds option:selected").val();
	    if (chosen == "Random") {
	      getRandomPicture();
	    } else if (chosen == "Cutest") {
	      getAllCutest();
	    }
	  });
	
	  $("#least-cute").click(function () {
	    getLeastCutest();
	  });
	
	  $("#most-cute").click(function () {
	    getAllCutest();
	  });
	
	  $("#random-btn").click(function () {
	    dbugger;
	    getRandomPicture();
	  });
	
	  $("#heart-1").click(function (event) {
	    postDogPhoto(document.getElementById("heart-1").id);
	    event.stopImmediatePropagation();
	  });
	
	  $("#heart-2").click(function (event) {
	    postDogPhoto(document.getElementById("heart-2").id);
	    event.stopImmediatePropagation();
	  });
	
	  $("#heart-3").click(function (event) {
	    postDogPhoto(document.getElementById("heart-3").id);
	    event.stopImmediatePropagation();
	  });
	
	  $("#heart-4").click(function (event) {
	    postDogPhoto(document.getElementById("heart-4").id);
	    event.stopImmediatePropagation();
	  });
	
	  $("#heart-5").click(function (event) {
	    postDogPhoto(document.getElementById("heart-5").id);
	    event.stopImmediatePropagation();
	  });
	});
	
	getAllBreeds();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWEzZDAzNjFjYzAzNjRhMmZjYTgiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRBbGxCcmVlZHMiLCIkIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJzdWNjZXNzIiwicmVzdWx0IiwiYnJlZWRzIiwibWVzc2FnZSIsImFsbEJyZWVkcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiYnJlZWQiLCJsZW5ndGgiLCJuYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImdldFJhbmRvbVBpY3R1cmUiLCJpbWFnZSIsInNob3ciLCJoaWRlIiwiZXJyb3IiLCJyZXNwb25zZSIsImFsZXJ0IiwicmVzcG9uc2VKU09OIiwiZ2V0QWxsQ3V0ZXN0IiwiYWxsRG9ncyIsImRvZ3MiLCJkYXRhIiwiZG9nIiwiZG9nSW5mbyIsImF0dHJpYnV0ZXMiLCJhdmVyYWdlX3Njb3JlIiwiTWF0aCIsInJvdW5kIiwiYXZlX3Njb3JlIiwicGhvdG8iLCJnZXRMZWFzdEN1dGVzdCIsInBvc3REb2dQaG90byIsImhlYXJ0SWQiLCJzY29yZUFycmF5Iiwic3BsaXQiLCJzY29yZSIsImZpcnN0Q2hpbGQiLCJpZCIsImNvbnRlbnRUeXBlIiwicmVhZHkiLCJjaGFuZ2UiLCJjaG9zZW4iLCJ2YWwiLCJjbGljayIsImRidWdnZXIiLCJldmVudCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQSxVQUFTQSxZQUFULEdBQXdCO0FBQ3RCQyxLQUFFQyxJ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RCxLQUFoQixDQUF1QixVQUFTRSxLQUFULEVBQWdCO0FBQ3JDZCxrQkFBYXhCLFNBQVNDLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUM2QixFQUFoRDtBQUNBUSxXQUFNQyx3QkFBTjtBQUNELElBSEQ7QUFJRCxFQWhERDs7QUFrREF2RCxnQiIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVhM2QwMzYxY2MwMzY0YTJmY2E4IiwiZnVuY3Rpb24gZ2V0QWxsQnJlZWRzKCkge1xuICAkLmFqYXgoe1xuICAgIHR5cGU6ICdHRVQnLFxuICAgIHVybDogXCJodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkcy9saXN0L2FsbFwiLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgdmFyIGJyZWVkcyA9IHJlc3VsdC5tZXNzYWdlXG4gICAgICB2YXIgYWxsQnJlZWRzID0gXCJcIlxuICAgICAgT2JqZWN0LmtleXMoYnJlZWRzKS5mb3JFYWNoKCBmdW5jdGlvbihicmVlZCkge1xuICAgICAgICBpZihicmVlZHNbYCR7YnJlZWR9YF0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgYWxsQnJlZWRzICs9IGA8ZGl2IGNsYXNzPSdicmVlZCc+PGgyPiR7YnJlZWR9PC9oMj48L2Rpdj5gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlZWRzW2Ake2JyZWVkfWBdLmZvckVhY2goIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGFsbEJyZWVkcyArPSBgPG9wdGlvbj4ke25hbWV9ICR7YnJlZWR9PC9vcHRpb24+YFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRlZC1icmVlZHNcIikuaW5uZXJIVE1MID0gYDxzZWxlY3QgaWQ9J2FsbC1icmVlZHMnPjxvcHRpb24+UGljayBhbiBPcHRpb248L29wdGlvbj48b3B0aW9uPlJhbmRvbTwvb3B0aW9uPjxvcHRpb24+Q3V0ZXN0PC9vcHRpb24+JHthbGxCcmVlZHN9PC9zZWxlY3Q+YDtcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbVBpY3R1cmUoKSB7XG4gICQuYWpheCh7XG4gICAgdHlwZTogJ0dFVCcsXG4gICAgdXJsOiBcImh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWRzL2ltYWdlL3JhbmRvbVwiLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgdmFyIGltYWdlID0gcmVzdWx0Lm1lc3NhZ2VcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG9nLWltYWdlXCIpLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPSdjb250YWluZXInPjxpbWcgaWQ9JyR7aW1hZ2V9JyBzcmM9JHtpbWFnZX0+PC9kaXY+PGJ1dHRvbiB0eXBlPSdidXR0b24nIGlkPSdyYW5kb20tYnRuJz5JJ2xsIEhhdmUgQW5vdGhlcjwvYnV0dG9uPmBcbiAgICAgICQoXCIjZG9nLXN0YXRzXCIpLnNob3coKTtcbiAgICAgICQoXCIjZmlsdGVyLWJ0bnNcIikuaGlkZSgpO1xuICAgIH0sXG4gICAgZXJyb3I6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBhbGVydChyZXNwb25zZS5yZXNwb25zZUpTT04uZXJyb3IpO1xuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0QWxsQ3V0ZXN0KCkge1xuICAkLmFqYXgoe1xuICAgIHR5cGU6ICdHRVQnLFxuICAgIHVybDogXCJodHRwczovL21vcm5pbmctcmVmdWdlLTkxMTQ3Lmhlcm9rdWFwcC5jb20vYXBpL3YxL2RvZ3NcIixcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICQoXCIjZG9nLXN0YXRzXCIpLmhpZGUoKTtcbiAgICAgICQoXCIjZmlsdGVyLWJ0bnNcIikuc2hvdygpO1xuICAgICAgdmFyIGFsbERvZ3MgPSBcIlwiXG4gICAgICB2YXIgZG9ncyA9IHJlc3VsdC5kYXRhXG4gICAgICBpZiAoZG9ncy5sZW5ndGggPT0gMCkge1xuICAgICAgICBhbGVydChcIk5vIGRvZ3MgaGF2ZSBiZWVuIHNjb3JlZFwiKVxuICAgICAgICAkKFwiI2RvZy1zdGF0c1wiKS5zaG93KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2dzLmZvckVhY2goIGZ1bmN0aW9uKGRvZykge1xuICAgICAgICAgIHZhciBkb2dJbmZvID0gZG9nLmF0dHJpYnV0ZXNcbiAgICAgICAgICB2YXIgYXZlcmFnZV9zY29yZSA9IE1hdGgucm91bmQoMTAqKGRvZ0luZm8uYXZlX3Njb3JlKSkvMTA7XG4gICAgICAgICAgYWxsRG9ncyArPSBgPGRpdiBjbGFzcz0nY29udGFpbmVyJz48aW1nIGlkPScke2RvZ0luZm8ucGhvdG99JyBzcmM9JHtkb2dJbmZvLnBob3RvfT48ZGl2IGNsYXNzPSdvdmVybGF5Jz48ZGl2IGNsYXNzPSd0ZXh0Jz4gJHtkb2dJbmZvLmJyZWVkLm5hbWV9Ojxicj4ke2F2ZXJhZ2Vfc2NvcmV9IGhlYXJ0czwvZGl2PjwvZGl2PjwvZGl2PmBcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvZy1pbWFnZVwiKS5pbm5lckhUTUwgPSBhbGxEb2dzXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBnZXRMZWFzdEN1dGVzdCgpIHtcbiAgJC5hamF4KHtcbiAgICB0eXBlOiAnR0VUJyxcbiAgICB1cmw6IFwiaHR0cHM6Ly9tb3JuaW5nLXJlZnVnZS05MTE0Ny5oZXJva3VhcHAuY29tL2FwaS92MS9kb2dzP29yZGVyPWFzY1wiLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgJChcIiNkb2ctc3RhdHNcIikuaGlkZSgpO1xuICAgICAgJChcIiNmaWx0ZXItYnRuc1wiKS5zaG93KCk7XG4gICAgICB2YXIgYWxsRG9ncyA9IFwiXCJcbiAgICAgIHZhciBkb2dzID0gcmVzdWx0LmRhdGFcbiAgICAgIGlmIChkb2dzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGFsZXJ0KFwiTm8gZG9ncyBoYXZlIGJlZW4gc2NvcmVkXCIpXG4gICAgICAgICQoXCIjZG9nLXN0YXRzXCIpLnNob3coKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvZ3MuZm9yRWFjaCggZnVuY3Rpb24oZG9nKSB7XG4gICAgICAgICAgdmFyIGRvZ0luZm8gPSBkb2cuYXR0cmlidXRlc1xuICAgICAgICAgIHZhciBhdmVyYWdlX3Njb3JlID0gTWF0aC5yb3VuZCgxMCooZG9nSW5mby5hdmVfc2NvcmUpKS8xMDtcbiAgICAgICAgICBhbGxEb2dzICs9IGA8ZGl2IGNsYXNzPSdjb250YWluZXInPjxpbWcgaWQ9JyR7ZG9nSW5mby5waG90b30nIHNyYz0ke2RvZ0luZm8ucGhvdG99PjxkaXYgY2xhc3M9J292ZXJsYXknPjxkaXYgY2xhc3M9J3RleHQnPiAke2RvZ0luZm8uYnJlZWQubmFtZX06PGJyPiR7YXZlcmFnZV9zY29yZX0gaGVhcnRzPC9kaXY+PC9kaXY+PC9kaXY+YFxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZG9nLWltYWdlXCIpLmlubmVySFRNTCA9IGFsbERvZ3NcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHBvc3REb2dQaG90byhoZWFydElkKSB7XG4gIHZhciBzY29yZUFycmF5ID0gaGVhcnRJZC5zcGxpdChcIi1cIik7XG4gIHZhciBzY29yZSA9IHNjb3JlQXJyYXlbc2NvcmVBcnJheS5sZW5ndGgtMV07XG4gIHZhciB1cmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRvZy1pbWFnZVwiKS5maXJzdENoaWxkLmZpcnN0Q2hpbGQuaWRcbiAgJC5hamF4KHtcbiAgICB0eXBlOiAnUE9TVCcsXG4gICAgdXJsOiBcImh0dHBzOi8vbW9ybmluZy1yZWZ1Z2UtOTExNDcuaGVyb2t1YXBwLmNvbS9hcGkvdjEvZG9nc1wiLFxuICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04JyxcbiAgICBkYXRhOiB7IFwicGhvdG9cIjogdXJsLCBcInNjb3JlXCI6IHNjb3JlIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICBhbGVydChgWW91ciBzY29yZSBvZiAke3Njb3JlfSBoYXMgYmVlbiByZWNvcmRlZGApXG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGFsZXJ0KHJlc3BvbnNlLnJlc3BvbnNlSlNPTi5lcnJvcik7XG4gICAgfVxuICB9KVxufVxuXG4kKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICQoIFwiI2FsbC1icmVlZHNcIiApLmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICB2YXIgY2hvc2VuID0gJCggXCIjYWxsLWJyZWVkcyBvcHRpb246c2VsZWN0ZWRcIiApLnZhbCgpO1xuICAgIGlmKGNob3NlbiA9PSBcIlJhbmRvbVwiKSB7XG4gICAgICBnZXRSYW5kb21QaWN0dXJlKCk7XG4gICAgfSBlbHNlIGlmIChjaG9zZW4gPT0gXCJDdXRlc3RcIikge1xuICAgICAgZ2V0QWxsQ3V0ZXN0KCk7XG4gICAgfVxuICB9KTtcblxuICAkKCBcIiNsZWFzdC1jdXRlXCIgKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgIGdldExlYXN0Q3V0ZXN0KCk7XG4gIH0pO1xuXG4gICQoIFwiI21vc3QtY3V0ZVwiICkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICBnZXRBbGxDdXRlc3QoKTtcbiAgfSk7XG5cbiAgJCggXCIjcmFuZG9tLWJ0blwiICkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgZGJ1Z2dlcjtcbiAgICAgIGdldFJhbmRvbVBpY3R1cmUoKTtcbiAgfSk7XG5cbiAgJCggXCIjaGVhcnQtMVwiICkuY2xpY2soIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgcG9zdERvZ1Bob3RvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhcnQtMVwiKS5pZCk7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG4gICQoIFwiI2hlYXJ0LTJcIiApLmNsaWNrKCBmdW5jdGlvbihldmVudCkge1xuICAgIHBvc3REb2dQaG90byhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYXJ0LTJcIikuaWQpO1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICB9KTtcblxuICAkKCBcIiNoZWFydC0zXCIgKS5jbGljayggZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBwb3N0RG9nUGhvdG8oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFydC0zXCIpLmlkKTtcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfSk7XG5cbiAgJCggXCIjaGVhcnQtNFwiICkuY2xpY2soIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgcG9zdERvZ1Bob3RvKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhcnQtNFwiKS5pZCk7XG4gICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG4gICQoIFwiI2hlYXJ0LTVcIiApLmNsaWNrKCBmdW5jdGlvbihldmVudCkge1xuICAgIHBvc3REb2dQaG90byhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYXJ0LTVcIikuaWQpO1xuICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICB9KTtcbn0pXG5cbmdldEFsbEJyZWVkcygpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZG9jcy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=