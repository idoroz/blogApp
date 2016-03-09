(function () {
	'use strict';

var app = angular.module('blogApp');


app.controller('PostsCtrl', ['postService','$scope', '$routeParams' , function(postService, $scope, $routeParams) { 
	console.log($routeParams);
	$scope.postsPage = 0;
	$scope.nextPage = function(){
		 $scope.postsPage = 3;
	}
  	postService.then(function(data){
  		$scope.posts = data.data.posts;

  	});

}]);



}());