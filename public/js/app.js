/**
 * Created by StevenChapman on 09/10/15.
 */
var app = angular.module("tourmappers", []);
app.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('[[[').endSymbol(']]]');
});
app.controller('main', function($scope, $http){
    $scope.bookingnumber = 'ECI5190190';
    $scope.error = true;

    $scope.getSingleBooking = function(){
        $scope.error = false;

        $http({method:"POST", url:"http://localhost:8444/api/tourmappers/getbooking/"+$scope.bookingnumber}).then(function(result){
            if(result.status === 200) {
                $scope.theBooking = result.data;
            }else{
                $scope.error = true;
            }
        });
    }
})

app.filter('removeArrays', function(){
    return function (item, val) {
        console.log(item)
    };
})
