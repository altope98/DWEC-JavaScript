/*if (navigator.geolocation) {
    navigator.geolocation.watchPosition(posicion);
    function posicion(position) {
        console.log('Latitude : ' + position.coords.latitude);
        console.log('Longitude: ' + position.coords.longitude);
        var lat1 = (position.coords.latitude);
        var lon1 = (position.coords.longitude);
        var lat2 = (40.4165000);
        var lon2 = (-3.7025600);

        var mymap = L.map('mapid').setView([lat1, lon1], 13);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox.streets'
        }).addTo(mymap);
        L.marker([lat1, lon1]).addTo(mymap)
            .bindPopup("<b>Estas aqui</b><br />Granada").openPopup();
        L.marker([lat2, lon2]).addTo(mymap).bindPopup("<b>Estas aqui</b><br/> Madrid").openPopup();
        
    }

    
}*/

if (navigator.geolocation) {
    var lat2 = 40.4165000;
    var lon2 = -3.7025600;

    function initMap() {

        navigator.geolocation.getCurrentPosition(posicion);
        function posicion(position) {

            var lat1 = position.coords.latitude;
            var lon1 = position.coords.longitude;
            var pos = { lat: lat1, lng: lon1 };
            var pos2 = { lat: lat2, lng: lon2 };

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                center: pos,
                mapTypeId: 'hybrid'
            });

            var marker = new google.maps.Marker({ position: pos, map: map });
            var marker2 = new google.maps.Marker({ position: pos2, map: map });

            var flightPlanCoordinates = [
                { lat: lat1, lng: lon1 },
                { lat: lat2, lng: lon2 }
            ];

            var flightPath = new google.maps.Polyline({
                path: flightPlanCoordinates,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            flightPath.setMap(map);

            var service = new google.maps.DistanceMatrixService();
            service.getDistanceMatrix(
                {
                    origins: [pos],
                    destinations: [pos2],
                    travelMode: 'DRIVING',
                    //transitOptions: TransitOptions,
                    //drivingOptions: DrivingOptions,
                    //unitSystem: UnitSystem,
                    avoidHighways: false,
                    avoidTolls: false,
                }, callback);

            function callback(response, status) {
                var dist;
                if (status == "OK") {
                    dist = response.rows[0].elements[0].distance.text;
                    console.log(dist);
                } else {
                    alert("Error: " + status);
                }
            }

            var citymap = {
                madrid: {
                    center: { lat: 40.4165000, lng: -3.7025600 },
                    population: 10000
                }
            };

            for (var city in citymap) {
                var cityCircle = new google.maps.Circle({
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#FF0000',
                    fillOpacity: 0.35,
                    map: map,
                    center: citymap[city].center,
                    radius: Math.sqrt(citymap[city].population) * 100
                });
            }
        }
    }
}