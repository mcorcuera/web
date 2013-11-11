//Author: Mikel Corcuera <mik.corcuera@gmail.com>
//Filename: boilerplate.js
define([ 
	//These paths are alias that we configured in our bootstrap (typically main.js)
	'jquery',
	'underscore',
	'backbone',
	'text!templates/home/homeTemplate.html',
	'models/session'
], function( $, _, Backbone, homeTemplate, Session) {
	//Above we have passed in jQuery, Underscore and Backbone
	//They will not be accessible in the global scope
	
	var HomeView = Backbone.View.extend({
		
		el: $("#main"),
		
		render: function() {
		//	Session.fetch();
			console.log("Renderizemos home");
			this.$el.html( homeTemplate);
			console.log( Session.get( "sessionID"));
			
		}
		
	});
	
	return HomeView;
});