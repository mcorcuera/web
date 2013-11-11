//Filename: boilerplate.js
define([ 
	//These paths are alias that we configured in our bootstrap (typically main.js)
	'jquery',
	'underscore',
	'backbone'
], function( $, _, Backbone) {
	//Above we have passed in jQuery, Underscore and Backbone
	//They will not be accessible in the global scope
	
	return{
		//What we return here will be used by other modules
	};
});