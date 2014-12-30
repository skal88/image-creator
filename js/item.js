var item = function(options){

	if( typeof(options.element) === "undefined" || options.element == null ){
		console.log("You need define type of element to add. Read more in documentation");
		return;
	}

	switch(options.element){
		case "background":
			var defaults = {
				fillColor: "white",
				borderWidth: 0,
				borderColor: "black",
			};
			break;

		case "circle":
			var defaults = {
				x: 0,
				y: 0,
				radius: 10,
				fillColor: "grey",
				borderWidth: 0,
				borderColor: "black",
			};
			break;

		case "square":
			var defaults = {
				x: 0,
				y: 0,
				width: 10,
				height: 10,
				fillColor: "grey",
				borderWidth: 0,
				borderColor: "black",
			};
			break;

		case "image":
			var defaults = {};
			break;

		default:
			console.log("Elemento no definido");
	} // Switch



	var options = $.extend({}, defaults, options);
	return options;
};