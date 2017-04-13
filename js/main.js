
//model
//title
var bigTitle = "Home of NBA Teams";

//Conference
var conference = ['All', 'East', 'West'];

//NBA Teams
var teams = [
  {
    team: 'Atlanta Hawks',
    home: 'Philips Arena',
    position: {lat: 33.75728, lng: -84.39632},
    conf: 'East',
    div: 'Southeast',
    marker: {},
    icon: 'css/img/1.png'
  },
  {
    team: 'Boston Celtics',
    home: 'TD Banknorth Garden',
    position: {lat: 42.366198, lng: -71.06214599999998},
    conf: 'East',
    div: 'Atlantic',
    marker: {},
    icon: 'css/img/2.png'
  },
  {
    team: 'Brooklyn Nets',
    home: 'Barclays Center',
    position: {lat: 40.6824952, lng: -73.97503490000003},
    conf: 'East',
    div: 'Atlantic',
    marker: {},
    icon: 'css/img/17.png'
  },
  {
    team: 'Charlotte Hornets',
    home: 'Time Warner Cable Arena',
    position: {lat: 35.2251426, lng: -80.8392351},
    conf: 'East',
    div: 'Southeast',
    marker: {},
    icon: 'css/img/30.png'
  },
  {
    team: 'Chicago Bulls',
    home: 'United Center',
    position: {lat: 41.8806908, lng: -87.67417590000002},
    conf: 'East',
    div: 'Central',
    marker: {},
    icon: 'css/img/4.png'
  },
  {
    team: 'Cleveland Cavaliers',
    home: 'Quicken Loans Arena',
    position: {lat: 41.4965597, lng: -81.6882172},
    conf: 'East',
    div: 'Central',
    marker: {},
    icon: 'css/img/5.png'
  },
  {
    team: 'Dallas Mavericks',
    home: 'American Airlines Center',
    position: {lat: 32.7905064, lng: -96.8103549},
    conf: 'West',
    div: 'Southwest',
    marker: {},
    icon: 'css/img/6.png'
  },
  {
    team: 'Denver Nuggets',
    home: 'Pepsi Center',
    position: {lat: 39.74866, lng: -105.00770999999997},
    conf: 'West',
    div: 'Northwest',
    marker: {},
    icon: 'css/img/7.png'
  },
  {
    team: 'Detroit Pistons',
    home: 'The Palace of Auburn Hills',
    position: {lat: 42.69688499999999, lng: -83.24579289999997},
    conf: 'East',
    div: 'Central',
    marker: {},
    icon: 'css/img/8.png'
  },
  {
    team: 'Golden State Warriors',
    home: 'Oracle Arena',
    position: {lat: 37.7502917, lng: -122.2030494},
    conf: 'West',
    div: 'Pacific',
    marker: {},
    icon: 'css/img/901.png'
  },
  {
    team: 'Houston Rockets',
    home: 'Toyota Center',
    position: {lat: 29.75076039999999, lng: -95.3621005},
    conf: 'West',
    div: 'Southwest',
    marker: {},
    icon: 'css/img/10.png'
  },
  {
    team: 'Indiana Pacers',
    home: 'Bankers Life Fieldhouse',
    position: {lat: 39.7639301, lng: -86.15546410000002},
    conf: 'East',
    div: 'Central',
    marker: {},
    icon: 'css/img/11.png'
  },
  {
    team: 'LA Clippers',
    home: 'Staples Center',
    position: {lat: 34.0430175, lng: -118.2672541},
    conf: 'West',
    div: 'Pacific',
    marker: {},
    icon: 'css/img/1201.png'
  },
  {
    team: 'Los Angeles Lakers',
    home: 'Staples Center',
    position: {lat: 34.0430175, lng: -118.2672541},
    conf: 'West',
    div: 'Pacific',
    marker: {},
    icon: 'css/img/13.png'
  },
  {
    team: 'Memphis Grizzlies',
    home: 'FedExForum',
    position: {lat: 35.1382037, lng: -90.05047379999996},
    conf: 'West',
    div: 'Southwest',
    marker: {},
    icon: 'css/img/29.png'
  },
  {
    team: 'Miami Heat',
    home: 'American Airlines Arena',
    position: {lat: 25.7814014, lng: -80.18696899999998},
    conf: 'East',
    div: 'Southeast',
    marker: {},
    icon: 'css/img/14.png'
  },
  {
    team: 'Milwaukee Bucks',
    home: 'Bradley Center',
    position: {lat: 43.0436509, lng: -87.9171991},
    conf: 'East',
    div: 'Central',
    marker: {},
    icon: 'css/img/15.png'
  },
  {
    team: 'Minnesota Timberwolves',
    home: 'Target Center',
    position: {lat: 44.9794545, lng: -93.27618989999996},
    conf: 'West',
    div: 'Northwest',
    marker: {},
    icon: 'css/img/16.png'
  },
  {
    team: 'New Orleans Pelicans',
    home: 'NewOrleans Arena',
    position: {lat: 29.9490351, lng: -90.08205679999998},
    conf: 'West',
    div: 'Southwest',
    marker: {},
    icon: 'css/img/3.png'
  },
  {
    team: 'New York Knicks',
    home: 'Madison Square Garden',
    position: {lat: 40.7505045, lng: -73.99343870000001},
    conf: 'East',
    div: 'Atlantic',
    marker: {},
    icon: 'css/img/18.png'
  },
  {
    team: 'Oklahoma City Thunder',
    home: 'Chesapeake Energy Arena',
    position: {lat: 35.4634175, lng: -97.5151176},
    conf: 'West',
    div: 'Northwest',
    marker: {},
    icon: 'css/img/25.png'
  },
  {
    team: 'Orlando Magic',
    home: 'Amway Arena',
    position: {lat: 28.5392562, lng: -81.3838599},
    conf: 'East',
    div: 'Southeast',
    marker: {},
    icon: 'css/img/19.png'
  },
  {
    team: 'Philadelphia 76ers',
    home: 'Wells Fargo Center',
    position: {lat: 39.9012015, lng: -75.17197950000002},
    conf: 'East',
    div: 'Atlantic',
    marker: {},
    icon: 'css/img/20.png'
  },
  {
    team: 'Phoenix Suns',
    home: 'U.S Airways Center',
    position: {lat: 33.4457369, lng: -112.0712006},
    conf: 'West',
    div: 'Pacific',
    marker: {},
    icon: 'css/img/21.png'
  },
  {
    team: 'Portland Trail Blazers',
    home: 'Moda Center',
    position: {lat: 45.53156509999999, lng: -122.66684229999998},
    conf: 'West',
    div: 'Northwest',
    marker: {},
    icon: 'css/img/22.png'
  },
  {
    team: 'Sacramento Kings',
    home: 'Power Balance Pavilion',
    position: {lat: 38.6490388, lng: -121.51812840000002},
    conf: 'West',
    div: 'Pacific',
    marker: {},
    icon: 'css/img/23.png'
  },
  {
    team: 'San Antonio Spurs',
    home: 'AT&T Center',
    position: {lat: 29.4270706, lng: -98.43744549999997},
    conf: 'West',
    div: 'Southwest',
    marker: {},
    icon: 'css/img/24.png'
  },
  {
    team: 'Toronto Raptors',
    home: 'Air Canada Centre',
    position: {lat: 43.6434661, lng: -79.37909890000003},
    conf: 'East',
    div: 'Atlantic',
    marker: {},
    icon: 'css/img/28.png'
  },
  {
    team: 'Utah Jazz',
    home: 'Energy Solutions',
    position: {lat: 40.7682548, lng: -111.9011016},
    conf: 'West',
    div: 'Northwest',
    marker: {},
    icon: 'css/img/26.png'
  },
  {
    team: 'Washington Wizards',
    home: 'Verizon Center',
    position: {lat: 38.89812510000001, lng: -77.02088040000001},
    conf: 'East',
    div: 'Southeast',
    marker: {},
    icon: 'css/img/27.png'
  }
];

