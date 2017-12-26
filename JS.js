var link = document.querySelector('.open-modal');
var modal = document.querySelector('.write-us');
var closeModal = document.querySelector('.close-modal');
var audio = document.querySelector('audio');
var mapBlock = document.querySelector('.map-modal');
var map = document.querySelector('#map');
var mapClose = document.querySelector('.close-map');

setTimeout(function() { 
    audio.volume = 0; 
    audio.setAttribute('src', 'mp3/tuntun.mp3'); 
    audio.setAttribute('src', ''); 
    audio.volume = 0.9; 
    }, 10);

console.log('1 - переменные робят');

// МОДАЛКА

link.addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.toggle('open');
    console.log('муурр');
});

closeModal.addEventListener('click', function () {
    modal.classList.remove('open');
})


link.addEventListener('click', function() {
    audio.setAttribute('src', 'mp3/tuntun.mp3');
})

console.log('2 - модалка робит');

// КАРТА

var map;
function initMap() {
        var cord = {lat: 57.787089, lng: 40.928935};
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

  console.log('3 - мини-карта робит');

map.addEventListener('click', function(){
    mapBlock.classList.add('map-open');
    mapClose.classList.add('show');
});

  console.log('4 - большая-карта робит');

  mapClose.addEventListener('click', function(){
    mapBlock.classList.remove('map-open');
    mapClose.classList.remove('show');
});

  console.log('5 - закрыть карту робит');

  var audio = document.querySelector("audio"); 
  audio.volume=0.5;