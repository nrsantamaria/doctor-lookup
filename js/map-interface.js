var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var epicodus = {lat: 45.5206297, lng: -122.6774804};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: epicodus,
    styles: [
      {
        stylers: [
          { hue: "#94D9E2" },
          { saturation: -50 }
        ]
      }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { lightness: 100 },
          { visibility: "simplified" }
        ]
      }, {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          { hue: "#76FF92" },
          { saturation: +80 }
        ]
      }, {
        featureType: "transit",
        elementType: "labels",
        stylers: [
          { hue: "#ff0066" },
          { saturation: +80 }
        ]
      }
    ]
  });

  var marker = new google.maps.Marker({
    position: epicodus,
    map: map,
    icon: "img/epicodus-ico.png"
  });
});
