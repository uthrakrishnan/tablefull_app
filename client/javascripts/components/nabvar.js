(function(){
  angular
    .module('tableful')
    .component('tfNavbar',{
      bindings: {
        
      },
      controller: 'NavbarController',
      controllerAs: 'navbar',
      templateUrl: '../assets/views/general/navbar.html',
      transclude: true,
      replace: true,
    })
})();