(function(){
  angular
    .module('tableFull', ['ngRoute'])
    .config(function($authProvider){
      $authProvider.facebook({
        clientId: 'FACEBOOK APP ID',
        responseType: 'token'
      });
    })
})