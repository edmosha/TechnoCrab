var link = document.querySelector('.open-modal');
var modal = document.querySelector('.write-us');
var closeModal = document.querySelector('.close-modal');

link.addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.toggle('open');
    console.log('муурр');
});

closeModal.addEventListener('click', function () {
    modal.classList.remove('open');
})

function play() {
    document.getElementById("mp3").innerHTML = "<audio src=\"mp3/tuntun.mp3\" autoplay></audio>"
}

