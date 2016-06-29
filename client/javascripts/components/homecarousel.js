(function(){
  angular 
    .module('tableful')
    .component('tfCarousel', {
      bindings: {

      },
      controller: 'carouselController',
      controllerAs: 'carousel',
      templateUrl: '../assets/views/general/carousel.html',
      transclude:true,
      replace: true
    })
})();