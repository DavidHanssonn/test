//Create the variables that will be used within the map configuration options.
//The latitude and longitude of the center of the map.
var pointMarker = new Array()
var pointMarkerImage = new Array()
var quizzes = new Array()

// circle around marker
function arePointsNear(checkPoint, centerPoint, km) {
  var ky = 40000 / 360;
  var kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
  var dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
  var dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
  return Math.sqrt(dx * dx + dy * dy) <= km;
};

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
[59.3134, 18.1108], 
[59.313303, 18.110104], 
[59.3139, 18.1061],
[59.3124, 18.1065],
[59.3142, 18.1106] ,
[59.3123, 18.1079]   
];
locations.forEach( (element) =>{
  //console.log({lat: element[0], lng: element[1]});
});

  infoWindow = new google.maps.InfoWindow;
  
 var userlocation = null;

  var id;
  if (navigator.geolocation) {
    id = navigator.geolocation.watchPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        EnableHighAccuracy: true,
        timeout: 3000,
        maximumAge: 0,
        distanceFilter: 1,
      };

 

        //var markerobjects = [];
      //foreach loop will check in which marker and convert into object. 
      //its the same array as location but with objects in it. 
      //console.log(locations);
      locations.forEach( (element) =>{
        var latlng = {lat: element[0], lng: element[1]};        
        //markerobjects.push(latlng);        
        n = arePointsNear(pos, latlng, 0.02); 
        

        //for (var i = 0; i < locations.length; i++) {
          //This will check how many markers are there in location array
          //latlng = {lat: locations[i][0],  lng: locations[i][1]};

         var questionMarker = 'icon2.png';
         var marker = new google.maps.Marker({
           position: latlng,
           title: title,
           animation: google.maps.Animation.BOUNCE,
           id: i,
           map:gameMap,
           icon: questionMarker
         });

       //}

        if (n === true) { 
          //Because markerobjects and locations are the same we will remove marker then from location array. 
          var currentMarker = latlng;
          console.log(currentMarker);
          // console.log(Number(latlng.lat));
          
          var match = locations.indexOf(currentMarker);   
          console.log(match);
          $('#\\#myModal').modal('show');
          //var splicedMarker = locations.splice(match, 1);     
          //console.log(locations); 
          
       } else {
          //console.log('Your position doesnt match');
          // break;
        }
      });

    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });

  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  // The following group uses the location array to create an array of markers on initialize.
  for (var i = 0; i < locations.length; i++) {
    // Get the position from the location array.
    var position = locations[i].location;
    console.log(position);
    var title = locations[i].title;

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
		
