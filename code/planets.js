

//-----PLANET WORKS-----//

// Planet animation
var planet_works = bodymovin.loadAnimation({
    container: document.getElementById("planet-works"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/anims/planet_works.json'
})

// Container frame element
const frame_quad_element = document.getElementById("frame-planet-works");

// Frame animation
var frame_quad_anim = bodymovin.loadAnimation({
    container: frame_quad_element,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/anims/frame_quad_works_in.json'
})

// Adjust frame speed
frame_quad_anim.setSpeed(2.5)

// PLAY IN
frame_quad_element.addEventListener('mouseenter', (e) => {
    frame_quad_anim.setDirection(1)
    frame_quad_anim.play()
    window_works.style.opacity = 1;
    window_works_anim.play()
})

//Click to scroll
frame_quad_element.addEventListener('click', (e) => {
    var section_work_container = document.querySelector('.UI-works');
    section_work_container.scrollIntoView({behavior: "smooth"})
})

// PLAY OUT
frame_quad_element.addEventListener('mouseleave', (e) => {
    frame_quad_anim.setDirection(-1)
    frame_quad_anim.play()
    window_works.style.opacity = 0;
})

// Floating window element
const window_works = document.getElementById("work-floating-window");

// Floating window animation
var window_works_anim = bodymovin.loadAnimation({
    container: window_works,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: '/anims/frame_floating_window.json'
})

// Reduces anim speed
window_works_anim.setSpeed(0.7);




//-----PLANET SKILLS-----//

// Planet animation
var planet_skills = bodymovin.loadAnimation({
    container: document.getElementById("planet-skills"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/anims/planet_skills.json'
})

// Container frame element
const skills_element = document.getElementById("frame-planet-skills");

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


//------------MOONS------------//

//--Moon SSNF--//

// Moon animation
var moon_ssnf = bodymovin.loadAnimation({
    container: document.getElementById("moon_ssnf"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/anims/Moon SSNF.json'
})

//--Moon Moxy--//

// Moon animation
var moon2_moxy = bodymovin.loadAnimation({
    container: document.getElementById("moon2_moxy"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/anims/Moon 2 SSNF.json'
})

//-Moon Unknown-//

//Moon animation
var moon3_unknown = bodymovin.loadAnimation({
    container: document.getElementById("moon3_unknown"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: '/anims/Moon 3 Unknown.json'
})


//-- Background Planet --//

var backgroundCover = bodymovin.loadAnimation({
    container: document.getElementById("background_planet"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: '/anims/works_halfPlanet.json'
})

