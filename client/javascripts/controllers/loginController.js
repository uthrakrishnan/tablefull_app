(function(){
  angular
    .module('tableful')
    .controller('LoginController', LoginController);

  function LoginController($auth, $location){
    this.login= function(){
      $auth.login(user)
    }
    this.authenticate = function(provider){
      $auth.authenticate(provider);
      
    }
  };

  LoginController.$inject = ['$auth', '$location']
})();

