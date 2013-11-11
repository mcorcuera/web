//Author: Mikel Corcuera <mik.corcuera@gmail.com>
//Filename: app.js
define([ 
	//These paths are alias that we configured in our bootstrap (typically main.js)
	'jquery',
	'underscore',
	'backbone',
	'views/login',
	'views/home',
	'views/header'
], function( $, _, Backbone, LoginView, HomeView, HeaderView) {
	console.log( 'Routing..');
	var AppRouter = Backbone.Router.extend( {
		routes: {
			//We define here the application routes
			'test': 'showTest',
			'login': 'showLogin',
			'': 'showHome',
			
			//Default
			'*actions': 'defaultAction'
		}
	
	});
	
	var appRouter = new AppRouter;
		
	var initialize = function() {
	
		
		appRouter.on( 'route:showTest', function() {
			console.log( 'Route to test');
		});
		
		appRouter.on( 'route:showHome', function() {
			console.log( 'Home');
			var headerView = new HeaderView()
			headerView.render();
			
			/* As we have homeView inside HeaderView template, we need to specify a different el attribute*/
			var homeView = new HomeView();
			homeView.$el = $("#content");
			homeView.render();
		});
		
		appRouter.on( 'route:showLogin', function() {
			console.log( 'Login');
			var loginView = new LoginView();
			
			loginView.render();
		});
		
		appRouter.on( 'route:defaultAction', function( actions) {
			console.log( 'Route to ' + actions);
		});
		
		Backbone.history.start();
	};
	
	return{
		initialize: initialize,
		navigate: appRouter.navigate
	};
});