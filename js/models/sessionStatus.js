//Author: Mikel Corcuera <mik.corcuera@gmail.com>
//Filename: sessionStatus.js
define([ 
	//These paths are alias that we configured in our bootstrap (typically main.js)
	'underscore',
	'backbone'
], function(_, Backbone) {
	//Above we have passed in jQuery, Underscore and Backbone
	//They will not be accessible in the global scope
	var SessionStatus = Backbone.Model.extend({
		
		defaults: {
			loggedIn: false,
			sessionId: null
		},
		
		initialize: function() {
		}
		
		
	});
	return{
		//What we return here will be used by other modules
	};
}