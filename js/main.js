//Author: Mikel Corcuera <mik.corcuera@gmail.com>
//File name main.js

// Require.js allows us to configure shortcut alias

require.config( {
	//Backbone and Underscore are not AMD-compliant. By default, they don't provide an interface compatible with RequireJS.
	shim: {
		underscore: {
		  exports: '_'
		},
		backbone: {
		  deps: ['underscore', 'jquery'],
		  exports: 'Backbone'
		}
	  },
	paths: {
		jquery: 'lib/jquery/jquery-1.7.2.min',
		underscore: 'lib/underscore/underscore-min',
		backbone: 'lib/backbone/backbone-min',
		templates: '../templates'
	}
	
});



require( [
	//Load our main app module and pass it to our definition function
	'app'

], function( App) {
	//The app dependency is passed as App
	App.initialize();
});

		