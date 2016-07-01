(function(){
  angular
    .module('tableful')
    .controller('SignUpController', SignUpController);


  function SignUpController($auth, $location){
    this.signup = function(){
      $auth.signup(this.user)
        .then(function(response){
          $auth.setToken(response);
          $location.path('/manage')
        })
        .catch(function(err){
          console.log(err)
        })
    }
  }
})();

