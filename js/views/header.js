//Filename: boilerplate.js
define([ 
	//These paths are alias that we configured in our bootstrap (typically main.js)
	'jquery',
	'underscore',
	'backbone',
	'text!templates/header/header.html',
	'models/section',
	'collections/sections'
], function( $, _, Backbone, headerTemplate, Section, Sections) {

	var HeaderView = Backbone.View.extend({
		
		el: $('#main'),
		
		events: {
			"mouseenter li" : "changeMarker",
			"mouseleave li" : "resetMarker"
		},
		
		render: function() {
			var s1 = new Section( { name:"Inicio", selected: "true"});
			var s2 = new Section( { name:"Perfil", selected: "false"});
			var s3 = new Section( { name:"Explora", selected: "false"});
			var s4 = new Section( { name:"Mensajes", selected: "false"});
			
			var mySections = new Sections();
			
			mySections.reset( [s1, s2, s3, s4]);
			
			console.log( mySections.toJSON());
			var template = _.template( headerTemplate, {sections : mySections.toJSON()});
			this.$el.html( template);
			this.resetMarker();
			return this;
		},
		
		changeMarker: function( event) {
			
			this.setMarkerPosition( $(event.target));
		
		},
		
		setMarkerPosition: function( $target) {
			var $marker = $("#marker");
			var size = parseInt( $target.css( "width")) + parseInt( $target.css( "padding-left")) + parseInt( $target.css( "padding-right"));
			var position = $target.position();
			$marker.css( "width", size + "px");
			$marker.css( "left", position.left);
		},
		
		resetMarker: function() {
			this.setMarkerPosition( $("li a.selected"));
		}
	});
	
	return HeaderView;
});