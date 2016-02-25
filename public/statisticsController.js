function statisticsController($scope, $http) {
	$scope.winners = {}
    // when landing on the page, get all years and show them
     $http.get('/api/winners')
        .success(function(data) {
            $scope.winners = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

}