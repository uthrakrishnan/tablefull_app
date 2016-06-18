(function(){
  angular
    .module('tableful')
    .controller('NavbarController', NavbarController)

  NavbarController.$inject = ['$scope','LoginService']

  function NavbarController(){
    const vm = this;
  }
})();