var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctors = function(ailment, docInfo, lat, lon) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + ailment + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      docInfo(result.data[0].practices, result.data[0].profile.image_url, result.data[0].practices.lat, result.data[0].practices.lon);
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