//newList
var newsList = [{title: '', newsUrl: ''}];

//array store the teams that will be display
var displayteams = [].concat(teams);

//view model
var viewModel = function() {
  var self = this;
  self.fliterOn = ko.observable(true);
  self.windowTitle = ko.observable(bigTitle);
  self.fliter = ko.observableArray(conference);
  self.teamsList = ko.observableArray(displayteams);
  self.newsList = ko.observableArray(newsList);
  self.showNewsList = ko.observable(false);

  self.initMap = function() {
    //create a new map
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.7713024, lng: -73.9632393},
      zoom: 15
    });

    bounds = new google.maps.LatLngBounds();
    renderMarkers();
  };


  self.renderMarkers = function() {
    console.log('startRendering');
    teams.forEach(function(team, i){
      team.marker = new google.maps.Marker({
        position: team.position,
        title: team.home,
        team: team.team,
        icon: team.icon,
        id: i
      });
      //show marker
      team.marker.setMap(map);
      //onclick event
      team.marker.addListener('click', function() {
        this.setAnimation(google.maps.Animation.DROP);
        showNewsList(true);
        windowTitle(this.title);
        popInfoWindow(this);
        requestNewsList(this.team);
      });
      //set bounds
      bounds.extend(team.marker.position);
    });
    map.fitBounds(bounds);
  };

  self.clickFliter = function(clickedItem) {
    displayFlitedteams(clickedItem, teams);
    console.log(clickedItem);
  };

  self.selectHome = function(clickedItem) {
    var homeTitle = clickedItem.home;
    teamsList().forEach(function(team) {
      if (homeTitle == team.marker.title) {
        google.maps.event.trigger(team.marker, 'click');
        console.log('trigger fired');
      }
    })
  };

  self.closePopWindow = function() {
    showNewsList(false);
    newsList.removeAll();
    console.log('clear');
  };

  self.fliterDisplayToggle = function() {
    if (fliterOn() === true) {
      fliterOn(false);
    } else {
      fliterOn(true);
    }
  }
};

