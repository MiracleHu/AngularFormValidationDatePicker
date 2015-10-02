// app.js
// create angular app
var validationApp = angular.module('validationApp', ['ui.bootstrap']);

// create angular controller
validationApp.controller('mainController', function($scope) {
	// initial the input object to {} and input value to undefined
	$scope.user={};
	$scope.user.username = undefined;
	$scope.user.email = undefined;
	$scope.user.password1 = undefined;
	$scope.user.password2 = undefined;

	$scope.reset = function(){
		var resetValue = confirm("Will you reset all the input?");
		if(resetValue){
			//When the form input is invalid, we need to use below function to clean the input field
			$scope.userForm.$setPristine();
			$scope.user.username = '';
			$scope.user.email = '';
			$scope.user.password1 = '';
			$scope.user.password2 = '';
			$scope.dt = null;
		}
	};

  // function to submit the form after all validation has occurred            
  $scope.submitForm = function(isValid) {
  	$scope.submitted = true;
    // check to make sure the form is completely valid
    if (isValid) {
      alert('our form is amazing');
    }
  };

	//date picker
	$scope.today = function() {
    $scope.dt = new Date();
	};

  $scope.dt=null;

  $scope.clear = function () {
    $scope.dt = null;
  };
  
  $scope.open = function($event) {
    $scope.status.opened = true;
    $scope.initDate =new Date('1990,01,01');
  };

  $scope.maxDate = new Date(2001, 10, 1);
  $scope.minDate = new Date(1865, 10, 1);
	$scope.formats = ['dd-MMMM-yyyy', 'MM/dd/yyyy', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[1];
  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.status = {
    opened: false
  };


});