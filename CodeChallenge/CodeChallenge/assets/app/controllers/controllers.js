angular.module('controllers', [])
    .controller('ChoiceCtrl', ['$scope', 'genderOptions', 'positionOptions', 'employeeHR',
        function ($scope, genderOptions, positionOptions, employeeHR) {
        
            //employees seen on the Table are retrieved through the service, /assets/app/services/employeeServices.js
            $scope.employees = employeeHR.getEmployees();

            //constants are used as values instead of the string itself, see /assets/app/constants/constants.js
            $scope.genderOption = [
                { optName: 'Option', gender_val: undefined },
                { optName: 'Male', gender_val: genderOptions.MALE },
                { optName: 'Female', gender_val: genderOptions.FEMALE }
            ];

            $scope.positionOption = [
                { optName: 'Option', position_val: undefined },
                { optName: 'Backend Developer', position_val: positionOptions.BACKDEV },
                { optName: 'CEO', position_val: positionOptions.CEO },
                { optName: 'Marketing Director', position_val: positionOptions.MARKETDIR }
            ];

            //this holds the selected value from the dropdown to pass into the the FILTERS in the view, /assets/app/templates/choices.html
            //the default value is Option, see above^
            $scope.selectedVal = {
                selectedGender: $scope.genderOption[0],
                selectedPosition: $scope.positionOption[0]
            }

    }]);