(function(){
  angular
    .module('tableful')
    .controller('carouselController', CarouselController)

  function CarouselController(){
    var vm=this;
    vm.myInterval = 3000;
    vm.noWrapSlides = false;
    vm.active=0;
    vm.slides=[
      {id:0, image: 'assets/images/lasers.jpg', text: 'TableFul'},
      {id:1, image: 'assets/images/club1.JPG', text: 'for a great night out'},
      {id:2, image: 'assets/images/club2.jpg', text: 'friends new and old'},
      {id:3, image: 'assets/images/bottles1.jpg', text: 'sign in with Facebook' }
    ]
    var slides = vm.slides
    var currIndex = 0;
  
  }
})()