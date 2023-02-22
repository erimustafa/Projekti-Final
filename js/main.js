
alert("This page might now work fine!")


function myAlert() {
	alert("Sorry this page can not open!")
}

var slideIndex=1;

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName('slide');

    for ( i=0; i < slides.length; i++){
    	slides[i].style.display = "none";
    }

    if( n > slides.length){
    	slideIndex=1;
    }
    if(n < 1){
    	slideIndex = slides.length;
    }

    slides[slideIndex-1].style.display = "block";
}

showSlides(1);

function pulseSlide(n){
	slideIndex +=n;
	showSlides(slideIndex);
}

setInterval( pulseSlide,2000,1);

function myAlertt() {
	alert("Thank you for submitting your information to our website.")
}


var noon;

function showCurrentTime() {
	var Clock = document.getElementById('clock');
	var currentTime = new Date();

	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var  seconds = currentTime.getSeconds();

	var meridian = "PM";

	if(hours >= noon){
		meridian = "AM";
	}

	var clockTime = hours + ":" + minutes + ":" + seconds + meridian;

	Clock.innerText = clockTime;
};

var onSecond = 1000;
setInterval(showCurrentTime, onSecond)

const btn = document.getElementById('contactbtn');

btn.addEventListener('click', () => {
	const form = document.getElementById('formm');

	if(form.style.display === 'none'){
		form.style.display = 'block';
	} else{
		form.style.display = 'none';
	}
});

const chart = document.getElementById('chartbtn');

chart.addEventListener('click', () => {
	const widget = document.getElementById('chartwidget');

	if(widget.style.display === 'none'){
		widget.style.display = 'block';
	} else{
		widget.style.display = 'none';
	}
});
