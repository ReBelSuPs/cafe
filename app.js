const links = document.querySelector("#links");
const hamBurger = document.querySelector(".hamburger");
const lines = document.querySelectorAll(".line");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let current = 1;
var images = [];

for (var i = 0; i < 9; i++) {
	images[i] = `${i+1}.jpg`;
}

document.sliderImg.src = images[current-1];
prevBtn.addEventListener('click',()=>{
	if(current > 1)
	current--;
	else current = images.length-1;

	document.sliderImg.src = images[current-1];
});
nextBtn.addEventListener('click',()=>{
	if(current < images.length)
	current++;
	else current = 1;

	document.sliderImg.src = images[current-1];
});

