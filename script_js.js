let slider_cfg = {
	1: "./img_slider_js/javascript-1.jpg",
	2: "./img_slider_js/iStock-1047259374.jpg",
	3: "./img_slider_js/maxresdefault (1).jpg",
}

// varibles
let slider_image = document.getElementById('slider_image');
let left = document.getElementById('left');
let right = document.getElementById('right');

let sin = 1; //slider_image_number - sin 
let size =  Object.keys(slider_cfg).length; 
let path = slider_cfg[sin];

// update slide
function update(){
	path = slider_cfg[sin];
	slider_image.setAttribute("src", path);
}

// toggle slides
left.onclick = function(){
	if (sin > 1){
		sin = sin - 1;
	} else{
		sin = 1;
	}
	update();
}

right.onclick = function(){
	if (sin < size){
		sin = sin + 1;
	} else{
		sin = size;
	}
	update();
}

// start
update();