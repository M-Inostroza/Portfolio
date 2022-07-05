//Loader
const loader = document.querySelector('.loader');

//--Title Intro--//
const title_element = document.querySelector('.home-title-container');
const title_text = document.querySelector('.home-title');

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

// Container frame element
const planet_works_frame = document.getElementById("planet-works-frame");
// Floating text element
const works_frame_float = document.getElementById("works-frame-float");

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
    works_frame_anim.play()
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

// Container frame element
const planet_skills_frame = document.getElementById("planet-skills-frame");
// Floating window element
const window_skills = document.getElementById("skills-frame-float");

// Planet animation
var planet_skills = bodymovin.loadAnimation({
    container: document.getElementById("home-planet-skills"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/anims/home_planet_skills.json'
})

// Frame animation
const skills_frame_anim = bodymovin.loadAnimation({
  container: planet_skills_frame,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: '/anims/home_frame_skills.json'
});

// PLAY IN
planet_skills_frame.addEventListener('mouseenter', (e) => {
    skills_frame_anim.play();
    skills_frame_anim.setDirection(1);
    window_skills.style.opacity = 1;
    window_skills_anim.play()
})

// Floating window animation
var window_skills_anim = bodymovin.loadAnimation({
    container: window_skills,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: '/anims/home_skills_float.json'
})

// Reduces anim speed
window_skills_anim.setSpeed(0.7);


if(_queryTablet.matches || _queryPhone.matches) {
    skills_frame_anim.play();
    skills_frame_anim.setDirection(1);
    window_skills.style.opacity = 1;
    window_skills_anim.play()
}

//Click to scroll
planet_skills_frame.addEventListener('click', (e) => {
    var section_skills_container = document.querySelector('.skill-frame-container');
    section_skills_container.scrollIntoView({behavior: "smooth"})
})

// PLAY OUT
planet_skills_frame.addEventListener('mouseleave', (e) => {
    skills_frame_anim.setDirection(-1);
    skills_frame_anim.play();
    window_skills.style.opacity = 0;
})



//-----PLANET HIRE-----//

// Planet animation
var planet_hire = bodymovin.loadAnimation({
    container: document.getElementById("home-planet-contact"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/anims/planet_contact.json'
})

// Frame container
const contact_element = document.getElementById("planet-contact-frame");

// Frame animation
const frame_contact = bodymovin.loadAnimation({
    container: contact_element,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/anims/home_frame_contact.json'
})

// Floating window element
const window_hire = document.getElementById("contact-frame-float");

// PLAY IN
contact_element.addEventListener('mouseenter', (e) => {
    frame_contact.play();
    frame_contact.setDirection(1);
    window_hire.style.opacity = 1;
    window_hire_anim.play()
})

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







//Variables
const [...faders] = document.querySelectorAll('.skill-fader');
const [...tabTitles] = document.querySelectorAll("[data-title]");
let [...skillAvatars] = document.querySelectorAll('.skill-avatar');
let [...skillText] = document.querySelectorAll('.skill-text');
const frameElement = document.querySelector('.skill-frame-container');

//Queries
const _querySizeTablet = window.matchMedia('(max-width: 780px)');
const _querySizePhone = window.matchMedia('(max-width: 420px)');

//tabs
const designTab = document.querySelector('[data-design]')
const codeTab = document.querySelector('[data-code]')
const webTab = document.querySelector('[data-web]')

//Background planet
var planet_BG = bodymovin.loadAnimation({
    container: document.getElementById("planet-skills-BG"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/anims/skills_planet_BG.json'
})

//Expands the avatar frame
skillAvatars.forEach(avatar => {
    let openFrame = bodymovin.loadAnimation({
        container: avatar,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/anims/skill_avatar_open.json'
    })

    avatar.addEventListener('mouseover', () => {
        open_text_avatar(avatar, openFrame)
    })
    
    avatar.addEventListener('mouseleave', () => { 
        close_text_avatar(avatar, openFrame)
    })

    //Let the avatar open when element is in viewport
    if(_querySizeTablet.matches || _querySizePhone.matches) {
        const avatarObserver = new IntersectionObserver(entries=>{
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    open_text_avatar(entry.target, openFrame)
                } else {
                    close_text_avatar(entry.target, openFrame)
                }
            })
        })

        avatarObserver.observe(avatar)
    }
})


