var Doctor = require('./../js/doctor.js').doctorModule;

var docInfo = function(practices) {
  practices.forEach(function(practice) {
    $('.output > tbody:last-child').append("<tr>" + "<td>" + practice.name + "</td>" + "<td>" + practice.visit_address.street + " " + practice.visit_address.city + "," + practice.visit_address.state + " " + practice.visit_address.zip + "</td>" + "<td>" + practice.phones[0].number + "</td>" + "</tr>");
  });
};

$(document).ready(function(){
  var newDoctor = new Doctor();

  $('#find-doc').submit(function(event){
    event.preventDefault();
    this.reset();
    var ailment = $('#ailment').val();
    $('.output').show()
    newDoctor.getDoctors(ailment, docInfo);
  });
});
