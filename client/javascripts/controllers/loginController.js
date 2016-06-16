(function(){
  angular
    .module('tableful')
    .controller('LoginCtrl', loginController);

  function loginController($scope, $auth){
     $scope.authenticate = function(facebook){
      $auth.authenticate(facebook);
     }
  };

  LoginController.$inject = ['$scope', '$auth']
})();