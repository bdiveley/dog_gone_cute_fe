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
	      document.getElementById("loaded-breeds").innerHTML = "<select id='all-breeds'><option>Random</option><option>Cutest</option>" + allBreeds + "</select>";
	    }
	  });
	}
	
	getAllBreeds();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmUyZGViMmI0MmM3NTRjMjc0MjciLCJ3ZWJwYWNrOi8vLy4vZG9jcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRBbGxCcmVlZHMiLCIkIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJzdWNjZXNzIiwicmVzdWx0IiwiYnJlZWRzIiwibWVzc2FnZSIsImFsbEJyZWVkcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiYnJlZWQiLCJsZW5ndGgiLCJuYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3BDQSxVQUFTQSxZQUFULEdBQXdCO0FBQ3RCQyxLQUFFQyxJQUFGLENBQU87QUFDTEMsV0FBTSxLQUREO0FBRUxDLFVBQUsscUNBRkE7QUFHTEMsY0FBUyxpQkFBU0MsTUFBVCxFQUFpQjtBQUN4QixXQUFJQyxTQUFTRCxPQUFPRSxPQUFwQjtBQUNBLFdBQUlDLFlBQVksRUFBaEI7QUFDQUMsY0FBT0MsSUFBUCxDQUFZSixNQUFaLEVBQW9CSyxPQUFwQixDQUE2QixVQUFTQyxLQUFULEVBQWdCO0FBQzNDLGFBQUdOLFlBQVVNLEtBQVYsRUFBbUJDLE1BQW5CLEtBQThCLENBQWpDLEVBQW9DO0FBQ2xDTCxvREFBdUNJLEtBQXZDO0FBQ0QsVUFGRCxNQUVPO0FBQ0xOLHVCQUFVTSxLQUFWLEVBQW1CRCxPQUFuQixDQUE0QixVQUFTRyxJQUFULEVBQWU7QUFDekNOLHVDQUF3Qk0sSUFBeEIsU0FBZ0NGLEtBQWhDO0FBQ0QsWUFGRDtBQUdEO0FBQ0YsUUFSRDtBQVNBRyxnQkFBU0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Q0MsU0FBekMsOEVBQThIVCxTQUE5SDtBQUNEO0FBaEJJLElBQVA7QUFrQkQ7O0FBRURULGdCIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmUyZGViMmI0MmM3NTRjMjc0MjciLCJcblxuZnVuY3Rpb24gZ2V0QWxsQnJlZWRzKCkge1xuICAkLmFqYXgoe1xuICAgIHR5cGU6ICdHRVQnLFxuICAgIHVybDogXCJodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkcy9saXN0L2FsbFwiLFxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgdmFyIGJyZWVkcyA9IHJlc3VsdC5tZXNzYWdlXG4gICAgICB2YXIgYWxsQnJlZWRzID0gXCJcIlxuICAgICAgT2JqZWN0LmtleXMoYnJlZWRzKS5mb3JFYWNoKCBmdW5jdGlvbihicmVlZCkge1xuICAgICAgICBpZihicmVlZHNbYCR7YnJlZWR9YF0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgYWxsQnJlZWRzICs9IGA8ZGl2IGNsYXNzPSdicmVlZCc+PGgyPiR7YnJlZWR9PC9oMj48L2Rpdj5gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlZWRzW2Ake2JyZWVkfWBdLmZvckVhY2goIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGFsbEJyZWVkcyArPSBgPG9wdGlvbj4ke25hbWV9ICR7YnJlZWR9PC9vcHRpb24+YFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRlZC1icmVlZHNcIikuaW5uZXJIVE1MID0gYDxzZWxlY3QgaWQ9J2FsbC1icmVlZHMnPjxvcHRpb24+UmFuZG9tPC9vcHRpb24+PG9wdGlvbj5DdXRlc3Q8L29wdGlvbj4ke2FsbEJyZWVkc308L3NlbGVjdD5gO1xuICAgIH1cbiAgfSlcbn1cblxuZ2V0QWxsQnJlZWRzKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kb2NzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==