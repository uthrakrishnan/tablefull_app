(function(){
  angular
    .module('tableful')
    .controller('LoginController', LoginController);

  function LoginController($auth){
     this.authenticate = function(facebook){
      $auth.authenticate(facebook);
     }
  };

  LoginController.$inject = ['$auth']
})();

