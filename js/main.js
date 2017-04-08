
//model
//Conference
var conference = ['All', 'East', 'West'];

//NBA Teams
var teams = [
  {
    team: 'Atlanta Hawks',
    home: 'Philips Arena',
    conf: 'East',
    div: 'Southeast'
  },
  {
    team: 'Boston Celtics',
    home: 'TD Banknorth Garden',
    conf: 'East',
    div: 'Atlantic'
  },
  {
    team: 'Brooklyn Nets',
    home: 'Barclays Center',
    conf: 'East',
    div: 'Atlantic'
  },
  {
    team: 'Charlotte Hornets',
    home: 'Time Warner Cable Arena',
    conf: 'East',
    div: 'Southeast'
  },
  {
    team: 'Chicago Bulls',
    home: 'United Center',
    conf: 'East',
    div: 'Central'
  },
  {
    team: 'Cleveland Cavaliers',
    home: 'Quicken Loans Arena',
    conf: 'East',
    div: 'Central'
  },
  {
    team: 'Dallas Mavericks',
    home: 'American Airlines Center',
    conf: 'West',
    div: 'Southwest'
  },
  {
    team: 'Denver Nuggets',
    home: 'Pepsi Center',
    conf: 'West',
    div: 'Northwest'
  },
  {
    team: 'Detroit Pistons',
    home: 'The Palace of Auburn Hills',
    conf: 'East',
    div: 'Central'
  },
  {
    team: 'Golden State Warriors',
    home: 'Oracle Arena',
    conf: 'West',
    div: 'Pacific'
  },
  {
    team: 'Houston Rockets',
    home: 'Toyota Center',
    conf: 'West',
    div: 'Southwest'
  },
  {
    team: 'Indiana Pacers',
    home: 'Bankers Life Fieldhouse',
    conf: 'East',
    div: 'Central'
  },
  {
    team: 'LA Clippers',
    home: 'Staples Center',
    conf: 'West',
    div: 'Pacific'
  },
  {
    team: 'Los Angeles Lakers',
    home: 'Staples Center',
    conf: 'West',
    div: 'Pacific'
  },
  {
    team: 'Memphis Grizzlies',
    home: 'FedExForum',
    conf: 'West',
    div: 'Southwest'
  },
  {
    team: 'Miami Heat',
    home: 'American Airlines Arena',
    conf: 'East',
    div: 'Southeast'
  },
  {
    team: 'Milwaukee Bucks',
    home: 'Bradley Center',
    conf: 'East',
    div: 'Central'
  },
  {
    team: 'Minnesota Timberwolves',
    home: 'Target Center',
    conf: 'West',
    div: 'Northwest'
  },
  {
    team: 'New Orleans Pelicans',
    home: 'NewOrleans Arena',
    conf: 'West',
    div: 'Southwest'
  },
  {
    team: 'New York Knicks',
    home: 'Madison Square Garden',
    conf: 'East',
    div: 'Atlantic'
  },
  {
    team: 'Oklahoma City Thunder',
    home: 'Chesapeake Energy Arena',
    conf: 'West',
    div: 'Northwest'
  },
  {
    team: 'Orlando Magic',
    home: 'Amway Arena',
    conf: 'East',
    div: 'Southeast'
  },
  {
    team: 'Philadelphia 76ers',
    home: 'Wells Fargo Center',
    conf: 'East',
    div: 'Atlantic'
  },
  {
    team: 'Phoenix Suns',
    home: 'U.S Airways Center',
    conf: 'West',
    div: 'Pacific'
  },
  {
    team: 'Portland Trail Blazers',
    home: 'Moda Center',
    conf: 'West',
    div: 'Northwest'
  },
  {
    team: 'Sacramento Kings',
    home: 'Power Balance Pavilion',
    conf: 'West',
    div: 'Pacific'
  },
  {
    team: 'San Antonio Spurs',
    home: 'AT&T Center',
    conf: 'West',
    div: 'Southwest'
  },
  {
    team: 'Toronto Raptors',
    home: 'Air Canada Centre',
    conf: 'East',
    div: 'Atlantic'
  },
  {
    team: 'Utah Jazz',
    home: 'Energy Solutions',
    conf: 'West',
    div: 'Northwest'
  },
  {
    team: 'Washington Wizards',
    home: 'Verizon Center',
    conf: 'East',
    div: 'Southeast'
  }
];

