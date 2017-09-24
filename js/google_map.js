function initMap() {
  var latlng = {lat: 47.918660, lng: 106.901036};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: latlng
  });
  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    icon: 'images/loc.png'
  });
}