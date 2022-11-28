const text = [
    'Front-end'
  ];
  
   let line = 0;
    let count = 0;
    let result = '';
    function typeLine() {
      let interval = setTimeout(
        () => {
          result += text[line][count]
          document.querySelector('.h1').innerHTML =result +'|';
  
  
        count++;
        if (count >= text[line].length) {
          count = 0;
          line++;
          if (line == text.length) {
            clearTimeout(interval);
             document.querySelector('.h1').innerHTML =result;
            return true;
          }
        }
        typeLine();
      }, getRandomInt(getRandomInt(250*2.5)))
    }
    typeLine();
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }



// слайдер
let slider_cfg = {
	1: "./img_slider_html/017fe7cc351ade83013f5859603f0b13.jpeg",
	2: "./img_slider_html/practical_example_tags1.png",
	3: "./img_slider_html/img31.jpg",
	4: "./img_slider_html/HTML_Blog-scaled.jpeg",
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
