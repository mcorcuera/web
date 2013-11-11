//Author: Mikel Corcuera <mik.corcuera@gmail.com>
//Filename: app.js
define([ 
	//These paths are alias that we configured in our bootstrap (typically main.js)
	'jquery',
	'underscore',
	'backbone', 
	'router' //Request router.js
], function( $, _, Backbone, Router) {
	
	var initialize = function() {
		//Initialize the Router module
		Router.initialize();
		console.log( "initialicing app");
		
		$(document).ajaxError( function( event, jqXHR, ajaxSettings, thrownError) {
			switch( jqXHR.status) {
				case 401: {
					Router.navigate( "login", { trigger: true});
				}
			}
		});
	}
	
	return{
		//What we return here will be used by other modules: App.initilize()
		initialize: initialize
	};
});