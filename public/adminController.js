function adminController($scope, $http) {
	
	$scope.formData = {};
//	$scope.processForm = function() {

	$scope.processForm = function(formData) {
		 $http({
		  method  : 'POST',
		  url     : '/api/adscores',
		  data    : $.param($scope.formData),  // pass in data as strings
		  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
		 })
		  .success(function(data) {
		    console.log(data);

		    //reset formdata
		    resetFormData();

		  });
    };

    function resetFormData() {
    	$scope.formData = {};
    }
    
}