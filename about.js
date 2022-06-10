console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Good job! You submitted your form!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function showAlert(){
	alert('You must really like rubber duckies')
}

let alert1 = document.getElementById('pic')

alert1.addEventListener('mouseover', showAlert)


