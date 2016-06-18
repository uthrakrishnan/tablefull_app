(function(){
  angular
    .module('tableful')
    .service('LoginService', LoginService)

  function LoginService($auth){
    this.authenticate = function(facebook){
      $auth.authenticate(facebook);
    }
  }

  LoginService.$inject = ['$auth'];
})();