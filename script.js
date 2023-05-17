window.onload = function() {
    const buttons = document.getElementsByClassName('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.transform = 'translateX(50%)';
    }
  };
  
  const container = document.querySelector('.container');
  const playButton = document.getElementById('playButton');
  const audioBar = document.getElementById('audioBar');
  
  container.addEventListener('mouseenter', function() {
    container.classList.remove('dark');
  });
  
  container.addEventListener('mouseleave', function() {
    container.classList.add('dark');
  });
  
  container.addEventListener('click', function() {
    container.classList.add('clicked');
    playButton.style.transform = 'translateY(-50%)';
  });
  
  const audioPlayer = document.getElementById('audioPlayer');
  
  playButton.addEventListener('click', function() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playButton.classList.add('active');
    } else {
      audioPlayer.pause();
      playButton.classList.remove('active');
    }
  });
  
  audioPlayer.addEventListener('timeupdate', function() {
    const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    audioBar.style.width = percentage + '%';
  });
  