(function(){
  angular
    .module('tableful')
    .controller('LogoutController', LogoutController)

  function LogoutController ($location, $auth, toastr) {
    if (!$auth.isAuthenticated()) { return; }
    $auth.logout()
      .then(function() {
        $location.path('/manage');
      });
  };
  
}());