function favColor(evt) {
	evt.preventDefault();
	
	document.body.style.backgroundColor = "red";
}


let color = document.querySelector('#color');

color.addEventListener('click', favColor);

function favPlace(evt) {
	evt.preventDefault();
	
	document.body.style.backgroundImage = "url(https://www.dexerto.com/wp-content/uploads/2020/10/destiny-2-tower-return-leaks-630x354.jpg)";
}


let place = document.querySelector('#place');

place.addEventListener('click', favPlace);

function favRitual(evt) {
	evt.preventDefault();
	
	document.body.style.backgroundImage = "url(https://image.shutterstock.com/image-photo/healthy-food-child-eating-cottage-600w-157170704.jpg)";
}


let ritual = document.querySelector('#ritual');

ritual.addEventListener('click', favRitual);