//Controls faders 
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        let translateX_value;
        let translateY_value;
        switch (entry.target.dataset.name) {
            case 'ps':
                translateX_value = 600
                if (_querySizeTablet.matches) {translateX_value = 400}
                if (_querySizePhone.matches) {
                    translateY_value = -170
                    translateX_value = 0
                }
                break;
            case 'ai':
                translateX_value = 500
                if (_querySizeTablet.matches) {translateX_value = 340}
                if (_querySizePhone.matches) {
                    translateY_value = -50
                    translateX_value = 0
                }
                break;
            case 'ae':
                translateX_value = 650
                if (_querySizeTablet.matches) {translateX_value = 440}
                if (_querySizePhone.matches) {
                    translateY_value = -130
                    translateX_value = 0
                }
                break;
            case 'fi':
                translateX_value = 700
                if (_querySizeTablet.matches) {translateX_value = 480}
                if (_querySizePhone.matches) {
                    translateY_value = -190
                    translateX_value = 0
                }
                break;
            case 'js':
                translateX_value = 550
                if (_querySizeTablet.matches) {translateX_value = 400}
                if (_querySizePhone.matches) {
                    translateY_value = -100
                    translateX_value = 0
                }
                break;
            case 'C#':
                translateX_value = 450
                if (_querySizeTablet.matches) {translateX_value = 260}
                if (_querySizePhone.matches) {
                    translateY_value = 60
                    translateX_value = 0
                }
                break;
            case 'Php':
                translateX_value = 350
                if (_querySizeTablet.matches) {translateX_value = 180}
                if (_querySizePhone.matches) {
                    translateY_value = 100
                    translateX_value = 0
                }
                break;
            case 'html':
                translateX_value = 800
                if (_querySizeTablet.matches) {translateX_value = 540}
                if (_querySizePhone.matches) {
                    translateY_value = -190
                    translateX_value = 0
                }
                break;
            case 'css':
                translateX_value = 750
                if (_querySizeTablet.matches) {translateX_value = 500}
                if (_querySizePhone.matches) {
                    translateY_value = -180
                    translateX_value = 0
                }
                break;
            case 'wp':
                translateX_value = 300
                if (_querySizeTablet.matches) {translateX_value = 190}
                if (_querySizePhone.matches) {
                    translateY_value = -60
                    translateX_value = 0
                }
                break;
        }
        anime({
            targets: entry.target,
            translateX: [0, translateX_value],
            translateY: [0, translateY_value],
            easing: 'easeInOutQuad',
            duration: 850,
            opacity: [0,1],
            delay: 200
        })
    })
});

faders.forEach(fader => {
    observer.observe(fader)
});

//Tabs mechanic
tabTitles.forEach(title => {
    title.addEventListener('click', () => {
        switch (title.dataset.title) {
            case 'design':
                frameElement.style.backgroundImage = "url(/images/skill_frame_UI_tab_1_svg.svg)";
                if (_querySizePhone.matches) {frameElement.style.backgroundImage = "url(/images/vertical_frame_1_svg.svg)";}
                delete title.dataset.back
                title.dataset.main = true;
                tabTitles[1].dataset.back = true;
                tabTitles[2].dataset.back = true;
                webTab.classList.add('noDisplay')
                codeTab.classList.add('noDisplay')
                designTab.classList.remove('noDisplay')
                break;
            case 'code':
                frameElement.style.backgroundImage = "url(/images/skill_frame_UI_tab_2_svg.svg)";
                if (_querySizePhone.matches) {frameElement.style.backgroundImage = "url(/images/vertical_frame_2_svg.svg)";}
                delete title.dataset.back
                title.dataset.main = true;
                tabTitles[0].dataset.back = true;
                tabTitles[2].dataset.back = true;
                codeTab.classList.remove('noDisplay')
                designTab.classList.add('noDisplay')
                webTab.classList.add('noDisplay')
                break;
            case 'web':
                frameElement.style.backgroundImage = "url(/images/skill_frame_UI_tab_3_svg.svg)";
                if (_querySizePhone.matches) {frameElement.style.backgroundImage = "url(/images/vertical_frame_3_svg.svg)";}
                delete title.dataset.back
                title.dataset.main = true;
                tabTitles[0].dataset.back = true;
                tabTitles[1].dataset.back = true;
                codeTab.classList.add('noDisplay')
                designTab.classList.add('noDisplay')
                webTab.classList.remove('noDisplay')
                break;
        }
    })
})

