angular.module('employee.Services', [])
    .factory('employeeHR', ['genderOptions', 'positionOptions', function (genderOptions, positionOptions) {
        return {
            //this should be done using a http request / AJAX call to the server in the backend.
            //for simplicity, the data is stored in application memory.
            getEmployees: function () {
                return [
                    {
                        gender_name: "Male", gender_val: genderOptions.MALE,
                        name: "Burton",
                        position_name: "Backend Developer", position_val: positionOptions.BACKDEV
                    },
                    {
                        gender_name: "Male", gender_val: genderOptions.MALE,
                        name: "Zach",
                        position_name: "CEO", position_val: positionOptions.CEO
                    },
                    {
                        gender_name: "Female", gender_val: genderOptions.FEMALE,
                        name: "Nikki", position_name: "Marketing Director",
                        position_val: positionOptions.MARKETDIR
                    },
                ];
            }
        };
    }]);