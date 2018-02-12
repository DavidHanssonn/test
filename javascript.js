//Create the variables that will be used within the map configuration options.
//The latitude and longitude of the center of the map.
var pointMarker = new Array()
var pointMarkerImage = new Array()
var quizzes = new Array()

let gameMapCenter
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}
gameMapZoom = 16
let playerMarker = null
//The max and min zoom levels that are allowed.
let gameMapZoomMax = 21
let gameMapZoomMin = 6
//These options configure the setup of the map.
let gameMapOptions = {
  center: gameMapCenter,
  zoom: gameMapZoom,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  maxZoom: gameMapZoomMax,
  minZoom: gameMapZoomMin,
  panControl: false,
  mapTypeControl: false,
  styles: [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "32"
            },
            {
                "lightness": "-3"
            },
            {
                "visibility": "on"
            },
            {
                "weight": "1.18"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-70"
            },
            {
                "lightness": "14"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "100"
            },
            {
                "lightness": "-14"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "lightness": "12"
            }
        ]
    }
]
}
//Create the variable for the main map itself.
let gameMap
//When the page loads, the line below calls the function below called 'loadgameMap' to load up the map.
google.maps.event.addDomListener(window, 'load', loadGameMap)
//THE MAIN FUNCTION THAT IS CALLED WHEN THE WEB PAGE LOADS
function loadGameMap() {
  // Sets current location as center of the map
  navigator.geolocation.getCurrentPosition(function(position) {
    gameMapCenter = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
    gameMap.setCenter(gameMapCenter)
  })

  gameMap = new google.maps.Map(document.getElementById("game-map"), gameMapOptions)
  setPlayerMarker(gameMapCenter)
  //Calls the function below to load up all the map markers.
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message)
}

function loadMapMarkers() {
  //create array to store a set of location
  var collection = new Array()

  //a set of locations stored in array
  collection[1] = new google.maps.LatLng(59.3134, 18.1108)
  collection[2] = new google.maps.LatLng(59.3147, 18.1093)
  collection[3] = new google.maps.LatLng(59.3139, 18.1061)
  collection[4] = new google.maps.LatLng(59.3124, 18.1065)
  collection[5] = new google.maps.LatLng(59.3142, 18.1106)
  collection[6] = new google.maps.LatLng(59.3142,  18.1106)


  var pointMarkerImage = new Array() //store image of marker in array
  //var pointMarker = new Array()//store marker in array

  //create number of markers based on collection.length
  for (var i = 0; i < collection.length; i++) {
    pointMarkerImage[i] = new google.maps.MarkerImage('icon2.png')
    pointMarker[i] = new google.maps.Marker({
      position: collection[i],
      map: gameMap,
      icon: pointMarkerImage[i],
      animation: google.maps.Animation.BOUNCE,
      title: "Fråga " + i,
      my_id: i
    })
  }
}

function setPlayerMarker(gameMapCenter) {
  id = navigator.geolocation.watchPosition(setLocation, error, options)
  playerMarker = new google.maps.Marker({
    position: gameMapCenter,
    map: gameMap,
    icon: 'icon1.png'
  })
  loadMapMarkers()
}

function setLocation(pos) { // watchPosition callback
  let presetDistance = 100 //Meter
  playerPos = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude)
  playerMarker.setPosition(playerPos)

}
      // Create a new blank array for all the listing markers.
      var markers = [];
      //users Current location
      var userPosition = [];
      //All markers from the list only cordinates lat lng
      var allMarkers = [];

	 


        // These are the real estate listings that will be shown to the user.
        // Normally we'd have these in a database instead.
        var locations = [
          {title: 'Skolan 607', location: {lat: 59.3134, lng:18.1108}},
          {title: 'Elite Hotel Marina Tower', location: {lat: 59.3147, lng: 18.1093}},
          {title: 'Boule & Berså', location: {lat: 59.3139, lng: 18.1061}},
          {title: 'Pizzerian på andra sidan bron', location: {lat: 59.3124, lng: 18.1065}},
          {title: 'Gula huset, Manngrynskvarnen', location: {lat: 59.3142, lng: 18.1106}},
          {title: 'Henriksdals Station, mot Slussen', location: {lat: 59.3123, lng: 18.1079}}
        ];



        // The following group uses the location array to create an array of markers on initialize.
        for (var i = 0; i < locations.length; i++) {
          // Get the position from the location array.
          var position = locations[i].location;
          allMarkers.push(position);
          var title = locations[i].title;
          // Create a marker per location, and put into markers array.
           var marker = new google.maps.Marker({
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i
          });
          // Push the marker to our array of markers.
          markers.push(marker);
          // Create an onclick event to open an infowindow at each marker.
          marker.addListener('click', function() {
            populateInfoWindow(this, infoWindow);
          });
        }


        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };



          // code belo will match the usersposition with checkpoint in one array
          userPosition.push(pos);
          console.log(userPosition);
          // +() changes string into number
          for (var i = 0; i < userPosition.length; i++){
            userPosition[i].lat = +(userPosition[i].lat.toFixed(4));
            userPosition[i].lng = +(userPosition[i].lng.toFixed(4));

          }

          //console.log(allMarkers);
          if((userPosition[0].lng && userPosition[0].lat) === (allMarkers[0].lng && allMarkers[0].lat))   {
              $('#\\#myModal').modal('show');
          } else {
            console.log('YOU ARE NOT IN POSISTION TO GET QUESTION');
          }

          for(var i=0; i < allMarkers.length; i++) {
          var x = allMarkers[i].lat.toFixed(4);
          var y = allMarkers[i].lng.toFixed(4);
          console.log(x, y);
        }
        // below code with show current location of user
          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found.');
          infoWindow.open(map);
          map.setCenter(pos);
        }, function() {
          handleLocationError(true, infoWindow, map.getCenter());
        });
		}
	function myFunction() {
    alert("Right answer");
}
$('button1').on('click', function() {
    $(this).prop('disabled', true);
});

   setTimeout(function(){
     $('#\\#myModal').modal('hide')
     }, 16000);
 
      jQuery('.button1').click(function() {

	    if (!jQuery(this).hasClass('wrong-answer')) {
    jQuery('.button1').removeClass('wrong-answer');
    jQuery(this).toggleClass('wrong-answer');
  }

});
      jQuery('.button12').click(function() {

	    if (!jQuery(this).hasClass('right-answer')) {
    jQuery('.button12').removeClass('right-answer');
    jQuery(this).toggleClass('right-answer');
  }

});

