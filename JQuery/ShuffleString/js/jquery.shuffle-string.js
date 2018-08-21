/** Self enclosed function  **/
/** This helps in avoiding conflicts in variable names etc  **/
(function($){
	$.fn.shuffleString = function() {
		console.log("shuffle string function");
		console.log($(this).text());
		return this.each(function() {
			console.log("shuffle string function for each");
			$(this).text("updated text");
		})
	}	
}(jQuery));