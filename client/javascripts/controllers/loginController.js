(function(){
  angular
    .module('tableful')
    .controller('LoginController', LoginController);

  function LoginController($scope, $auth){
     $scope.authenticate = function(facebook){
      $auth.authenticate(facebook);
     }
  };

  LoginController.$inject = ['$scope', '$auth']
})();

