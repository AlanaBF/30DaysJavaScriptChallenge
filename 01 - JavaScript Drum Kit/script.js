document.addEventListener('transitionend', function(e) {
    if (e.target.classList.contains('key') && e.propertyName === 'transform') {
      e.target.classList.remove('playing');
    }
  });
  
  document.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
    if (!audio) return;
  
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  });