//------------------------------------------------------------------------//

//Functions
function open_text_avatar(avatar, anim) {
    switch (avatar.querySelector('.skill-text').textContent) {
        case 'Ps':
            skillText[0].textContent = 'Photoshop'
            anime({
                targets: skillText[0],
                opacity: [0,1],
                scale: 0.6,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;

        case 'Ai':
            skillText[1].textContent = 'Illustrator'
            anime({
                targets: skillText[1],
                opacity: [0,1],
                scale: 0.55,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;
        case 'Ae':
            skillText[2].textContent = 'After Effects'
            anime({
                targets: skillText[2],
                opacity: [0,1],
                scale: 0.6,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;
        case 'Fi':
            skillText[3].textContent = 'Figma'
            anime({
                targets: skillText[3],
                opacity: [0,1],
                scale: 0.7,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;
        case 'Js':
            skillText[4].textContent = 'Javascript'
            anime({
                targets: skillText[4],
                opacity: [0,1],
                scale: 0.6,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;
        case 'Wp':
            skillText[9].textContent = 'Wordpress'
            anime({
                targets: skillText[9],
                opacity: [0,1],
                scale: 0.6,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;
    }
    anim.setDirection(1)
    anim.play()
}

function close_text_avatar(avatar, anim) {
    switch (avatar.querySelector('.skill-text').textContent) {
        case 'Photoshop':
            anime({
                begin: ()=> {
                    skillText[0].textContent = 'Ps'
                },
                targets: skillText[0],
                opacity: [0,1],
                scale: 1,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;
        case 'Illustrator':
            anime({
                begin: ()=> {
                    skillText[1].textContent = 'Ai'
                },
                targets: skillText[1],
                opacity: [0,1],
                scale: 1,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;
        case 'After Effects':
            anime({
                begin: ()=> {
                    skillText[2].textContent = 'Ae'
                },
                targets: skillText[2],
                opacity: [0,1],
                scale: 1,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;
        case 'Figma':
            anime({
                begin: ()=> {
                    skillText[3].textContent = 'Fi'
                },
                targets: skillText[3],
                opacity: [0,1],
                scale: 1,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;
        case 'Javascript':
            anime({
                begin: ()=> {
                    skillText[4].textContent = 'Js'
                },
                targets: skillText[4],
                opacity: [0,1],
                scale: 1,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;
        case 'Wordpress':
                anime({
                    begin: ()=> {
                        skillText[9].textContent = 'Wp'
                    },
                    targets: skillText[9],
                    opacity: [0,1],
                    scale: 1,
                    duration: 200,
                    easing: 'easeInQuad'
                })
                break;
    
    }
    anim.setDirection(-1)
    anim.play()
}

//--Title Intro--//
const title_element_skills = document.querySelector('.title-skills-container');
const title_text_skills = document.querySelector('.title-skills')

//Opening and title display
const observerSkills = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            anime({
                targets: title_element_skills,
                scaleX: [0,1],
                opacity: [0,1],
                easing: 'easeInOutQuad',
                duration: 250,
                delay: 350,
                complete: ()=>{
                    anime({
                        targets: title_text_skills,
                        opacity: [0,1],
                        easing: 'easeInOutQuad',
                        duration: 250,
                        delay: 150
                    })
                }
            })
        } else {
            title_element_skills.style.opacity = 0;
            title_text_skills.style.opacity = 0;
        }
    });
});

observerSkills.observe(title_element_skills)











  //-----Works section-----//

const works_container = document.querySelector('.works-section')


const bulletTextsWeb = [
    "Research, Analysis & Planning",
    "UI/UX Design & Implementation",
    "Code & Database Development",
    "Testing, Integration & SEO",
    "Deployment & Analytics"
]

const bulletTextsSM = [
    "Asset development, implementation & management",
    "Content design, creation & edition",
    "Photography & Videography",
    "Content strategy & planning"
]

//Screen size query
const querySizeTablet = window.matchMedia('(max-width: 780px)');
const querySizePhone = window.matchMedia('(max-width: 420px)');

//Click invitation
const click_container = document.getElementById('frame-click')

const click_anim = bodymovin.loadAnimation({
    container: click_container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/anims/click.json'
})


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

const lock_img = document.querySelector('[data-lock]')


//-- Background Planet --//

var backgroundCover = bodymovin.loadAnimation({
    container: document.getElementById("background_planet"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: '/anims/works_halfPlanet.json'
})

//Arrow buttons
const buttons = document.querySelectorAll("[data-carousel-button]");

const moonTitle = document.querySelector('.moon-title'); //Title
window.onload = function changeText() {moonTitle.innerText = "SSNF"}

//Element in the center
const activeElement = document.querySelector('[data-moons]')

//Text elements
const textContainer = document.querySelector('.text-container');
const bulletPointContainer = document.querySelector('.bullet-point-container');
const bulletList = document.querySelector('.bullet-list');
let link = document.querySelector('.link-work')
let [...bulletPoints] = document.querySelectorAll('.bullet-point');

//Video elements
const videoContainer = document.querySelector('.video-container')
const videoElement = document.querySelector('.video')

//Elements that appear and dissapear in the background
let [...outElements] = document.querySelectorAll('[data-out]');
let [...inElements] = document.querySelectorAll('[data-in]')

//Deactivate click while anim is running
let canClick = true;
let isActive = false;

//Frame animation
var textFrame = bodymovin.loadAnimation({
    container: textContainer,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/anims/worksLoremFrame.json'
})

//Animates the active element on click
activeElement.addEventListener('click', ()=> {

    let centerElement = activeElement.querySelector('[data-active]')
    let leftElement = activeElement.querySelector('[data-left]')
    let rightElement = activeElement.querySelector('[data-right]')
    
    if(!isActive && canClick){
        //Moves the text when element selected
        anime({
            begin: () => {
                //Activates container
                setTimeout(() => {
                    textContainer.classList.remove('noDisplay')
                    bulletPointContainer.classList.remove('noDisplay')
                    textFrame.setDirection(1)
                    textFrame.setSpeed(1.5)
                    textFrame.play()
                }, 200);
            },
            targets: moonTitle,
            easing: "easeInOutQuad",
            duration: 250,
            translateY: -80,
            translateX: -80,
        });
        //Query tablet --- move text
        if(querySizeTablet.matches) {
            anime({
                begin: () => {
                    //Activates container
                    setTimeout(() => {
                        textContainer.classList.remove('noDisplay')
                        bulletPointContainer.classList.remove('noDisplay')
                        textFrame.setDirection(1)
                        textFrame.setSpeed(1.5)
                        textFrame.play()
                    }, 200);
                },
                targets: moonTitle,
                easing: "easeInOutQuad",
                duration: 250,
                translateY: 40,
                translateX: -60,
            });
        }
        //Query Phone --- move text
        if(querySizePhone.matches) {
            anime({
                begin: () => {
                    //Activates container
                    setTimeout(() => {
                        textContainer.classList.remove('noDisplay')
                        bulletPointContainer.classList.remove('noDisplay')
                        textFrame.setDirection(1)
                        textFrame.setSpeed(1.5)
                        textFrame.play()
                    }, 200);
                },
                targets: moonTitle,
                easing: "easeInOutQuad",
                duration: 250,
                translateY: 60,
                translateX: -100,
            });
        }

        
        //Creates Bulletpoints & play video
        if (centerElement.dataset.name == "ssnf") {
            videoContainer.style.display = 'flex';
            link.setAttribute('href',"https://shapeshifter-fitness.com/index.php")
            link.innerText = 'www.ssnf.de'
            link.style.display = 'flex';
            videoElement.setAttribute('src', '/videos/SSNF_prev.mp4')
            videoElement.play
            for (let i = 0; i < bulletTextsWeb.length; i++) {
                let element = document.createElement('p');
                element.innerText = bulletTextsWeb[i]
                element.classList.add('bullet-point')
                bulletList.appendChild(element)
            }
        } else if (centerElement.dataset.name == "moxy") {
            link.setAttribute('href',"https://www.instagram.com/moxycologneairport/")
            link.innerText = 'instagram.com/moxycologneairport'
            link.style.display = 'flex';
            videoContainer.style.display = 'flex';
            videoElement.setAttribute('src', '/videos/MOXY_prev.mp4')
            videoElement.play
            for (let i = 0; i < bulletTextsSM.length; i++) {
                let element = document.createElement('p');
                element.innerText = bulletTextsSM[i]
                element.classList.add('bullet-point')
                bulletList.appendChild(element)
            }
        } else if (centerElement.dataset.name == "unknown") {
            console.log('working on it...')
            lock_img.classList.remove('noDisplay')
        }

        //Shows the bulletpoints & video container
        anime({
            begin: ()=> {
                anime({
                    targets: videoContainer,
                    scaleY: [0,1],
                    delay: 350,
                    easing: 'easeInQuad',
                    duration: 130
                })
            },
            targets: bulletList.children,
            opacity: [0,1],
            duration: 500,
            easing: 'easeInQuad',
            delay: anime.stagger(200),
        })

        //Moves moon from center to left with scale
        anime({
            begin:  ()=>{canClick=false},
            targets: [centerElement, click_container],
            delay: 100,
            scale: 1.6,
            translateX: -250,
            easing: 'easeInOutQuad',
            duration: 350,
            complete: ()=>{
                canClick=true
            }    
        });
        //Query tablet --- Move moon
        if(querySizeTablet.matches) {
            anime({
                begin:  ()=>{canClick=false},
                targets: [centerElement, click_container],
                delay: 100,
                scale: 1.2,
                translateX: -210,
                translateY: 60,
                easing: 'easeInOutQuad',
                duration: 350,
                complete: ()=>{
                    canClick=true
                }    
            });
        }
        //Query phone --- Move moon
        if(querySizePhone.matches) {
            anime({
                begin:  ()=>{canClick=false},
                targets: [centerElement, click_container],
                delay: 100,
                scale: 1.2,
                translateY: -120,
                easing: 'easeInOutQuad',
                duration: 350,
                complete: ()=>{
                    canClick=true
                }    
            });
        }

        //Dissapear elements
        anime({
            begin: ()=>{isActive=true},
            targets: [outElements, leftElement, rightElement],
            opacity: [1,0],
            easing: 'easeInOutQuad',
            duration: 250,
            complete: () => {
                outElements.forEach(element => {
                    element.classList.toggle('noDisplay')
                });
                leftElement.classList.toggle('noDisplay')
                rightElement.classList.toggle('noDisplay')
            }
        })
    } else if (isActive && canClick) {

        //Scales the title down
        anime({
            begin: ()=> {
                anime({
                    targets: videoContainer,
                    scaleY: [1,0],
                    easing: 'easeOutQuad',
                    duration: 100
                })
                textFrame.setDirection(-1)
                textFrame.setSpeed(1.5)
                textFrame.play()
            },
            targets: moonTitle,
            scale: 1,
            easing: "easeInOutQuad",
            duration: 350,
            delay: 100,
            translateY: 0,
            translateX: 0,
            complete:()=> {
                videoContainer.style.display = 'none';
                link.style.display = 'none';
                textContainer.classList.add('noDisplay')
            }
        })

        //Hides & destroys the bulletpoints
        anime({
            targets: bulletPoints,
            opacity: [1,0],
            duration: 150,
            easing: 'easeOutQuad',
            complete: ()=>{
                let bulletChild = bulletList.lastElementChild;
                while (bulletChild) {
                bulletList.removeChild(bulletChild);
                bulletChild = bulletList.lastElementChild;}
                bulletPointContainer.classList.add('noDisplay')
            }
        })

        //Moves moon from left to center with scale
        anime({
            begin:  ()=>{canClick=false},
            targets: [centerElement, click_container],
            scale: 1,
            translateX: 0,
            easing: 'easeInOutQuad',
            delay: 100,
            duration: 350,
            complete: ()=>{
                canClick=true
            }
        });
        //Query tablet --- move moon
        if(querySizeTablet.matches) {
            anime({
                begin:  ()=>{canClick=false},
                targets: [centerElement, click_container],
                scale: 1,
                translateX: 0,
                translateY: 0,
                easing: 'easeInOutQuad',
                delay: 100,
                duration: 350,
                complete: ()=>{
                    canClick=true
                }
            });
        }

        //Display elements
        anime({
            begin: ()=>{
                isActive=false
                outElements.forEach(element => {
                    element.classList.toggle('noDisplay')
                });
                leftElement.classList.toggle('noDisplay')
                rightElement.classList.toggle('noDisplay')
                lock_img.classList.add('noDisplay')
            },
            targets: [outElements, leftElement, rightElement],
            delay: 100,
            opacity: [0, 1],
            duration: 450,
            easing: 'easeInOutQuad'
        })
    }
    
})


//-----Rotation mechanic-----//
buttons.forEach(button => {
    button.addEventListener('click', () =>{
        //Moon selector
        const moons = button.closest('[data-carousel]').querySelector("[data-moons]");

        //Moons variables
        let activeMoon = moons.querySelector("[data-active]")
        let leftMoon = moons.querySelector("[data-left]")
        let rightMoon = moons.querySelector("[data-right]")

        if (canClick) { 
            canClick = false;
            
            //Changes dataset according to button
            if (button.dataset.carouselButton === "next") {

                //Text Changing -- right to left
                anime({
                    targets: moonTitle,
                    translateX: [0,-150],
                    opacity: [1,0],
                    easing: 'easeInQuad',
                    duration: 400,
                    complete: () => {
                        moonTitle.innerText = rightMoon.dataset.name;
                        moonTitle.style.transform = 'initial';
                        moonTitle.style.opacity = 1;
                        anime({
                            targets: moonTitle,
                            translateX: [150,0],
                            opacity: [0,1],
                            easing: 'easeOutQuad',
                            duration: 400,
                        })
                    }
                })

                //----------Moon movement----------//
                
                
                //Center to left-down
                anime({
                    targets: activeMoon,
                    translateX: [0,-472],
                    translateY: [0,172],
                    opacity: [1,0.5,1],
                    easing: 'easeInOutQuad',
                    duration: 750,
                    complete: () => {
                        activeMoon.style.transform = 'initial';
                        delete activeMoon.dataset.active
                        rightMoon.dataset.active = true;
                        canClick = true;
                    }
                });
                //Query tablet --- Center to left-down
                if (querySizeTablet.matches) {
                    anime({
                        targets: activeMoon,
                        translateX: [0,-264],
                        translateY: [0,200],
                        opacity: [1,0.5,1],
                        easing: 'easeInOutQuad',
                        duration: 750,
                        complete: () => {
                            activeMoon.style.transform = 'initial';
                            delete activeMoon.dataset.active
                            rightMoon.dataset.active = true;
                            canClick = true;
                        }
                    });
                }
                //Query phone --- Center to left-down
                if (querySizePhone.matches) {
                    anime({
                        targets: activeMoon,
                        translateX: [0,-106],
                        translateY: [0,178],
                        opacity: [1,0.5,1],
                        easing: 'easeInOutQuad',
                        duration: 750,
                        complete: () => {
                            activeMoon.style.transform = 'initial';
                            delete activeMoon.dataset.active
                            rightMoon.dataset.active = true;
                            canClick = true;
                        }
                    });
                }

                //Left to right
                anime({
                    targets: leftMoon,
                    translateX: [0,948],
                    opacity: [1,0.5,1],
                    easing: 'easeInOutQuad',
                    duration: 750,
                    complete: () => {
                        leftMoon.style.transform = 'initial';
                        delete leftMoon.dataset.left
                        activeMoon.dataset.left = true;
                    }
                });
                //Query tablet --- Left to Right
                if (querySizeTablet.matches) {
                    anime({
                        targets: leftMoon,
                        translateX: [0,530],
                        opacity: [1,0.5,1],
                        easing: 'easeInOutQuad',
                        duration: 750,
                        complete: () => {
                            leftMoon.style.transform = 'initial';
                            delete leftMoon.dataset.left
                            activeMoon.dataset.left = true;
                        }
                    });
                }
                //Query phone --- Left to Right
                if (querySizePhone.matches) {
                    anime({
                        targets: leftMoon,
                        translateX: [0,210],
                        opacity: [1,0.5,1],
                        easing: 'easeInOutQuad',
                        duration: 750,
                        complete: () => {
                            leftMoon.style.transform = 'initial';
                            delete leftMoon.dataset.left
                            activeMoon.dataset.left = true;
                        }
                    });
                }

                //Down-right to center
                anime({
                    targets: rightMoon,
                    translateX: [0,-472],
                    translateY: [0,-172],
                    opacity: [1,0.5,1],
                    easing: 'easeInOutQuad',
                    duration: 750,
                    complete: () => {
                        rightMoon.style.transform = 'initial';
                        delete rightMoon.dataset.right
                        leftMoon.dataset.right = true;
                    }
                });
                //Query tablet Down-right to center
                if (querySizeTablet.matches) {
                    anime({
                        targets: rightMoon,
                        translateX: [0,-264],
                        translateY: [0,-200],
                        opacity: [1,0.5,1],
                        easing: 'easeInOutQuad',
                        duration: 750,
                        complete: () => {
                            rightMoon.style.transform = 'initial';
                            delete rightMoon.dataset.right
                            leftMoon.dataset.right = true;
                        }
                    });
                }
                //Query Phone Down-right to center
                if (querySizePhone.matches) {
                    anime({
                        targets: rightMoon,
                        translateX: [0,-106],
                        translateY: [0,-178],
                        opacity: [1,0.5,1],
                        easing: 'easeInOutQuad',
                        duration: 750,
                        complete: () => {
                            rightMoon.style.transform = 'initial';
                            delete rightMoon.dataset.right
                            leftMoon.dataset.right = true;
                        }
                    });
                }

                activeObject = activeMoon
            } else {

                //Text Changing -- left to right
                anime({
                    targets: moonTitle,
                    translateX: 150,
                    opacity: 0,
                    easing: 'easeInQuad',
                    duration: 400,
                    complete: () => {
                        moonTitle.innerText = leftMoon.dataset.name;
                        moonTitle.style.transform = 'initial';
                        moonTitle.style.opacity = 1;
                        anime({
                            targets: moonTitle,
                            translateX: [-150,0],
                            opacity: [0,1],
                            easing: 'easeOutQuad',
                            duration: 400,
                        })
                    }
                })

                //Center to right-down
                anime({
                    targets: activeMoon,
                    translateX: [0,472],
                    translateY: [0,172],
                    opacity: [1,0.5,1],
                    easing: 'easeInOutQuad',
                    duration: 750,
                    complete: () => {
                        activeMoon.style.transform = 'initial';
                        delete activeMoon.dataset.active
                        activeMoon.dataset.right = true;
                        canClick = true;
                    }
                });
                //Query tablet --- Center to Right-down
                if(querySizeTablet.matches) {
                    anime({
                        targets: activeMoon,
                        translateX: [0,264],
                        translateY: [0,200],
                        opacity: [1,0.5,1],
                        easing: 'easeInOutQuad',
                        duration: 750,
                        complete: () => {
                            activeMoon.style.transform = 'initial';
                            delete activeMoon.dataset.active
                            activeMoon.dataset.right = true;
                            canClick = true;
                        }
                    });
                }
                //Query phone --- Center to Right-down
                if(querySizePhone.matches) {
                    anime({
                        targets: activeMoon,
                        translateX: [0,106],
                        translateY: [0,178],
                        opacity: [1,0.5,1],
                        easing: 'easeInOutQuad',
                        duration: 750,
                        complete: () => {
                            activeMoon.style.transform = 'initial';
                            delete activeMoon.dataset.active
                            activeMoon.dataset.right = true;
                            canClick = true;
                        }
                    });
                }

                //Right to left
                anime({
                    targets: rightMoon,
                    translateX: [0,-948],
                    opacity: [1,0.5,1],
                    easing: 'easeInOutQuad',
                    duration: 750,
                    complete: () => {
                        rightMoon.style.transform = 'initial';
                        delete rightMoon.dataset.right
                        rightMoon.dataset.left = true;
                    }
                });
                //Query tablet --- Right to left
                if(querySizeTablet.matches) {
                    anime({
                        targets: rightMoon,
                        translateX: [0,-530],
                        opacity: [1,0.5,1],
                        easing: 'easeInOutQuad',
                        duration: 750,
                        complete: () => {
                            rightMoon.style.transform = 'initial';
                            delete rightMoon.dataset.right
                            rightMoon.dataset.left = true;
                        }
                    });
                }
                //Query phone --- Right to left
                if(querySizePhone.matches) {
                    anime({
                        targets: rightMoon,
                        translateX: [0,-210],
                        opacity: [1,0.5,1],
                        easing: 'easeInOutQuad',
                        duration: 750,
                        complete: () => {
                            rightMoon.style.transform = 'initial';
                            delete rightMoon.dataset.right
                            rightMoon.dataset.left = true;
                        }
                    });
                }
                

                //Down-left to center
                anime({
                    targets: leftMoon,
                    translateX: [0,472],
                    translateY: [0,-172],
                    opacity: [1,0.5,1],
                    easing: 'easeInOutQuad',
                    duration: 750,
                    complete: () => {
                        leftMoon.style.transform = 'initial';
                        delete leftMoon.dataset.left;
                        leftMoon.dataset.active = true;
                    }
                });
                //Query tablet --- Down-left to center
                if(querySizeTablet.matches) {
                    anime({
                        targets: leftMoon,
                        translateX: [0,264],
                        translateY: [0,-200],
                        opacity: [1,0.5,1],
                        easing: 'easeInOutQuad',
                        duration: 750,
                        complete: () => {
                            leftMoon.style.transform = 'initial';
                            delete leftMoon.dataset.left;
                            leftMoon.dataset.active = true;
                        }
                    });
                }
                //Query phone --- Down-left to center
                if(querySizePhone.matches) {
                    anime({
                        targets: leftMoon,
                        translateX: [0,106],
                        translateY: [0,-178],
                        opacity: [1,0.5,1],
                        easing: 'easeInOutQuad',
                        duration: 750,
                        complete: () => {
                            leftMoon.style.transform = 'initial';
                            delete leftMoon.dataset.left;
                            leftMoon.dataset.active = true;
                        }
                    });
                }
            }    
        }
    })
})


//--Title Intro--//
const title_element_works = document.querySelector('.title-works-container');
const title_text_works = document.querySelector('.title-works')

//Opening and title display
const observerWorks = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            anime({
                targets: title_element_works,
                scaleX: [0,1],
                opacity: [0,1],
                easing: 'easeInOutQuad',
                duration: 250,
                delay: 350,
                complete: ()=>{
                    anime({
                        targets: title_text_works,
                        opacity: [0,1],
                        easing: 'easeInOutQuad',
                        duration: 250,
                        delay: 150
                    })
                }
            })
        } else {
            title_element_works.style.opacity = 0;
            title_text_works.style.opacity = 0;
        }
    });
});

observerWorks.observe(title_element_works)





//Variables
const submit_button = document.querySelector('.submit-button');

const name_input = document.getElementById('name');
const lastName_input = document.getElementById('lastName');
const email_input = document.getElementById('email');
const message_input = document.getElementById('message');

const lock_data = document.querySelector('.lock');
const privacy_data = document.querySelector('.data-container');

const form_container = document.querySelector('.form-container')
const form = document.querySelector('.grid-form')

let can_submit;
document.addEventListener('load', ()=>{
    !can_submit
})

form.addEventListener('keyup', ()=> {
    if (name_input.value === '' || name_input.value == null
        || lastName_input.value === '' || lastName_input.value == null
        || email_input.value === '' || email_input.value == null
        || message_input.value === '' || message_input.value == null)
        {
        can_submit = false;
        submit_button.classList.add('disabled');
        submit_button.classList.remove('enabled');
    }
    else {
        can_submit = true;
        submit_button.classList.add('enabled')
        submit_button.classList.remove('disabled')
    }
})

form.addEventListener('submit', (e)=>{
    if (!can_submit) {
        e.preventDefault()
    }
})

var planet_anim = bodymovin.loadAnimation({
    container: document.getElementById("contact-planet"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/anims/contact_halfPlanet.json'
})


const title_element_contact = document.querySelector('.title-contact-container');
const title_text_contact = document.querySelector('.title-contact')


//Opening and title display
const observerContact = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            anime({
                targets: title_element_contact,
                scaleX: [0,1],
                opacity: [0,1],
                easing: 'easeInOutQuad',
                duration: 250,
                delay: 350,
                complete: ()=>{
                    anime({
                        targets: title_text_contact,
                        opacity: [0,1],
                        easing: 'easeInOutQuad',
                        duration: 250,
                        delay: 150
                    })
                }
            })
        } else {
            title_element_contact.style.opacity = 0;
            title_text_contact.style.opacity = 0;
        }
    });
});

observerContact.observe(title_element_contact);

lock_data.addEventListener('click', ()=> {
    
    privacy_data.classList.toggle('noDisplay')
    form_container.classList.toggle('noDisplay')
    anime({
        targets: privacy_data,
        scaleX: [0,1],
        easing: 'easeInOutQuad',
        duration: 200
    })
})