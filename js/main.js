/*Menu Show*/
const showMenu = (toggleId, navId) =>{
	const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId)
	if(toggle && nav){
		toggle.addEventListener('click', ()=>{
			nav.classList.toggle('show')
		})
	}
}
showMenu('nav-toggle', 'nav-menu');

/*Active and Remove menu*/
const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
	navLink.forEach(n => n.classList.remove('active'))
	this.classList.add('active');
	
	//Remove menu for Mobile
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*Clock and weather*/
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
function showDate(){
	var date = new Date();
	var year = date.getFullYear();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var month = months[date.getMonth()];
	var today_date = date.getDate();
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var day = days[date.getDay()];
	var dateShow = day + "<br />" +today_date + " " + month + "," + year;
	document.getElementById("date").innerHTML = dateShow;
}
showTime();
showDate();

/*About, Trainer, Skills Section*/
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
const tab1 = document.getElementById('tab-1'); 
const tab2 = document.getElementById('tab-2'); 
const tab3 = document.getElementById('tab-3'); 
const about = document.getElementById('about');  
const trainer = document.getElementById('trainer'); 
const skills = document.getElementById('skills'); 

//Select Tab Content item
function selectItem(e){
	removeBorder();
	//Show Border
	this.classList.add('tab-border');
	//showContent
	//Dynamically Select Id...Here Error
	/*const tabContentItem = document.getElementById(`#${this.id}-content`);
	tabContentItem.classList.add('show-tab-content');*/
}
function selectItemAbout(e){
	removeBorder();
	//Show Border
	tab1.classList.add('tab-border');
}
function selectItemTrainer(e){
	removeBorder();
	//Show Border
	tab2.classList.add('tab-border');
}
function selectItemSkills(e){
	removeBorder();
	//Show Border
	tab3.classList.add('tab-border');
}
function aboutTabShow(){
	removeContent();
	about.classList.add('show-tab-content');
}
function trainerTabShow(){
	removeContent();
	trainer.classList.add('show-tab-content');
}
function skillsTabShow(){
	removeContent();
	skills.classList.add('show-tab-content');
}
function removeBorder(){
	tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeContent(){
	tabContentItems.forEach(item => item.classList.remove('show-tab-content'));
}
document.querySelector('.about').addEventListener("click", selectItemAbout);
document.querySelector('.about').addEventListener("click", aboutTabShow);
document.querySelector('.trainer').addEventListener("click", trainerTabShow);
document.querySelector('.trainer').addEventListener("click", selectItemTrainer);
document.querySelector('.skills').addEventListener("click", skillsTabShow);
document.querySelector('.skills').addEventListener("click", selectItemSkills);
tab1.addEventListener("click", aboutTabShow);
tab2.addEventListener("click", trainerTabShow);
tab3.addEventListener("click", skillsTabShow);

//Listen for Tab Click
tabItems.forEach(item => item.addEventListener('click', selectItem));

//Collapse Works title change
const worksHeading = document.querySelectorAll('.panel-heading');
function removeWorksHeadingColor(){
	worksHeading.forEach(item => item.classList.remove('active-panel'));
}
$('.panel-heading').on('click', function(){
	removeWorksHeadingColor();
    $(this).toggleClass('active-panel')    
})

//Google Map API
function initMap(){
	var options = {
		zoom:8,
		center:{lat:22.701002,lng:90.353455},
		panControl: true,
		zoomControl: true,
		mapTypeControl: true,
		scaleControl: true,
		streetViewControl: true,
		overviewMapControl: true,
		rotateControl: true
	}
	//Add Map
	var map = new google.maps.Map(document.getElementById('map'), options);
	
	//Add Marker
	var marker = new google.maps.Marker({
	position:{lat:22.224863,lng:90.454750},
	map:map,
	animation:google.maps.Animation.BOUNCE
	});
	//InfoWindow for markers
	var infoWindow = new google.maps.InfoWindow({
		content: "<h1>Patuakhali Lot 6<br />Morning batch</h1>"
	});
	marker.addListener('click', function(){
		infoWindow.open(map, marker);
	});
	
}

//Contact Input
  const inputs = document.querySelectorAll('.input');
  
  function focusInput(){
  let parent = this.parentNode.parentNode;
  parent.classList.add('input-focus');
  }
  
  function blurInput(){
  let parent = this.parentNode.parentNode;
  if(this.value == ""){
	  parent.classList.remove('input-focus');
  }
  }
  
  inputs.forEach(input => {
  input.addEventListener('focus', focusInput);
  input.addEventListener('blur', blurInput);
  
  });
  
//Counting Projects
const counters = document.querySelectorAll('.counter');
const speed = 300;

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc = target / speed;
		if(count<target){
			counter.innerText = Math.ceil(count + inc);
			setTimeout(updateCount, 1);
		}
		else{
			count.innerText = target;
		}
	}
	updateCount();
});

//Coding Screenshot Image
function upDate(preview) {

	var previewBox = document.getElementById("coding-screenshot-preview");
	var hideCodeNeverLies = document.getElementById("hide-code-never-lies");
	const codeNeverLies = document.querySelector('.coding-screenshot-preview');
	hideCodeNeverLies.style.display = "none";
	previewBox.style.backgroundImage = "url(" + preview.src + ")";
	codeNeverLies.classList.add('animate__animated', 'animate__fadeInUp');
}
function unDo() {
	var previewBox = document.getElementById("coding-screenshot-preview");
	var hideCodeNeverLies = document.getElementById("hide-code-never-lies");
	const codeNeverLies = document.querySelector('.coding-screenshot-preview');
	hideCodeNeverLies.style.display = "block";
	previewBox.style.backgroundImage = "url()";
	codeNeverLies.classList.remove('animate__animated', 'animate__fadeInUp');
	codeNeverLies.classList.add('animate__animated', 'animate__fadeIn');
}

//Experts Image FullScreen PopUp
$('.imgBox').click(function(){
	var expert_src = $('.popup').attr('src');
	$('.expert-modal').modal('show');
	$('#popup-img').attr('src', expert_src);
});

//Night Mode
const checkbox_night = document.getElementById('checkbox');
checkbox_night.addEventListener('change', ()=>{
	document.body.classList.toggle('day-mode');
});

/*
/*Scroll Reveal Animation*/
const sr = ScrollReveal({
origin: 'top', distance: '80px', duration: 2000, reset: true	
})

/*

sr.reveal('.coding-screenshot-preview',{delay: 400});


sr.reveal('.thunder-community',{delay: 200});
sr.reveal('.never-give-up',{delay: 400});


sr.reveal('.owner-logo',{delay: 400});
*/




