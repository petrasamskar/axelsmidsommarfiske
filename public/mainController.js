function mainController($scope, $http, $location) {

    // get all years and show them
     $http.get('/api/years')
        .success(function(data) {
           // $scope.numberOfYears = 7;
            $scope.years = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });


    // get participants for a specific year
    $scope.getParticipantsForYear = function(year) {
        $http.get('/api/participants?year=' + year)
            .success(function(data) {
                $scope.participants = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
        });

    }

    //get group image for a specific year
    $scope.getImageForYear= function(year) {
        var el = document.getElementById('img'+year);
        $http.get('/fishingimages/group_' + year + '.JPG')
            .success(function(data) {
                el.src='/fishingimages/group_' + year + '.JPG';
            })
            .error(function(data) {
                el.src='/images/no_image.jpg';
        });
    }


    $scope.isActive = function (viewLocation) {
     var active = (viewLocation === $location.url());
     return active;
    };

    $scope.deleteScore = function(participant) {
        
        $http.delete("/api/participant/" + participant._id).then(function (response) {
            return response.data;
        });
        //här vill man uppdatera listan också HUR??
        //$participants.splice(participant._id, 1);
        

    };
    

}