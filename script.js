LEAFLET = {
    Constructor:function(){
        var map = L.map('map').setView([0, 0], 1);
        
        var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

        L.tileLayer(mbUrl, {id: 'mapbox.streets', attribution: mbAttr}).addTo(map);
        
        map.locate({setView: true, maxZoom: 5});
        function onLocationFound(e) {
            var radius = e.accuracy / 2;

            L.marker(e.latlng).addTo(map)
                .bindPopup("You are within " + radius + " meters from this point");

            L.circle(e.latlng, radius).addTo(map);
            L.heatLayer(e.latlng, radius).addTo(map);
        }

        function onLocationError(e) {
            alert(e.message);
        }
        map.on('locationfound', onLocationFound);
        map.on('locationerror', onLocationError);
    }
    
};


