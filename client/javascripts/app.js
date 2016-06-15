(function(){
  angular
    .module('tableful', ['ngRoute', 'satellizer'])
    .config(config)

  function config($authProvider, $routePorvider, $locationProvider){
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
      clientId: process.env.FACEBOOK_KEY,
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

    $routePorvider
      .when('/users', {
        templateUrl: '../',
        controller: 'UsersCtrl',
        controllerAs: 'usersC'
      })
      .when('/users/new', {
        templateUrl: 'New User Form',
        controller: 'NewUsersCtrl',
        controllerAs: 'newUserC'
      })
      .when('/users/:id/edit', {
        templateUrl: 'Edit User Form',
        controller: 'EditUsersCtrl',
        controllerAs: 'editUserC'        
      })
      .when('/manage/venue/:venue_id',{
        templateUrl: 'Venue Profile Page',
        controller: 'VenueCtrl',
        controllerAs: 'VenueC'        
      })
      .when('manage/venue:/:venue_id/edit', {
        templateUrl: ' Edit Venue Profile Page',
        controller: 'EditVenueCtrl',
        controllerAs: 'editVenueC'
      })
      .when('manage/venue/:venue_id/events', {
        templateUrl: 'Events Page',
        controller: 'EventsCtrl',
        controllerAs: 'eventsC'
      })
      .when('manage/venue/:venue_id/events/new', {
        templateUrl: '',
        controller: 'AddEventCtrl',
        controllerAs: 'addEventC'
      })
      .when('manage/venue/:venue_id/events/:event_id/edit', {
        templateUrl: '',
        controller: 'EditEventCtrl',
        controllerAs: 'editEventC'
      })
      .when('manage/venue/:venue_id/calendar/:calendar_date',{
        templateUrl: '',
        controller: 'EditCalendarCtrl',
        controllerAs: 'editCalendarC'
      })
      .when()
  })
})