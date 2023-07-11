window.addEventListener('load', function () {
  var preloaderInner = document.querySelector('#preloader .inner');
  var preloader = document.querySelector('#preloader');
  var body = document.querySelector('body');

  setTimeout(function () {
    preloaderInner.style.opacity = '0';

    setTimeout(function () {
      preloader.style.transition = 'opacity 0.3s ease';
      preloader.style.opacity = '0';

      setTimeout(function () {
        preloader.style.display = 'none';
        body.style.overflow = 'visible';

        // Adicionar animação suave ao corpo da página
        body.style.transition = 'opacity 0.3s ease';
        body.style.opacity = '1';
      }, 300);
    }, 100);
  }, 2000);
});
