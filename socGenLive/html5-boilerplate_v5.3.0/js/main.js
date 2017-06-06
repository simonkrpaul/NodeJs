var testMod = angular.module('testMod', []);

testMod.controller('testCtrl',['$scope',function($scope){
	$scope.name = "Akash";
}])