/**
 initialisators available:

attachToggables();   attach .toggable links, 'bind' to toggable div
attachInitHiddens();   hide .init-hidden divs
attachFormValidation();   validate .validated forms, require jquery.validation
attachClickables();  invoke 'bind' function on click

**/

/**
 other useful methods

populateDivWithContent(sourceUrl, divId);   populate the divId with sourceUrl content

**/


//Classes and utility methods
var Clickable = function(element) {
	var it = element;
	
	it.click(function() {
		var funcName = it.attr('bind');
		eval(funcName+"()");
	})
};

var Toggable = function(toggableElementId, triggerElementId) {
    var who = toggableElementId;
    var trigger = triggerElementId;

    trigger.click(function() {
        who.toggle();
    });
}

var populateDivWithContent = function(sourceUrl, divId){
		$.ajax({
		  url: sourceUrl,
		  context: document.body,
		  success: function(data){
		    $('#'+divId).html(data);
		  }
		});	
}

//initialisation methods
var attachToggables = function() {
	$(".toggable").each(function(index) {
		new Toggable($('#'+$(this).attr('bind')), $(this));
	});
}

var attachInitHiddens = function() {
	$(".init-hidden").each(function(index) {
		$(this).hide();
	});
}

var attachFormValidation = function() {	
	$("form.validated").validate();	
}
var attachClickables = function() {
	$(".clickable").each(function(index) {
		new Clickable($(this));
	});
}


$(document).ready(function() {
   	attachToggables();   
	attachInitHiddens(); 
	attachFormValidation(); 
	attachClickables();
});
