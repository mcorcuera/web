//Author: Mikel Corcuera <mik.corcuera@gmail.com>
//Filename: section.js
define([ 
	//These paths are alias that we configured in our bootstrap (typically main.js)
	'underscore',
	'backbone'
], function(_, Backbone) {
	//Above we have passed in jQuery, Underscore and Backbone
	//They will not be accessible in the global scope
	var SectionModel = Backbone.Model.extend({
		
		defaults: {
			name: null,
			selected: false
		},
		
		initialize: function() {
			
		}
		
		
	});
	
	
	return SectionModel;
});