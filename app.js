navigator.mediaDevices.getUserMedia({video: true})
  .then(function(stream) {
    document.getElementById('camera').src = URL.createObjectURL(stream);
  }).catch(function() {
    alert('could not connect stream');
  });
function fullScreen() {
  document.getElementById('camera').requestFullscreen()
}

  document.querySelector('#theatreMode').addEventListener('click', fullScreen)