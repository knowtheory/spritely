// Character Sprite constructor.
function Character(char_param){
	// Verify that we've got a graph object, and make sure it's wrapped w/ $
	if (char_param.nodeName == "g"){ // raw DOM object
		var character = $(char_param)
	} else 	if (char_param[0] && char_param[0].nodeName == "g"){ // jQuery object
		var character = char_param;
	}
	else { throw new Error("Characters must be created from a <g> but we got " + char_param )} // throw an error

	// verify that the character g has subgraphs for north, east, south, and west.

	this.spriteFrames = character.children('g.frames')
	this.spriteFrames.attr('visibility','hidden')

	// verify that there's a display frame.  set it to a private var
	this.displayFrame = $(character).children('image.display');

	// attribute proxies into the display frame
	this.x      = SetX
	this.y      = SetY
	this.width  = SetWidth
	this.height = SetHeight
	
	// mov
	this.face = this.stop = Stop

	this.x($('svg').attr('width')/2);
	this.y($('svg').attr('height')/2);
	// set the display to the Standing South image
	this.face("south");
}
	function SetX(position){
		if (typeof position == "number" ){
			this.displayFrame.attr('x',position);
		} else if (position != null){ throw new Error("position must be a number")}
		return this.displayFrame.attr('x')
	}
	function SetY(position){
		if (typeof position == "number"){
			this.displayFrame.attr('y',position);
		} else if (position != null){ throw new Error("position must be a number")}
		return this.displayFrame.attr('y')
	}
	function SetWidth(position){
		
	}
	function SetHeight(position){
		
	}

	function Stop(direction){
		this.displayFrame.attr('xlink:href', this.spriteFrames.children("."+direction).children('.stand').attr('xlink:href'))
	}

	function Move(direction){
	}

function Controller(key_hash){
	//var key_bindings = {}
	//var function_bindings = {}
	
	var east	= key_hash.east
	var north	= key_hash.north
	var south	= key_hash.south
	var west	= key_hash.west
	
	$(window).keypress(function(event){
		// if we recognize the event as one of our controller actions
		$([east,north,south,west]).each(function(){
			if(event.keyCode == this){
				alert(this)
			}
		})
	})
}
	//function ControllerKeyBinding(key_hash){}
	//function ControllerFunctionBinding(function_hash){}

function initMana() { 
	controller = Controller({"east":100,"north":119,"south":115,"west":97})
	$('.character').each(function(){
		window[$(this).attr('id')] = new Character(this)
	});	
}
