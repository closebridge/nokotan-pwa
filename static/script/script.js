

function videoPlaybackHandler(state) {
    const videoNest = document.getElementById('video')
    videoNest.volume = 0.7

    if (state) {
        videoNest.play();
        videoNest.style.opacity = 1;
        videoNest.loop = true
    } else {
        videoNest.loop = false;
        videoNest.pause();
        videoNest.style.opacity = 0
    }

}