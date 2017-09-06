define(['ojs/ojcore', 'knockout'], function (oj, ko) {

    function EmployeesHelperViewModule() {
        var self = this;
        var urlEmployees = "http://localhost:3000/employees";

        self.createEmployeeModel = function () {
            var EmployeeModel = oj.Model.extend({
                urlRoot: urlEmployees,
                idAttribute: "Id"
            });

            return new EmployeeModel();
        };

        self.createEmployeesCollection = function () {
            var EmployeesCollection = oj.Collection.extend({
                url: urlEmployees,
                fetchSize: -1,
                model: this.createEmployeeModel()
            });

            return new EmployeesCollection();
        };
    }

    return new EmployeesHelperViewModule();
});