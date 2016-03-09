(function () {
	'use strict';

	var app = angular.module('blogApp', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider
		.when('/', {
			redirectTo: '/posts'
		})
		
		.when('/posts', {
			templateUrl: 'app/posts/templates/posts.html',
			controller: 'PostsCtrl'
		})

		.when('/admin', {
			templateUrl: 'app/admin/templates/admin.html',
		controller: 'AdminCtrl'
		})

		///////////POST ROUTES////////////

		.when('/post/:id', {
			templateUrl: 'app/posts/templates/fullpost.html',
			controller: 'FullPostCtrl'
		})

	.when('/posts/3', {
			templateUrl: 'app/posts/templates/posts.html',
			controller: 'PostsCtrl'
		})
/*
		.when('/post/AngularJS-Modules', {
			templateUrl: 'data/posts/html/AngularJS-Modules.html',
			//controller: 'FullPostCtrl'
		})

		.when('/post/AngularJS-Routes', {
			templateUrl: 'data/posts/html/AngularJS-Routes.html',
			//controller: 'FullPostCtrl'
		})
*/

		.otherwise({
			template: "Oops!"
		});



	});

}());


