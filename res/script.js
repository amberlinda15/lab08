var myapp=angular.module("myApp",[]);
myapp
.filter("capitalize",function(){
    return function(value){
        return value[0].toString().toUpperCase() + value.substring(1,value.length)
    }
})
.filter("hideNumber",function(){
    return value => {
        let mobileNum = value.toString()
        return mobileNum.substring(0,3)+"*****"+mobileNum.substring(8,mobileNum.length)
        
    }
})
.controller("myCtrl",function($scope,$http){
    $http({
        method:"get",
        url: 'https://amberlinda15.github.io/json-files/data.json'
    })
    .then(response => {
        $scope.teammembers = response.data.teammembers
        $scope.rowlimit = 6
    });
});