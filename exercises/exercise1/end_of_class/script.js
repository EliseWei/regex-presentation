/* Sample files: Intermediate JS */
/* Working exercise */

// What to do with fetched geo data.
var onGeoComplete = function(geoloc) {
    if (geoloc && geoloc.coords) {
        var coordsObj = {
            'latitude': geoloc.coords.latitude,
            'longitude': geoloc.coords.longitude
        };

        // Convert to JSON and write to a cookie.
        var coordsJSON = JSON.stringify(coordsObj);
        document.cookie = 'coords=' + coordsJSON + ';max-age=' + 60*20;
        console.log('coords cookie set');
    } else {
        console.log('no geo coordinates');
    }
};
navigator.geolocation.getCurrentPosition(onGeoComplete);

// What to do on successful AJAX response.
var onSuccess = function(response) {
    var responseObj = response && JSON.parse(response);
    console.log(responseObj && responseObj.name);
};

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://jsonplaceholder.typicode.com/users/2/');
xhr.send(null);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            onSuccess(xhr.responseText);
        } else {
            console.log('Error: ' + xhr.status);
        }
    }
};

// Retrieve a cookie by name.
var getCookie = function(name) {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return value && value[1] || '';
}
