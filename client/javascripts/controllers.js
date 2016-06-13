(function(){
  angular
    .module('tableful')
    .controller('LoginCtrl', loginController)

  function loginController(LoginService){

  }

  LoginController.$inject = ['LoginService']
})