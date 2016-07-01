(function(){
  angular
    .module('tableful')
    .factory('UserAccount', function($http) {
      return {
        getProfile: function() {
          return $http.get('/users/:user_id');
        },
        updateProfile: function(profileData) {
          return $http.put('/users/:user_id', profileData);
        }
      };
    });
  
})();
