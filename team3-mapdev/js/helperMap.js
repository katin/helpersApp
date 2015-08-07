/**
 * Create and Display the helper map
 *
 * @class MapModule
 * @author #WeLearnJS Team
 *
 */

mapModule = {

    /* local variables */
    _debug: false,


    /**
     * Display Map
     *
     */

    displayMap: function(tweetInfo) {
        /* ... */

        document.getElementById('message').innerHTML += '<br/><span class="status-message">mapModule says hello.</span>';


        var myLatLng = new google.maps.LatLng(tweetInfo.lat, tweetInfo.lng);
        var map = new google.maps.Map(document.getElementById('mapCanvas'), {
            zoom: 2,
            center: myLatLng
        });

        var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading">@'+tweetInfo.fromName+'</h1>' +
            '<div id="bodyContent">' +
            '<p>'+tweetInfo.message+'</p>' +
            '<p>From:'+tweetInfo.aboutName+'</p>' +
            '</div>' +
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hello World!'
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });


    }

};