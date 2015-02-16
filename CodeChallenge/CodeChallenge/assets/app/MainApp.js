angular.module('mainApp',
    [
        //modules included in master module for easy dependency injection
        'controllers',
        'employee.Services',
        'employeeFilters',
        'ngRoute',
        'constants'
    ])
    //set up default 'homepage'
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                //links up the View
                templateUrl: '/assets/app/templates/choices.html',
                //links up the controller in /assets/app/controllers/controllers.js
                controller: 'ChoiceCtrl'
            })
    }]);