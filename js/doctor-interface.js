var Doctor = require('./../js/doctor.js').doctorModule;

var docInfo = function(practices, photo, lat, lon) {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 45.5206297, lng: -122.6774804},
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
  practices.forEach(function(practice) {
    var infowindow = new google.maps.InfoWindow({
    content: practice.name
    });
    var marker = new google.maps.Marker({
      position: {lat: practice.lat, lng: practice.lon},
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      title: practice.name,
      icon: "img/medical_sm.png"
    });
    marker.addListener('click', function() {
    infowindow.open(map, marker);
    });
    $('.output > tbody:last-child').append("<tr>" + "<td>" + practice.name + "</td>" + "<td>" + practice.visit_address.street + " " + practice.visit_address.city + "," + practice.visit_address.state + " " + practice.visit_address.zip + "</td>" + "<td>" + practice.phones[0].number + "</td>" + "<td>" + "<img src='" + photo + "'>" + "</td>" + "</tr>");
  });
};

$(document).ready(function(){
  var newDoctor = new Doctor();

  $('#find-doc').submit(function(event){
    event.preventDefault();
    this.reset();
    var ailment = $('#ailment').val();
    $('.output').show();
    $('#refresh').show();
    newDoctor.getDoctors(ailment, docInfo);
  });
  $('#refresh').click(function() {
    location.reload();
  });
});
