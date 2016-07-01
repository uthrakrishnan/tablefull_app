(function(){
  angular
    .module('tableful')
    .component('tfUserNavbar',{
      bindings: {},
      templateUrl: '../assets/views/general/navbar.html',
      controller: 'UserNavController',
      controllerAs: 'usernav',
      transclude: true,
      replace: true,
    })
})();