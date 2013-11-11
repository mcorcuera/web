//Author: Mikel Corcuera <mik.corcuera@gmail.com>
//Filename: boilerplate.js
define([ 
	//These paths are alias that we configured in our bootstrap (typically main.js)
	'jquery',
	'underscore',
	'backbone',
	'text!templates/login/loginTemplate.html',
	'models/session'
], function( $, _, Backbone, loginTemplate, Session) {
	
	var LoginView = Backbone.View.extend( {
		el: $('#main'),
		
		render: function() {
			this.$el.html( loginTemplate);
			return this;
		},
		
		events: {
			"click #login-button" : "doLogin"
		},
		
		doLogin : function( event) {
			var user = $( '#username').val();
			var pass = $( '#password').val();
			
			var encodedUserPass = btoa( user + ":" + pass);
			Session.fetch( {
						beforeSend: function( jqXHR) {
							jqXHR.setRequestHeader( "Authoritation", "Basic " + encodedUserPass);
						}
			});
		}
	}
	);
	//Above we have passed in jQuery, Underscore and Backbone
	//They will not be accessible in the global scope
	
	return LoginView;
	
});