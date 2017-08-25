
var url = "https://source.unsplash.com/random/200x300"
//console.log(JSON.stringify(data));

var request = require('request');

// request({
//     url: "http://192.168.0.4:3000/api/golfclub",
//     method: "POST",
//     json: true,
//     body: data[1]
// }, function(error, response, body) {
//     console.log(response);
//     console.log("err : " + error);
// });


    request({
        url: url,
        method: "GET",
        json: true
    }, function(error, response, body) {
		if (error) console.log("err : " + error);
        console.log(response);
    });