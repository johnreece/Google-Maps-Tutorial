/**
 * 
 */
window.onload = function() {
	var mapDiv = document.getElementById('map');
	var latlng = new google.maps.LatLng(39.3709,-120.2463);
	var options = {
		center: latlng,
		zoom: 4,
		mapTypeId: google.maps.MapTypeId.TERRAIN,
		// mapTypeId: google.maps.MapTypeId.ROADMAP,
		//mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControl: true
	};
	var myMap = new google.maps.Map(mapDiv,options);
	var myMarker = new google.maps.Marker({
		position: new google.maps.LatLng(39.3706,-120.2466),
		map: myMap,
		title: "Home: 12996 Oberwald Way"
	});
	var infowindow = new google.maps.InfoWindow({
		content: "Home Sweet Home!"
	});
	google.maps.event.addListener(myMarker,'click',function() {
		infowindow.open(myMap,myMarker);
	});
}
