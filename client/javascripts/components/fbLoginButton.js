(function(){
  angular
    .module('tableful')
    .component('fbLoginBtn', {
      bindings:{},
      templateUrl: "/assets/views/general/fbLoginBtn.html",
      controller: 'LoginController',
      controllerAs: 'login',
      transclude: true,
      replace: true,
    })
})();