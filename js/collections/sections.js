//Author: Mikel Corcuera <mik.corcuera@gmail.com>
//Filename: sessionStatus.js
define([ 
	//These paths are alias that we configured in our bootstrap (typically main.js)
	'underscore',
	'backbone',
	'models/section'
], function(_, Backbone, SectionModel) {
	//Above we have passed in jQuery, Underscore and Backbone
	//They will not be accessible in the global scope
	var SectionsCollection = Backbone.Collection.extend({
		
		model: SectionModel
		
	});
	
	
	return SectionsCollection;
});