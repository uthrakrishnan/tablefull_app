(function(){
  angular 
    .module('tableful')
    .component('tfCarousel', {
      bindings: {},
      controller: 'CarouselController',
      controllerAs: 'carousel',
      templateUrl: '../assets/views/general/carousel.html',
      transclude:true,
      replace: true
    })
})