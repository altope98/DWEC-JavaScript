var video = document.querySelector("#video");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({audio: true, video: true})
  .then(function(stream) {
    video.srcObject = stream;
  }).catch(function(error){
    console.log(error);
  });
}