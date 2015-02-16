angular.module('employeeFilters', [])
    .filter('genderFilter', ['genderOptions', function (genderOptions) {
        /*
         * the 1st parameter(employees) is what we retrieved from the left side of the expression...
         * ng-repeat="employee in employees | genderFilter: selectedVal.selectedGender ...
         * the 2nd paramteter(selectedGender) is what we recieved after the colon...
         * genderFilter: selectedVal.selectedGender
         */
        return function (employees, selectedGender) {
            //if we are on default -> options
            if (selectedGender.gender_val === undefined) {
                return employees;
            }
            else {
                var filtered = [];
                var i;
                for (i = 0; i < employees.length; i++) {
                    if (employees[i].gender_val === selectedGender.gender_val) {
                        filtered.push(employees[i]);
                    }
                }
                return filtered;
            }
        }
    }])
    //Very similar to genderFilter, see above^
    .filter('positionFilter', ['positionOptions', function (positionOptions) {
        return function (employees, selectedPosition) {
            if (selectedPosition.position_val === undefined) {
                return employees;
            }
            else {
                var filtered = [];
                var i;
                for (i = 0; i < employees.length; i++) {
                    if (employees[i].position_val === selectedPosition.position_val) {
                        filtered.push(employees[i]);
                    }
                }
                return filtered;
            }
        }
    }]);