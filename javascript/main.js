const prodImg = document.getElementById('big-prod-img1');
const red1 = document.getElementById('red1');
const blue1 = document.getElementById('blue1');
const gold1 = document.getElementById('gold1');
const silver1 = document.getElementById('silver1');
const modal1 = document.getElementById('modal1');
const skate = document.getElementById('button1');
const close = document.getElementById('close1');

red1.addEventListener('click', () => {
	prodImg.src = 'products/skateboard-rood.png';
});

blue1.addEventListener('click', () => {
	prodImg.src = 'products/skateboard-blauw.png';
});

gold1.addEventListener('click', () => {
	prodImg.src = 'products/skateboard-goud.png';
});

silver1.addEventListener('click', () => {
	prodImg.src = 'products/skateboard-zilver.png';
});

skate.addEventListener('click', () => {
	modal1.style.display = 'flex';
});

close.addEventListener('click', () => {
	modal1.style.display = 'none';
});


const prodImg2 = document.getElementById('big-prod-img2');
const red2 = document.getElementById('red2');
const blue2 = document.getElementById('blue2');
const gold2 = document.getElementById('gold2');
const silver2 = document.getElementById('silver2');
const modal2 = document.getElementById('modal2');
const pet = document.getElementById('button2');
const close2 = document.getElementById('close2');

red2.addEventListener('click', () => {
	prodImg2.src = 'products/pet-rood.png';
});

blue2.addEventListener('click', () => {
	prodImg2.src = 'products/pet-blauw.png';
});

gold2.addEventListener('click', () => {
	prodImg2.src = 'products/pet-goud.png';
});

silver2.addEventListener('click', () => {
	prodImg2.src = 'products/pet-zilver.png';
});

pet.addEventListener('click', () => {
	modal2.style.display = 'flex';
});

close2.addEventListener('click', () => {
	modal2.style.display = 'none';
});


const prodImg3 = document.getElementById('big-prod-img3');
const red3 = document.getElementById('red3');
const blue3 = document.getElementById('blue3');
const gold3 = document.getElementById('gold3');
const silver3 = document.getElementById('silver3');
const modal3 = document.getElementById('modal3');
const schoen = document.getElementById('button3');
const close3 = document.getElementById('close3');

red3.addEventListener('click', () => {
	prodImg3.src = 'products/schoen-rood.png';
});

blue3.addEventListener('click', () => {
	prodImg3.src = 'products/schoen-blauw.png';
});

gold3.addEventListener('click', () => {
	prodImg3.src = 'products/schoen-goud.png';
});

silver3.addEventListener('click', () => {
	prodImg3.src = 'products/schoen-zilver.png';
});

schoen.addEventListener('click', () => {
	modal3.style.display = 'flex';
});

close3.addEventListener('click', () => {
	modal3.style.display = 'none';
});

