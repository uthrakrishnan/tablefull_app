(function(){
  angular
    .module('tableful')
    .component('fbLoginBtn', {
      bindings:{},
      template: "<button id='loginBtn' ng-click='login.authenticate()'>Sign in with Facebook</button>",
      controller: 'LoginController',
      controllerAs: 'login',
      transclude: true,
      replace: true,
    })
})();