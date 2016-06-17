(function(){
  angular
    .module('tableful')
    .component('fbLoginBtn', {
      bindings:{},
      template: '<button ng-click="navbar.facebookLogin()">Sign in with Facebook</button>',
      controller: 'LoginController',
      controllerAs: 'login',
      transclude: true,
      replace: true,
    })
})