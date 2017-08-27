// POST request : to save data.json file into MongoDB
var data = require('./notification.json');

//console.log(JSON.stringify(data));

var request = require('request');

data.map(function(item) {
    request({
        url: "http://localhost:3000/api/usernotification",
        method: "POST",
        json: true,
        body: item
    }, function(error, response, body) {
        if (error) console.log("err : " + error);
        console.log(response);
    });
});
