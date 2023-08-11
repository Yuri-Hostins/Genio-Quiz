document.addEventListener('DOMContentLoaded', function () {
  const videoSrc = 'assets/video/videoplayback.mp4'; // Caminho do vídeo
  const videoContainer = document.getElementById('videoContainer');

  // Cria o elemento de vídeo dinamicamente
  const videoPlayer = document.createElement('video');
  videoPlayer.src = videoSrc;
  videoPlayer.autoplay = true;
  videoPlayer.loop = true;
  videoPlayer.muted = true;

  // Adiciona o vídeo ao contêiner
  videoContainer.appendChild(videoPlayer);

  // Define a posição de reprodução do vídeo armazenada no sessionStorage (se disponível)
  const videoPlaybackPosition = sessionStorage.getItem('videoPlaybackPosition');
  if (videoPlaybackPosition) {
    videoPlayer.currentTime = parseFloat(videoPlaybackPosition);
  }

  // Salva a posição de reprodução atual no sessionStorage ao sair da página
  window.addEventListener('beforeunload', function () {
    sessionStorage.setItem('videoPlaybackPosition', videoPlayer.currentTime.toString());
  });
});