// map
var map;

//array of all markers
var markers = [];

//array store the teams that will be display
var displayteams = [].concat(teams);

function initMap() {
  //create a new map
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7713024, lng: -73.9632393},
    zoom: 15
  });

  // infowindow
  var infoWindow = new google.maps.InfoWindow();

  //geocoder
  var geocoder = new google.maps.Geocoder();

  //style of defaultIcon
  var defaultIcon = makeMarkerIcon('0091ff');

  //use the teams array to generate an array of markers
  function showMarkers() {
    for (var i = 0; i < displayteams.length; i++) {
      // var position = displayteams[i].location;
      // var title = displayteams[i].name;
      // //create a marker pre location
      // var marker = new google.maps.Marker({
      //   position: position,
      //   title: title,
      //   animation: google.maps.Animation.DROP,
      //   icon: defaultIcon,
      //   id: i
      // });
      // //show marker
      // marker.setMap(map);
      // //create an onclick event to open the infowindow at each marker
      // marker.addListener('click', popInfoWindow(this, infoWindow));
      // //push the marker into markers array
      // markers.push(marker);
      geocodeAddress(displayteams[i].home, geocoder, map);
      console.log('init');
    }
  }

  //infoWindow
  function popInfoWindow(marker, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
      // Clear the infowindow content to give the streetview time to load.
      infowindow.setContent('');
      infowindow.marker = marker;
      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick', function() {
        infowindow.marker = null;
      });
      var streetViewService = new google.maps.StreetViewService();
      var radius = 50;
      // In case the status is OK, which means the pano was found, compute the
      // position of the streetview image, then calculate the heading, then get a
      // panorama from that and set the options
      var getStreetView = function(data, status) {
        if (status == google.maps.StreetViewStatus.OK) {
          var nearStreetViewLocation = data.location.latLng;
          var heading = google.maps.geometry.spherical.computeHeading(
            nearStreetViewLocation, marker.position);
            infowindow.setContent('<div>' + marker.title + '</div><div id="pano"></div>');
            var panoramaOptions = {
              position: nearStreetViewLocation,
              pov: {
                heading: heading,
                pitch: 30
              }
            };
          var panorama = new google.maps.StreetViewPanorama(
            document.getElementById('pano'), panoramaOptions);
        } else {
          infowindow.setContent('<div>' + marker.title + '</div>' +
            '<div>No Street View Found</div>');
        }
      }
      // Use streetview service to get the closest streetview image within
      // 50 meters of the markers position
      streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
      // Open the infowindow on the correct marker.
      infowindow.open(map, marker);
    }
  }

  //marker style
  function makeMarkerIcon(markerColor) {
    var markerImage = new google.maps.MarkerImage(
      'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
      '|40|_|%E2%80%A2',
      new google.maps.Size(21, 34),
      new google.maps.Point(0, 0),
      new google.maps.Point(10, 34),
      new google.maps.Size(21,34));
    return markerImage;
  }

  function geocodeAddress(addr, geocoder, resultsMap) {
  var address = addr;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
  }
}

//view model
var viewModel = function() {
  var self = this;
  //bindings
  this.title = "Home of NBA Teams";
  this.fliter = ko.observableArray(conference);
  this.teamsList = ko.observableArray(displayteams);

  this.logInfo = function(clickedItem) {
    console.log(clickedItem.name);
  };

  this.fliterInfo = function(clickedItem) {
    // teamsList.removeAll();
    displayFlitedteams(clickedItem, teams);
    console.log(clickedItem);
  };

  this.selectedHome = function(clickedItem) {
      //create a marker pre location
      var marker = new google.maps.Marker({
        position: {lat: 385323.90, lng: 770032.60},
        title: title,
        animation: google.maps.Animation.DROP,
        // icon: defaultIcon,
        // id: i
      });
      //show marker
      marker.setMap(map);
      // initMap();
      console.log('show marker');
  };
};

//generate the displayteams list
function displayFlitedteams(conf, teams) {
  teamsList.removeAll();
  teams.forEach(function(team) {
    if (team.conf == conf || conf == 'All') {
      teamsList.push(team);
      console.log("push");
    }
  }, this);
}

//activates knokout.js
ko.applyBindings(viewModel);
