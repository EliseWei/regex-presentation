/* Sample files: Intermediate JS */
/* Homework Solution */

// Base URL for API calls for this script. lat & lon query params have been removed.
var flickrUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=37ebd5e264deebc27837c880a19f86ab&per_page=10&format=json&nojsoncallback=1';

// What to do with fetched geo data.
var onGeoComplete = function(geoloc) {
    if (geoloc && geoloc.coords) {
        var coordsObj = {
            'latitude': geoloc.coords.latitude,
            'longitude': geoloc.coords.longitude
        };

        // Build the API call URL and make the AJAX request.
        var ajaxUrl = buildLatLonParams(flickrUrl, coordsObj);
        newAjaxRequest(ajaxUrl);
        
        // Convert to JSON and write to a cookie.
        var coordsJSON = JSON.stringify(coordsObj);
        document.cookie = 'coords=' + coordsJSON + ';max-age=' + 60*20;
        console.log('coords cookie set');
    } else {
        console.log('no geo coordinates');
    }
};

// What to do on successful AJAX response.
var onAjaxSuccess = function(response) {
    var responseObj = response && JSON.parse(response);
    // Get the array of photos out of the response.
    var photoArray = responseObj && responseObj.photos && responseObj.photos.photo;

    // Find the content element of the HTML, or fall back to using the body.
    var content = document.getElementById('content') || document.getElementByTagName('body')[0];

    // For each photo in the array, assemble the src URL based on the rules provided by Flickr.
    for (i = 0, l = photoArray.length; i < l; i++) {
        var photo = photoArray[i];
        var imgSrc = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_n.jpg";
        
        // Build a new DOM element and insert it.
        var newImg = document.createElement('img');
        newImg.alt = photo.title;
        newImg.src = imgSrc;
        content.appendChild(newImg);
    }
};

// Consolidated the AJAX request and response binding into one function.
// Could be refactored better, but is nicely readable.
var newAjaxRequest = function(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send(null);
    console.log('opening new request');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                onAjaxSuccess(xhr.responseText);
            } else {
                console.log('Error: ' + xhr.status);
            }
        }
    };
};

// Retrieve a cookie by name.
var getCookie = function(name) {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return value && value[1] || '';
};

// Helper function to assemble API call from base URL & coords object.
var buildLatLonParams = function(baseUrl, coordsObj) {
    if(coordsObj.latitude && coordsObj.longitude) {
        return baseUrl + '&lat=' + coordsObj.latitude + '&lon=' + coordsObj.longitude;
    }
};

// Kick off the process.
var coordsJSON = getCookie('coords');
if (coordsJSON) {
    console.log('cookie found:', coordsJSON);
    var ajaxUrl = buildLatLonParams(flickrUrl, JSON.parse(coordsJSON));
    newAjaxRequest(ajaxUrl);
} else {
    console.log('fetching coords');
    navigator.geolocation.getCurrentPosition(onGeoComplete);
}

