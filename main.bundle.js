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
	      document.getElementById("dog-image").innerHTML = "<img src=" + image + ">";
	    },
	    error: function error(response) {
	      alert(response.responseJSON.error);
	    }
	  });
	}
	
	getAllBreeds();
	
	$(document).ready(function () {
	
	  $("#all-breeds").change(function () {
	    var chosen = $("#all-breeds option:selected").val();
	    if (chosen == "Random") {
	      getRandomPicture();
	    }
	  });
	});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmVjMjMzOTk3NDY4OGU4Y2MzMmIiLCJ3ZWJwYWNrOi8vLy4vZG9jcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRBbGxCcmVlZHMiLCIkIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJzdWNjZXNzIiwicmVzdWx0IiwiYnJlZWRzIiwibWVzc2FnZSIsImFsbEJyZWVkcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiYnJlZWQiLCJsZW5ndGgiLCJuYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImdldFJhbmRvbVBpY3R1cmUiLCJpbWFnZSIsImVycm9yIiwicmVzcG9uc2UiLCJhbGVydCIsInJlc3BvbnNlSlNPTiIsInJlYWR5IiwiY2hhbmdlIiwiY2hvc2VuIiwidmFsIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBLFVBQVNBLFlBQVQsR0FBd0I7QUFDdEJDLEtBQUVDLElBQUYsQ0FBTztBQUNMQyxXQUFNLEtBREQ7QUFFTEMsVUFBSyxxQ0FGQTtBQUdMQyxjQUFTLGlCQUFTQyxNQUFULEVBQWlCO0FBQ3hCLFdBQUlDLFNBQVNELE9BQU9FLE9BQXBCO0FBQ0EsV0FBSUMsWUFBWSxFQUFoQjtBQUNBQyxjQUFPQyxJQUFQLENBQVlKLE1BQVosRUFBb0JLLE9BQXBCLENBQTZCLFVBQVNDLEtBQVQsRUFBZ0I7QUFDM0MsYUFBR04sWUFBVU0sS0FBVixFQUFtQkMsTUFBbkIsS0FBOEIsQ0FBakMsRUFBb0M7QUFDbENMLG9EQUF1Q0ksS0FBdkM7QUFDRCxVQUZELE1BRU87QUFDTE4sdUJBQVVNLEtBQVYsRUFBbUJELE9BQW5CLENBQTRCLFVBQVNHLElBQVQsRUFBZTtBQUN6Q04sdUNBQXdCTSxJQUF4QixTQUFnQ0YsS0FBaEM7QUFDRCxZQUZEO0FBR0Q7QUFDRixRQVJEO0FBU0FHLGdCQUFTQyxjQUFULENBQXdCLGVBQXhCLEVBQXlDQyxTQUF6Qyw2R0FBNkpULFNBQTdKO0FBQ0Q7QUFoQkksSUFBUDtBQWtCRDs7QUFFRCxVQUFTVSxnQkFBVCxHQUE0QjtBQUMxQmxCLEtBQUVDLElBQUYsQ0FBTztBQUNMQyxXQUFNLEtBREQ7QUFFTEMsVUFBSyx5Q0FGQTtBQUdMQyxjQUFTLGlCQUFTQyxNQUFULEVBQWlCO0FBQ3hCLFdBQUljLFFBQVFkLE9BQU9FLE9BQW5CO0FBQ0FRLGdCQUFTQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDQyxTQUFyQyxpQkFBNkRFLEtBQTdEO0FBQ0QsTUFOSTtBQU9MQyxZQUFPLGVBQVNDLFFBQVQsRUFBbUI7QUFDeEJDLGFBQU1ELFNBQVNFLFlBQVQsQ0FBc0JILEtBQTVCO0FBQ0Q7QUFUSSxJQUFQO0FBV0Q7O0FBRURyQjs7QUFFQUMsR0FBR2UsUUFBSCxFQUFjUyxLQUFkLENBQW9CLFlBQVc7O0FBRTdCeEIsS0FBRyxhQUFILEVBQW1CeUIsTUFBbkIsQ0FBMEIsWUFBVztBQUNuQyxTQUFJQyxTQUFTMUIsRUFBRyw2QkFBSCxFQUFtQzJCLEdBQW5DLEVBQWI7QUFDQSxTQUFHRCxVQUFVLFFBQWIsRUFBdUI7QUFDckJSO0FBQ0Q7QUFDRixJQUxEO0FBTUQsRUFSRCxFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmVjMjMzOTk3NDY4OGU4Y2MzMmIiLCJmdW5jdGlvbiBnZXRBbGxCcmVlZHMoKSB7XG4gICQuYWpheCh7XG4gICAgdHlwZTogJ0dFVCcsXG4gICAgdXJsOiBcImh0dHBzOi8vZG9nLmNlby9hcGkvYnJlZWRzL2xpc3QvYWxsXCIsXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICB2YXIgYnJlZWRzID0gcmVzdWx0Lm1lc3NhZ2VcbiAgICAgIHZhciBhbGxCcmVlZHMgPSBcIlwiXG4gICAgICBPYmplY3Qua2V5cyhicmVlZHMpLmZvckVhY2goIGZ1bmN0aW9uKGJyZWVkKSB7XG4gICAgICAgIGlmKGJyZWVkc1tgJHticmVlZH1gXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBhbGxCcmVlZHMgKz0gYDxkaXYgY2xhc3M9J2JyZWVkJz48aDI+JHticmVlZH08L2gyPjwvZGl2PmBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVlZHNbYCR7YnJlZWR9YF0uZm9yRWFjaCggZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgYWxsQnJlZWRzICs9IGA8b3B0aW9uPiR7bmFtZX0gJHticmVlZH08L29wdGlvbj5gXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGVkLWJyZWVkc1wiKS5pbm5lckhUTUwgPSBgPHNlbGVjdCBpZD0nYWxsLWJyZWVkcyc+PG9wdGlvbj5QaWNrIGFuIE9wdGlvbjwvb3B0aW9uPjxvcHRpb24+UmFuZG9tPC9vcHRpb24+PG9wdGlvbj5DdXRlc3Q8L29wdGlvbj4ke2FsbEJyZWVkc308L3NlbGVjdD5gO1xuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tUGljdHVyZSgpIHtcbiAgJC5hamF4KHtcbiAgICB0eXBlOiAnR0VUJyxcbiAgICB1cmw6IFwiaHR0cHM6Ly9kb2cuY2VvL2FwaS9icmVlZHMvaW1hZ2UvcmFuZG9tXCIsXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICB2YXIgaW1hZ2UgPSByZXN1bHQubWVzc2FnZVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb2ctaW1hZ2VcIikuaW5uZXJIVE1MID0gYDxpbWcgc3JjPSR7aW1hZ2V9PmBcbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgYWxlcnQocmVzcG9uc2UucmVzcG9uc2VKU09OLmVycm9yKTtcbiAgICB9XG4gIH0pXG59XG5cbmdldEFsbEJyZWVkcygpO1xuXG4kKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICQoIFwiI2FsbC1icmVlZHNcIiApLmNoYW5nZShmdW5jdGlvbigpIHtcbiAgICB2YXIgY2hvc2VuID0gJCggXCIjYWxsLWJyZWVkcyBvcHRpb246c2VsZWN0ZWRcIiApLnZhbCgpO1xuICAgIGlmKGNob3NlbiA9PSBcIlJhbmRvbVwiKSB7XG4gICAgICBnZXRSYW5kb21QaWN0dXJlKCk7XG4gICAgfVxuICB9KTtcbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kb2NzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==