var link = document.querySelector('.open-modal');
var modal = document.querySelector('.write-us');
var closeModal = document.querySelector('.close-modal');
var mapBlock = document.querySelector('.map-modal');
var map = document.querySelector('#map');
var mapClose = document.querySelector('.close-map');

link.addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.toggle('open');
});

closeModal.addEventListener('click', function() {
    modal.classList.remove('open');
});

var map;
function initMap() {
        var cord = {lat: 57.7891203, lng: 40.9395435};
        var balun = 'https://psv4.userapi.com/c816727/u151405344/docs/426efa52037a/balun.png?extra=gUpgZ33COkvaXFEh_FkRvO4nvXhv8f20ZWTOHbzPHUWNRPKbLP4BOoSBKj9hqZlAzr4AAA5O6TvlhAfzuOuiRvoKr53lD9vIWvFMbYf94JjUJPD87uhuNLy9L_I57Id_0eS0WIajdQ'
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: cord
    });
    var marker = new google.maps.Marker({
      position: cord,
      map: map,
      icon: balun
    });
};

map.addEventListener('click', function(){
    mapBlock.classList.add('map-open');
    mapClose.classList.add('show');
});

  mapClose.addEventListener('click', function(){
    mapBlock.classList.remove('map-open');
    mapClose.classList.remove('show');
});
