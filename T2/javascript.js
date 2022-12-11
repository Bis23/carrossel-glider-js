window.addEventListener('load', function(){
  new Glider(document.querySelector('.c__lista'), {
    slidesToShow: 3,
    dots: '.carousel__indicadores',
    draggable: true,
    arrows: {
      prev: '.carousel__anterior',
      next: '.carousel__posterior'
    }
  });
});