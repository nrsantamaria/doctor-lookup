var Doctor = require('./../js/doctor.js').doctorModule;

var docInfo = function(practices) {
  practices.forEach(function(practice) {
    $('.output').append("<li>" + practice.name + " " + "</li>");
  });
};

$(document).ready(function(){
  var newDoctor = new Doctor();

  $('#find-doc').submit(function(event){
    event.preventDefault();
    // $('.output').text("");

    var ailment = $('#ailment').val();
    console.log(ailment);
    newDoctor.getDoctors(ailment, docInfo);
  });
});
