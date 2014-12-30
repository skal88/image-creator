var canvas = function(options){
	var _this = this;
	var canvas = {};

	canvas.id = document.getElementById(options.id);
	canvas.ctx = canvas.id.getContext("2d");

	if( typeof(options.width) === "undefined" || options.width === null )
		canvas.width = canvas.id.width;
	else{
		canvas.width = options.width;
		canvas.id.width = options.width;
	}

	if( typeof(options.height) === "undefined" || options.height === null )
		canvas.height = canvas.id.height;
	else{
		canvas.height = options.height;
		canvas.id.height = options.height; 
	}
		

	// Variables privadas
	var elements = [];


    var setBackground = function(options){
    	canvas.ctx.save();
    	canvas.ctx.fillStyle = options.fillColor;
    	canvas.ctx.fillRect( 0, 0, canvas.width, canvas.height);
    	canvas.ctx.restore();
    }

    var drawCircle = function(options){
    	canvas.ctx.save();
		canvas.ctx.beginPath();
	    canvas.ctx.arc(options.x, options.y, options.radius, 0, 2 * Math.PI, false);
	    canvas.ctx.fillStyle = options.fillColor;
	    canvas.ctx.fill();
	    canvas.ctx.lineWidth = options.lineWidth;
	    canvas.ctx.strokeStyle = options.strokeColor;
	    canvas.ctx.stroke();
	    canvas.ctx.restore();
    }

    var drawSquare = function(options){
    	canvas.ctx.save();
	    canvas.ctx.fillStyle = options.fillColor;
	    canvas.ctx.fillRect(options.x, options.y, options.width, options.height, false);
    	canvas.ctx.lineWidth = options.lineWidth;
    	canvas.ctx.strokeStyle = options.strokeColor;
    	canvas.ctx.strokeRect(options.x, options.y, options.width, options.height, false);
	    canvas.ctx.restore();
    }

    var drawImage = function(options){
    	canvas.ctx.save();
    	canvas.ctx.drawImage(options.img, 0, 0, 100, 100);
    	canvas.ctx.restore();
    }

    var paint =	function(options){

		switch(options.element){
			case "background":
				setBackground(options);
				break;

			case "circle":
				drawCircle(options);
			    break;

			case "square":
				drawSquare(options);
			    break;

			case "image":
				drawImage(options);
			    break;

		} // switch

		return canvas; // Preserve the jQuery chainability 
	} // paint

    var loadImage = function(options){
    	// load image from data url
	    var imageObj = new Image();
	    imageObj.src = options.url;
	    imageObj.onload = function() {
	    	options.img = this;
			elements.push(options);
	    };
    };


    this.addElement = function(options){
    	var element = new item(options);

    	if( options.element == "image" ){
    		loadImage(options)
    	} else{
    		elements.push(element);
    	}
    }


    this.render = function(){
    	for( var i=0; i < elements.length; i++ ){
			paint(elements[i]);
		}
    }

    this.getElements = function(){
    	return elements;
    }

}