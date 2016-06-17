(function(){
  angular
    .module('tableful')
    .controller('NavbarController', NavbarController)

  NavbarController.$inject = ['$scope','LoginService']

  function NavbarController($scope, LoginService){
    const vm = this;
    vm.facebookLogin = facebookLogin

    function facebookLogin(LoginService){
      return LoginService.authenticate();
    }
  }
})