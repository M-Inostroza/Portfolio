//Loader
const loader = document.querySelector('.loader');

//--Title Intro--//
const title_element = document.querySelector('.home-title-container');
const title_text = document.querySelector('.home-title');

// Container frame element
const planet_works_frame = document.getElementById("planet-works-frame");
// Floating text element
const works_frame_float = document.getElementById("works-frame-float");

const loader_anim = bodymovin.loadAnimation({
  container: loader,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/anims/loader.json'
});

//Waits until content is loaded before showing site
window.addEventListener('load', () => {
  anime({
    targets: loader,
    opacity: [1,0],
    easing: 'easeInOutQuad',
    complete: () => {
      loader.style.display = 'none';
    }
  });

  title_text.style.opacity = 0;
  anime({
    targets: title_element,
    scaleX: [0,1],
    easing: 'easeInOutQuad',
    duration: 300,
    delay: 800,
    complete: () => {
      anime({
        targets: title_text,
        opacity: [0,1],
        easing: 'easeInOutQuad',
        duration: 250
      });
    }
  });

});

//Queries
const _queryTablet = window.matchMedia('(max-width: 780px)');
const _queryPhone = window.matchMedia('(max-width: 420px)');

//-----PLANET WORKS-----//

// Planet animation
var planet_works = bodymovin.loadAnimation({
    container: document.getElementById("home-planet-works"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/anims/home_planet_works.json'
});

// Frame animation
var works_frame_anim = bodymovin.loadAnimation({
    container: planet_works_frame,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/anims/home_frame_works.json'
});

// Reduces anim speed
works_frame_anim.setSpeed(0.7);

// Adjust frame speed
works_frame_anim.setSpeed(2.5)

// Floating window animation
var works_float_anim = bodymovin.loadAnimation({
  container: works_frame_float,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/anims/home_works_float.json'
})

// PLAY IN
planet_works_frame.addEventListener('mouseenter', () => {
    works_frame_anim.setDirection(1)
    works_frame_anim.play()
    works_frame_float.style.opacity = 1;
    works_frame_anim.play()
})


//Queries
if(_queryTablet.matches || _queryPhone.matches) {
    works_frame_anim.setDirection(1)
    works_frame_anim.play()
    works_frame_float.style.opacity = 1;
    window_works_anim.play()
}

//Click to scroll
planet_works_frame.addEventListener('click', () => {
    var section_work_container = document.querySelector('.UI-works');
    section_work_container.scrollIntoView({behavior: "smooth"})
})

// PLAY OUT
planet_works_frame.addEventListener('mouseleave', () => {
    works_frame_anim.setDirection(-1)
    works_frame_anim.play()
    works_frame_float.style.opacity = 0;
})






//-----PLANET SKILLS-----//

// Planet animation
var planet_skills = bodymovin.loadAnimation({
    container: document.getElementById("home-planet-skills"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/anims/planet_skills.json'
})

// Container frame element
const skills_element = document.getElementById("planet-skills-frame");

// Frame animation
const frame_skills = bodymovin.loadAnimation({
    container: skills_element,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/anims/frame_skills.json'
})

// PLAY IN
skills_element.addEventListener('mouseenter', (e) => {
    frame_skills.play();
    frame_skills.setDirection(1);
    window_skills.style.opacity = 1;
    window_skills_anim.play()
})

// Floating window element
const window_skills = document.getElementById("skill-floating-window");

// Floating window animation
var window_skills_anim = bodymovin.loadAnimation({
    container: window_skills,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: '/anims/skills_frame_antena.json'
})

// Reduces anim speed
window_skills_anim.setSpeed(0.7);


if(_queryTablet.matches || _queryPhone.matches) {
    frame_skills.play();
    frame_skills.setDirection(1);
    window_skills.style.opacity = 1;
    window_skills_anim.play()
}

//Click to scroll
skills_element.addEventListener('click', (e) => {
    var section_skills_container = document.querySelector('.skill-frame-container');
    section_skills_container.scrollIntoView({behavior: "smooth"})
})

// PLAY OUT
skills_element.addEventListener('mouseleave', (e) => {
    frame_skills.setDirection(-1);
    frame_skills.play();
    window_skills.style.opacity = 0;
})



//-----PLANET HIRE-----//

// Planet animation
var planet_hire = bodymovin.loadAnimation({
    container: document.getElementById("planet-contact"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/anims/planet_contact.json'
})

// Frame container
const contact_element = document.getElementById("frame-planet-contact");

// Frame animation
const frame_contact = bodymovin.loadAnimation({
    container: contact_element,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/anims/frame_skills.json'
})

// PLAY IN
contact_element.addEventListener('mouseenter', (e) => {
    frame_contact.play();
    frame_contact.setDirection(1);
    window_hire.style.opacity = 1;
    window_hire_anim.play()
})

// Floating window element
const window_hire = document.getElementById("hire-floating-window");

// Floating window animation
var window_hire_anim = bodymovin.loadAnimation({
    container: window_hire,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: '/anims/window_hire.json'
})

// Reduces anim speed
window_hire_anim.setSpeed(0.7);

if(_queryTablet.matches || _queryPhone.matches) {
    frame_contact.play();
    frame_contact.setDirection(1);
    window_hire.style.opacity = 1;
    window_hire_anim.play()
}


//Click to scroll
contact_element.addEventListener('click', (e) => {
    var section_contact_container = document.querySelector('.section-contact-container');
    section_contact_container.scrollIntoView({behavior: "smooth"})
})

// PLAY OUT
contact_element.addEventListener('mouseleave', (e) => {
    frame_contact.setDirection(-1);
    frame_contact.play();
    window_hire.style.opacity = 0;
})



//-----------------------------------//


//-----Shifting text-----//

const stay_duration = 1200;
const fade_duration = 800;

const jumpWords = ["make", "design", "prototype", "build", "imagine"];

const textElement = document.querySelector('.description-jumper')

let textIndex = 0;

const textTimeline = anime.timeline({
  easing: 'easeOutQuad',
  targets: textElement,
  loop: true
});

textTimeline.add({
  //Make
  translateY: [
    {value: [40,0], duration: fade_duration},
    {value: 0, duration: stay_duration},
    {value: [0,-40], duration: fade_duration}],
  opacity: [
    {value: [0,1], duration: fade_duration},
    {value: 1, duration: stay_duration},
    {value: [1,0], duration: fade_duration}],
  color: '#EAC1D8',
  complete: function() {textIndex++ , textElement.innerText = jumpWords[textIndex]}

}).add({
  //Design
  translateY: [
    {value: [40,0], duration: fade_duration},
    {value: 0, duration: stay_duration},
    {value: [0,-40], duration: fade_duration}],
  opacity: [
    {value: [0,1], duration: fade_duration},
    {value: 1, duration: stay_duration},
    {value: [1,0], duration: fade_duration}],
  color: '#CAAFDC',
  complete: function() {textIndex++ , textElement.innerText = jumpWords[textIndex]}

}).add({
  //Prototype
  translateY: [
    {value: [40,0], duration: fade_duration},
    {value: 0, duration: stay_duration},
    {value: [0,-40], duration: fade_duration}],
  opacity: [
    {value: [0,1], duration: fade_duration},
    {value: 1, duration: stay_duration},
    {value: [1,0], duration: fade_duration}],
  color: '#B5ACCC',
  complete: function() {textIndex++ , textElement.innerText = jumpWords[textIndex]}

}).add({
  //Build
  translateY: [
    {value: [40,0], duration: fade_duration},
    {value: 0, duration: stay_duration},
    {value: [0,-40], duration: fade_duration}],
  opacity: [
    {value: [0,1], duration: fade_duration},
    {value: 1, duration: stay_duration},
    {value: [1,0], duration: fade_duration}],
  color: '#B1B1BC',
  complete: function() {textIndex++ , textElement.innerText = jumpWords[textIndex]}

}).add({
  //Imagine
  translateY: [
    {value: [40,0], duration: fade_duration},
    {value: 0, duration: stay_duration},
    {value: [0,-40], duration: fade_duration}],
  opacity: [
    {value: [0,1], duration: fade_duration},
    {value: 1, duration: stay_duration},
    {value: [1,0], duration: fade_duration}],
  color: '#fff',
  complete: function() {
    textIndex = 0
    textElement.innerText = jumpWords[textIndex]
    textTimeline.restart()
  }
})



//-----Changing Text-----//

const detailWords = ["Web", "User interface", "User experience", "Games"];

const textDetail = document.querySelector(".detail");

let detailIndex = 0;

const detailTimeline = anime.timeline({
  easing: 'easeOutQuad',
  targets: textDetail,
  loop: true
});

detailTimeline.add({
  //Web
  translateX: [
    {value: [130,0], duration: fade_duration},
    {value: 0, duration: stay_duration},
    {value: [0,-130], duration: fade_duration}],
  opacity: [
    {value: [0,1], duration: fade_duration},
    {value: 1, duration: stay_duration},
    {value: [1,0], duration: fade_duration}],
  complete: function() {detailIndex++ , textDetail.innerText = detailWords[detailIndex]}
  //Index 1
})
.add({
  //User interface
  translateX: [
    {value: [130,0], duration: fade_duration},
    {value: 0, duration: stay_duration},
    {value: [0,-130], duration: fade_duration}],
  opacity: [
    {value: [0,1], duration: fade_duration},
    {value: 1, duration: stay_duration},
    {value: [1,0], duration: fade_duration}],
  complete: function() {detailIndex++ , textDetail.innerText = detailWords[detailIndex]}
  //Index 2
})
.add({
  //User experience
  translateX: [
    {value: [130,0], duration: fade_duration},
    {value: 0, duration: stay_duration},
    {value: [0,-130], duration: fade_duration}],
  opacity: [
    {value: [0,1], duration: fade_duration},
    {value: 1, duration: stay_duration},
    {value: [1,0], duration: fade_duration}],
  complete: function() {detailIndex++ , textDetail.innerText = detailWords[detailIndex]}
  //Index 3
})
.add({
  //games
  translateX: [
    {value: [130,0], duration: fade_duration},
    {value: 0, duration: stay_duration},
    {value: [0,-130], duration: fade_duration}],
  opacity: [
    {value: [0,1], duration: fade_duration},
    {value: 1, duration: stay_duration},
    {value: [1,0], duration: fade_duration}],
  complete: function() {
    detailIndex = 0;
    textDetail.innerText = detailWords[detailIndex]
    detailTimeline.restart()
  }})


  