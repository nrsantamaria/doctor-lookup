var Doctor = require('./../js/doctor.js').doctorModule;

var docInfo = function(name, doctors) {
  doctors.forEach(function(doctor) {
    $('.output').append("<li>" + doctor.name + " " + "</li>");
  });
};

$(document).ready(function(){
  var newDoctor = new Doctor();

  $('#find-doc').submit(function(event){
    event.preventDefault();
    $('.output').text("");
    var ailment = $('#ailment').val();
console.log(ailment)
    newDoctor.getDoctors(ailment, docInfo);
  });
});
