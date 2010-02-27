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

	// verify that there's a display frame.  set it to a private var
	this.displayFrame = $(character).children('image.display');

	// attribute getters and setters
	this.x      = SetX
	this.y      = SetY
	this.width  = SetWidth
	this.height = SetHeight
	
	this.face = this.stop = Stop
	
	// set the display to the Standing South image
	this.face("south")
	
}
	function SetX(position){}
	function SetY(position){}
	function SetWidth(position){}
	function SetHeight(position){}

	function Stop(direction){
		this.spriteFrames.children(direction).children('stand')
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
		//alert($(this).index());
		var display = $(this).children('.display');
		display.attr('xlink:href',$(this).children('.south').children('.stand').attr('xlink:href'))
		display.attr('x',$('svg').attr('width')/2);
		display.attr('y',$('svg').attr('height')/2);
	});	
}
