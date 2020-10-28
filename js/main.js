// Grab some DOM
const container = document.querySelector('.container');
const card = document.querySelector('.card');
const laptop = document.querySelector('.card__laptop img');
const h1 = document.querySelector('.card__info h1');
const h3 = document.querySelector('.card__info h3');
const prices = document.querySelector('.card__prices');
const purchase = document.querySelector('.card__purchase button');

// Detect the mouse move event
container.addEventListener('mousemove', (e) => {
	// Create page x-axis
	let xRotate = (window.innerHeight/2 - e.pageY)/10;
	let yRotate = (window.innerWidth/2 - e.pageX)/10;
	card.style.transform = `rotateX(${xRotate}deg) rotateY(${yRotate}deg)`;
});

// Remove animation during card hover
container.addEventListener('mouseenter', e => {
	// Remove transition
	card.style.transition = 'none';
	laptop.style.transform = 'perspective(1000px) translateZ(200px) rotateZ(-20deg) rotateY(20deg)';
	h1.style.transform = 'perspective(1000px) translateZ(150px)';
	h3.style.transform = 'perspective(1000px) translateZ(150px)';
	prices.style.transform = 'perspective(1000px) translateZ(100px)';
	purchase.style.transform = 'perspective(1000px) translateZ(100px)';
})

// Remove the rotation when the mouse leaves the container
container.addEventListener('mouseleave', e => {
	// Reset the rotation
	card.style.transition = 'all .5s ease';
	card.style.transform = 'rotateX(0deg) rotateY(0deg)';
	laptop.style.transform = 'translateZ(0) rotateZ(0)';
	h1.style.transform = 'translateZ(0)';
	h3.style.transform = 'translateZ(0)';
	prices.style.transform = 'translateZ(0)';
	purchase.style.transform = 'translateZ(0)';
})