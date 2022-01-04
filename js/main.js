let video = document.querySelector('.video__content video');
let videoButton = document.querySelector('.video__btn');

videoButton.addEventListener('click', function playVideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
