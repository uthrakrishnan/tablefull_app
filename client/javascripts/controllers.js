(function(){
  angular
    .module('tableFull')
    .controller('LoginCtrl', loginController)

  function loginController(LoginService){

  }

  LoginController.$inject = ['LoginService']
})