//Author: Mikel Corcuera <mik.corcuera@gmail.com>
//Filename: sessionStatus.js
define([ 
	//These paths are alias that we configured in our bootstrap (typically main.js)
	'underscore',
	'backbone'
], function(_, Backbone) {
	//Above we have passed in jQuery, Underscore and Backbone
	//They will not be accessible in the global scope
	var SessionModel = Backbone.Model.extend({
		
		url: 'http://localhost:8080/MooderWeb/v1/api/session',
		
		defaults: {
			sessionID: null
		},
		
		initialize: function() {
			//Load the stored session
			var storedSession =  JSON.parse( localStorage.getItem("Session"));
			this.set( storedSession);
			
			this.on( "change:sessionID", function( model) {
				//Store the session retrieved from server
				localStorage.setItem( "Session", JSON.stringify( this));
				console.log( "Fetched sessionID:" + this.get( "sessionID"));
				
			})
		}
		
		
	});
	
	var session = new SessionModel();
	
	return session;
});