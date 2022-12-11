window.addEventListener('load', function(){
  new Glider(document.querySelector('.c__lista'), {
    slidesToShow: 1,
    dots: '.carousel__indicadores',
    arrows: {
      prev: '.carousel__anterior',
      next: '.carousel__posterior'
    },
    responsive: [
      {
        // telas maiores que >= 450px
        breakpoint: 450,
        settings: {
          // ajuste ao viewport
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },{
        // telas maiores que >= 800px
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  });
});