document.addEventListener("DOMContentLoaded", function () {
  // Get the elements using querySelector
  let video = document.querySelector(".myVideo");
  let playButton = document.querySelector(".playButton");
  let pauseButton = document.querySelector(".pauseButton");
  let muteButton = document.querySelector(".muteButton");
  let volumeRange = document.querySelector(".volumeRange");
  let currentTimeDisplay = document.querySelector(".currentTime");
  let durationDisplay = document.querySelector(".duration");
  let seekRange = document.querySelector(".seekRange");
  let speedRange = document.querySelector(".speedRange");
  let speedText = document.querySelector(".speedText");
  let fullScreenButton = document.querySelector(".fullScreenButton");

  // Add event listeners to individual elements

  //To play the video
  playButton.addEventListener("click", function () {
    video.play();
  });

  //To pause the video
  pauseButton.addEventListener("click", function () {
    video.pause();
  });

  //To mute the volume or unmute it
  muteButton.addEventListener("click", function () {
    if (video.muted) {
      video.muted = false;
      muteButton.textContent = "Mute";
    } else {
      video.muted = true;
      muteButton.textContent = "Unmute";
    }
  });

  //To change the volume range
  volumeRange.addEventListener("input", function () {
    video.volume = volumeRange.value;
  });

  //To update time according to the videos current time
  video.addEventListener("timeupdate", function () {
    currentTimeDisplay.textContent = formatTime(video.currentTime);
    seekRange.max = video.duration;
  });

  //To wait to load all the meta data of the video and the whole browser
  video.addEventListener("loadedmetadata", function () {
    durationDisplay.textContent = formatTime(video.duration);
    seekRange.max = video.duration;
  });

  // To put the videos current time to the seek range bar
  seekRange.addEventListener("input", function () {
    video.currentTime = seekRange.value;
  });

  //To Adjust the playback spped
  speedRange.addEventListener("input", function () {
    video.playbackRate = speedRange.value;
  });

  //To adjust the spped range text according to the speed range
  speedRange.addEventListener("input", function () {
    const speed = parseFloat(speedRange.value);
    video.playbackRate = speed;
    speedText.textContent = `${speed}x`;
  });

  // Full screen Api
  fullScreenButton.addEventListener("click", function () {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  });

  //function to calculate minutes and seconds of the video
  function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = Math.floor(seconds % 60);
    remainingSeconds =
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
    return minutes + ":" + remainingSeconds;
  }
});
