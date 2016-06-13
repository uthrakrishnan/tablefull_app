(function(){
  angular
    .module('tableFull')
    .service('LoginService', LoginService)

  function LoginService($scope, $auth){
    $scope.authenticate = function(facebook){
      $auth.authenticate(facebook);
    }
  }

  LoginService.$inject = ['$scope', '$auth'];
})();