//generate the displayteams list
function displayFlitedteams(conf, teams) {
  teamsList.removeAll();
  teams.forEach(function(team) {
    if (team.conf == conf || conf == 'All') {
      teamsList.push(team);
      team.marker.setVisible(true);
    }else {
      team.marker.setVisible(false);
    }
  }, this);
}

//request newsList
function requestNewsList(keyWord) {
  newsList.removeAll();
  newsList.push({title: "loading...", newsUrl: ''});

  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
    'api-key': "bd9a2c95d47c48ba87a31333fcba2648",
    'q': keyWord,
    'sort': "newest"
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    console.log('done!');
    newsList.removeAll();
    for (var i = 0; i < 5; i++) {
      var newsTitle = result.response.docs[i].headline.main;
      var newsUrl = result.response.docs[i].web_url;
      newsList.push({title: newsTitle, newsUrl: newsUrl});
    }
  }).fail(function(err) {
    console.log('fail')
    newsList.removeAll();
    newsList.push({title: "loading fail, please try later", newsUrl: ''});
  });
}

//infoWindow
function popInfoWindow(marker) {
    var streetViewService = new google.maps.StreetViewService();
    var radius = 50;
    function getStreetView(data, status) {
      if (status == google.maps.StreetViewStatus.OK) {
        var nearStreetViewLocation = data.location.latLng;
        var heading = google.maps.geometry.spherical.computeHeading(
          nearStreetViewLocation, marker.position);
          // infowindow.setContent('<h1>' + marker.title + '</h1>');
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
        var t=document.createTextNode("No Street View Was Found!");
        document.getElementById('pano').appendChild(t);
      }
    }
    // Use streetview service to get the closest streetview image within
    // 50 meters of the markers position
    streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
}

function googleError() {
  alert('Loading Map Failed, please try again later!');
}

//activates knokout.js
ko.applyBindings(viewModel);
