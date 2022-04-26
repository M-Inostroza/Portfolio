
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


//-----Shifting text-----//

const jumpWords = ["make", "design", "prototype", "build", "imagine"];

const jumpElement = document.getElementById("description-jumper");

//Changes the text every 2 seconds

setInterval(() => {
    let counter = 0;
    jumpElement.innerText = jumpWords[counter];

    counter++
    //Fix switch for colors
    switch (counter) {
        case 0:
            jumpElement.style.color = "#B1B1BC";
            break;
        case 1:
            jumpElement.style.color = "#EEC6DD";
            break;
        case 2:
            jumpElement.style.color = "#CEB3E0";
            break;
        case 3:
            jumpElement.style.color = "#FFFFFF";
            break;
        case 4:
            jumpElement.style.color = "#7A0BC0";
            break;
    }
    //Add anim translate
    if (counter == 5) {
        counter = 0;
    }
    
}, 2000);
