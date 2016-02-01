function imagesController($scope, $http) {
    // when landing on the page, get all years and show them
     $http.get('/api/images')
        .success(function(data) {
            $scope.images = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

}