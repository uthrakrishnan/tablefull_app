(function(){
  angular
    .module('tableful', ['ngRoute', 'satellizer', 'ui.bootstrap'])
    .config(config)


  function config($authProvider, $routeProvider, $locationProvider){
    $authProvider.httpInterceptor = function() { return true; },
    $authProvider.withCredentials = true;
    $authProvider.tokenRoot = null;
    $authProvider.baseUrl = '/';
    $authProvider.loginUrl = '/auth/login';
    $authProvider.signupUrl = '/auth/signup';
    $authProvider.unlinkUrl = '/auth/unlink/';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'satellizer';
    $authProvider.authHeader = 'Authorization';
    $authProvider.authToken = 'Bearer';
    $authProvider.storageType = 'localStorage';
    $authProvider.facebook({
      clientId: '910806639065239',
      responseType: 'token',
      name: 'facebook',
      url: '/auth/facebook',
      authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
      redirectUri: window.location.origin + '/',
      requiredUrlParams: ['display', 'scope'],
      scope: ['email','public_profile'],
      scopeDelimiter: ',',
      display: 'popup',
      type: '2.0',
      popupOptions: { width: 580, height: 400 }
    });

    $routeProvider
      //USERS VIEWS
      .when('/', {
        templateUrl: '../assets/views/home.html'

      // })
      // .when('/users/new', {
      //   // templateUrl: 'New User Form',
      //   // controller: 'NewUsersCtrl',
      //   // controllerAs: 'newUserC'
      // })
      // .when('/users/:user_id/myProfile',{
      //   // templateUrl: 'User Profile Page',
      //   // controller: 'UserProfileCtrl',
      //   // controllerAs: 'profileC'
      // })
      // .when('/users/:user_id/edit', {
      //   // templateUrl: 'Edit User Form',
      //   // controller: 'EditUsersCtrl',
      //   // controllerAs: 'editUserC'        
      // })
      // .when('/users/:user_id/my_reservations',{
      //   // templateUrl: 'myRes Table',
      //   // controller: 'MyResCtrl',
      //   // controllerAs: 'myResC'
      // })
      // //Manage VIEWS
      // .when('/manage/venue/:venue_id',{
      //   // templateUrl: 'Venue Profile Page',
      //   // controller: 'VenueCtrl',
      //   // controllerAs: 'VenueC'        
      // })
      // .when('manage/venue:/:venue_id/edit', {
      //   // templateUrl: ' Edit Venue Profile Page',
      //   // controller: 'EditVenueCtrl',
      //   // controllerAs: 'editVenueC'
      // })
      // .when('manage/venue/:venue_id/events', {
      //   templateUrl: 'Events Page',
      //   controller: 'EventsCtrl',
      //   controllerAs: 'eventsC'
      // })
      // .when('manage/venue/:venue_id/events/new', {
      //   // templateUrl: '',
      //   // controller: 'AddEventCtrl',
      //   // controllerAs: 'addEventC'
      // })
      // .when('manage/venue/:venue_id/events/:event_id/edit', {
      //   // templateUrl: '',
      //   // controller: 'EditEventCtrl',
      //   // controllerAs: 'editEventC'
      // })
      // .when('manage/venue/:venue_id/calendar',{
      //   // templateUrl: '',
      //   // controller: '',
      //   // controllerAs: ''
      // })
      // .when('manage/venue/:venue_id/calendar/:date',{
      //   // templateUrl: '',
      //   // controller: 'EditCalendarCtrl',
      //   // controllerAs: 'editCalendarC'
      // })
      // //VENUE VIEWS
      // .when('/venues',{
      //   templateUrl:'Venues Index Page',
      //   controller: 'VenuesCtrl',
      //   controllerAs: 'VenuesC'
      // })
      // .when('/venues/:venue_id', {
      //   templateUrl: 'Venue Description Page',
      //   controller:'GetVenueCtrl'
      // })
      // .when('/venues/:venue_id/calendar', {
      //   templateUrl: '',
      //   controller: '',
      //   controllerAs: ''
      // })
      // .when('/venues/venue_id/calendar/:date', {
      //   templateUrl: '',
      //   controller: '',
      //   controllerAs: ''
      // })
      // //RESERVATIONS VIEWS
      // .when('/reservations', {
      //   templateUrl: '',
      //   controller: '',
      //   controllerAs: ''
      // })
      // .when('/reservations/calendar', {
      //   templateUrl: '',
      //   controller: '',
      //   controllerAs: ''
      });
    $locationProvider.html5Mode(true);
  }
  config.$inject = ['$authProvider', '$routeProvider', '$locationProvider']

})();