function DisableButtons()
{
    $(".button1").attr("disabled", true);
	$(".button12").attr("disabled", true);
}

function correct() {
    document.getElementById("test1").innerHTML = "Correct";
	  setTimeout(function(){ $('#\\#myModal').modal('hide');; }, 1000);
	
}
function incorrect1() {
    document.getElementById("test").innerHTML = "Incorrect";
	
}
function incorrect2() {
    document.getElementById("test2").innerHTML = "Incorrect";
	
}
function incorrect3() {
    document.getElementById("test3").innerHTML = "Incorrect";
	
}

var width = 400,
  height = 400,
  timePassed = 0,
  timeLimit = 15;

var fields = [{
  value: timeLimit,
  size: timeLimit,
  update: function() {
    return timePassed = timePassed + 1;
  }
}];

var nilArc = d3.svg.arc()
  .innerRadius(width / 3 - 133)
  .outerRadius(width / 3 - 133)
  .startAngle(0)
  .endAngle(2 * Math.PI);

var arc = d3.svg.arc()
  .innerRadius(width / 3 - 55)
  .outerRadius(width / 3 - 25)
  .startAngle(0)
  .endAngle(function(d) {
    return ((d.value / d.size) * 2 * Math.PI);
  });

var svg = d3.select(".countdown").append("svg")
  .attr("width", width)
  .attr("height", height);

var field = svg.selectAll(".field")
  .data(fields)
  .enter().append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
  .attr("class", "field");

var back = field.append("path")
  .attr("class", "path path--background")
  .attr("d", arc);

var path = field.append("path")
  .attr("class", "path path--foreground");

var label = field.append("text")
  .attr("class", "label")
  .attr("dy", ".35em");

(function update() {

  field
    .each(function(d) {
      d.previous = d.value, d.value = d.update(timePassed);
    });

  path.transition()
    .ease("elastic")
    .duration(500)
    .attrTween("d", arcTween);

  if ((timeLimit - timePassed) <= 5)
    pulseText();
  else
    label
    .text(function(d) {
      return d.size - d.value;
    });

  if (timePassed <= timeLimit)
    setTimeout(update, 1000 - (timePassed % 1000));
  else
    destroyTimer();

})();

function pulseText() {
  back.classed("pulse", true);
  label.classed("pulse", true);

  if ((timeLimit - timePassed) >= 0) {
    label.style("font-size", "120px")
      .attr("transform", "translate(0," + +4 + ")")
      .text(function(d) {
        return d.size - d.value;
      });
  }

  label.transition()
    .ease("elastic")
    .duration(900)
    .style("font-size", "90px")
    .attr("transform", "translate(0," + -10 + ")");
}

function destroyTimer() {
  label.transition()
    .ease("back")
    .duration(700)
    .style("opacity", "0")
    .style("font-size", "5")
    .attr("transform", "translate(0," + -40 + ")")
    .each("end", function() {
      field.selectAll("text").remove()
    });

  path.transition()
    .ease("back")
    .duration(700)
    .attr("d", nilArc);

  back.transition()
    .ease("back")
    .duration(700)
    .attr("d", nilArc)
    .each("end", function() {
      field.selectAll("path").remove()
    });
}

function arcTween(b) {
  var i = d3.interpolate({
    value: b.previous
  }, b);
  return function(t) {
    return arc(i(t));
  };
}
		
