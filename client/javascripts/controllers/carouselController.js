(function(){
  angular
    .module('tableful')
    .controller('carouselController', CarouselController)

  function CarouselController(){
    var vm=this;
    this.myInterval = 5000;
    this.noWrapSlides = false;
    this.active=0;

    var slides = this.slides = [];
    var currIndex = 0;
  }
})