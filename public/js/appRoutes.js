angular.module('appRoutes', [])
  .config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'homeController',
          controllerAs: 'vm'
        })
        .when('/about',{
          templateUrl: 'views/about.html'
        })

      $locationProvider.html5Mode(true);

    }
  ]);