
//Index:
//--Queries--
//--Loader--
//--Titles--
//--Load Func--

let section_state = 'home';

//Back Button
const back_button = document.querySelector('.back-button');

//Queries
const _queryTablet = window.matchMedia('(max-width: 780px)');
const _queryPhone = window.matchMedia('(max-width: 420px)');

//Loader
const loader = document.querySelector('.loader');
const loader_anim = bodymovin.loadAnimation({
    container: loader,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/anims/loader.json'
});


//--Title Home--//
const title_element = document.getElementById('home-title-container');
const title_frame_anim = bodymovin.loadAnimation({
    container: title_element,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/anims/new_frame_titel.json'
});
const title_text = document.querySelector('.home-title');

//--Title Works--//
const title_element_works = document.getElementById('title-works-container');
const title_element_works_anim = bodymovin.loadAnimation({
    container: title_element_works,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/anims/new_frame_titel.json'
});

const title_text_works = document.querySelector('.title-works');

//Waits until content is loaded before showing site
window.addEventListener('load', () => {

    const intro_timeline = anime.timeline({
        easing: 'easeOutQuad',
        loop: false
    });

    intro_timeline.add({
        targets: loader,
        opacity: [1,0],
        complete: () => {
        loader.style.display = 'none';
        }
    }, 0).add({
        //Galaxy
        targets: galaxy_element,
        translateY: [800, 0],
        scale: [0.6,1.2],
        duration: 2000,
        delay: 300
    }, 0).add({
        targets: [planet_skills_container, planet_contact_element, planet_works_element],
        translateY: [-800, 0],
        duration: 1600,
        delay:300,
        complete: () => {
            title_frame_anim.play();
        }
    }, 0).add({
        targets: title_text,
        opacity: [0,1]
    }, 3500)
    intro_timeline.play();
});

//Galaxy
const galaxy_element = document.getElementById('galaxy');
var galaxy_anim = bodymovin.loadAnimation({
    container: galaxy_element,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/anims/galaxy.json',
});
galaxy_anim.setSpeed(0.65);

//Work-UI
const work_section_element = document.querySelector('.UI-works');

//Contact-UI
const contact_section_element = document.querySelector('.UI-contact');
const form_element = document.querySelector('.contact-wrap');

//Deactivate anim 
let can_animate = true;

//PLANET WORKS//

//Container planet element
const planet_works_element = document.getElementById("home-planet-works");
// Container frame element
const planet_works_frame = document.getElementById("planet-works-frame");
// Floating text element
const works_frame_float = document.getElementById("works-frame-float");


// Planet animation
var planet_works = bodymovin.loadAnimation({
    container: planet_works_element,
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

// Floating window animation
var works_float_anim = bodymovin.loadAnimation({
    container: works_frame_float,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/anims/home_works_float.json'
  })

// Adjust frame speed
works_frame_anim.setSpeed(2.5)

// PLAY IN
planet_works_frame.addEventListener('mouseenter', () => {
    if (can_animate) {
        works_frame_anim.setDirection(1)
        works_frame_anim.play()
        works_frame_float.style.opacity = 1;
        section_state = 'works';
    }; 
})

//Queries
if(_queryTablet.matches || _queryPhone.matches) {
    works_frame_anim.setDirection(1)
    works_frame_anim.play()
    works_frame_float.style.opacity = 1;
    works_frame_anim.play()
}

// PLAY OUT
planet_works_frame.addEventListener('mouseleave', () => {
    works_frame_anim.setDirection(-1)
    works_frame_anim.play()
    works_frame_float.style.opacity = 0;
})






//PLANET SKILLS//

// Container frame element
const planet_skills_frame = document.getElementById("planet-skills-frame");
// Floating window element
const window_skills = document.getElementById("skills-frame-float");

const planet_skills_container = document.getElementById("home-planet-skills");

// Planet animation
var planet_skills = bodymovin.loadAnimation({
    container: planet_skills_container,
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

// Floating window animation
var window_skills_anim = bodymovin.loadAnimation({
    container: window_skills,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: '/anims/home_skills_float.json'
})

// PLAY IN
planet_skills_frame.addEventListener('mouseenter', (e) => {
    skills_frame_anim.play();
    skills_frame_anim.setDirection(1);
    window_skills.style.opacity = 1;
    window_skills_anim.play()
})

// Reduces anim speed
window_skills_anim.setSpeed(0.7);


if(_queryTablet.matches || _queryPhone.matches) {
    skills_frame_anim.play();
    skills_frame_anim.setDirection(1);
    window_skills.style.opacity = 1;
    window_skills_anim.play()
}

// PLAY OUT
planet_skills_frame.addEventListener('mouseleave', (e) => {
    skills_frame_anim.setDirection(-1);
    skills_frame_anim.play();
    window_skills.style.opacity = 0;
});



//PLANET HIRE//

const planet_contact_element = document.getElementById("home-planet-contact");

// Planet animation
var planet_hire = bodymovin.loadAnimation({
    container: planet_contact_element,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/anims/planet_contact.json'
});

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
    section_state = 'contact';
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

// PLAY OUT
contact_element.addEventListener('mouseleave', (e) => {
    frame_contact.setDirection(-1);
    frame_contact.play();
    window_hire.style.opacity = 0;
})




//Buttons//

//Works
planet_works_frame.addEventListener('click', () => {
    home_to_works()
    can_animate = false;
    planet_works_element.style.pointerEvents = 'none';
    back_button.classList.toggle('noDisplay');
})

//Skills
planet_skills_frame.addEventListener('click', () => {
    home_to_skills()
    can_animate = false;
    planet_skills_container.style.pointerEvents = 'none';
    back_button.classList.toggle('noDisplay');
})

//Contact
contact_element.addEventListener('click', () => {
    home_to_contact();
    can_animate = false;
    contact_element.style.pointerEvents = 'none';
    back_button.classList.toggle('noDisplay');
})

//Back
back_button.addEventListener('click', () => {
    can_animate = true;
    back_button.classList.toggle('noDisplay');
    switch (section_state) {
        case 'works':
            works_to_home();
            break;
        case 'skills':
            skills_to_home();
            break;
        case 'contact':
            contact_to_home();
            contact_element.style.pointerEvents = 'all';
            break;
    }
})



//-----Shifting text-----//




//-Works section-//

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
const moon_moxy = document.getElementById('moon2_moxy');
const moon2_moxy = bodymovin.loadAnimation({
    container: moon_moxy,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/anims/Moon 2 SSNF.json'
})

//-Moon Unknown-//

//Moon animation
const moon3_unknown = bodymovin.loadAnimation({
    container: document.getElementById("moon3_unknown"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: '/anims/Moon 3 Unknown.json'
})

const lock_img = document.querySelector('[data-lock]')


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



//-Skills section-//
const skill_section = document.querySelector('.UI-skills');
const title_element_skills = document.getElementById('title-skills-container');
const title_frame_skills_anim = bodymovin.loadAnimation({
    container: title_element_skills,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/anims/new_frame_titel.json'
});
const title_text_skills = document.querySelector('.title-skills')



//-Contact section-//
const title_element_contact = document.getElementById('title-contact-container');
const title_frame_contact_anim = bodymovin.loadAnimation({
    container: title_element_contact,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '/anims/new_frame_titel.json'
});
const title_text_contact = document.querySelector('.title-contact');

//Variables
const submit_button = document.querySelector('.submit-button');

const name_input = document.getElementById('name');
const lastName_input = document.getElementById('lastName');
const email_input = document.getElementById('email');
const message_input = document.getElementById('message');

const lock_data = document.querySelector('.lock');
const privacy_data = document.querySelector('.data-container');

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


//Functions//

//Works section
function home_to_works() {

        let speedOpen = 1;
        let speedClose = 2;
    
        title_frame_anim.setDirection(-1);
        title_frame_anim.setSpeed(speedClose);
        title_frame_anim.play();
    
        work_section_element.classList.toggle('noDisplay');
    
        let transition_works_timeline = anime.timeline({
            easing: 'easeOutQuad',
        })
    
        transition_works_timeline.add({
            targets: title_element,
            opacity: [1,0],
            duration: 50
        }, 300).add({
            targets: planet_skills_container,
            translateX: [0, 800],
            scale: [1, 1.5],
            complete: () => {
                planet_skills_container.classList.toggle('noDisplay');
            }
        }, 0).add({
            targets: planet_contact_element,
            translateX: [0, 800],
            translateY: [0, 500],
            scale: [1, 1.5],
            complete: () => {planet_contact_element.classList.toggle('noDisplay')}
        }, 0).add({
            //Galaxy
            targets: galaxy_element,
            translateX: [0, 200],
            translateY: [0, 200],
            scale: [1.2, 1.6],
        }, 0).add({
            targets: planet_works_element,
            begin: () => { 
                planet_works_element.style.left = '50%';
                planet_works_element.style.top = '100%';
            },
            scale: [1, 3.4],
        }, 0).add({
            targets: title_text,
            opacity: [1,0],
            duration: 200
        }, 0).add({
            begin: () => {
                title_element_works.classList.toggle('noDisplay');
            },
            targets: title_element_works,
            opacity: [0,1],
            duration: 100,
            complete: () => {
            //Open title anim
            title_element_works_anim.setDirection(1);
            title_element_works_anim.setSpeed(speedOpen);
            title_element_works_anim.play();
            }
        }, 500).add({
            targets: title_text_works,
            opacity: [0,1],
        }, 1900).add({
            targets: work_section_element,
            opacity: [0,1],
        }, 400).add({
           targets: moon_moxy,
           translateX: [-800, 0], 
        }, 200);
        //Plays timeline
        transition_works_timeline.play();

        
}
function works_to_home() {
        planet_works_element.style.pointerEvents = 'all';

        title_element_works_anim.setDirection(-1);
        title_element_works_anim.setSpeed(3);
        title_element_works_anim.play();
    
        title_frame_anim.setDirection(1);
        title_frame_anim.setSpeed(1);
        title_frame_anim.play();
    
        title_text_works.style.opacity = 0;
    
        var transition_home_timeline = anime.timeline({
            easing: 'easeOutQuad',
            duration: 1000
        })
    
        transition_home_timeline.add({
            //Planet Skills
            begin: () => {planet_skills_container.classList.toggle('noDisplay');},
            targets: planet_skills_container,
            translateX: [800, 0],
            scale: [1.5, 1],
            }, 0).add({
                //Planet Contact
                begin: () => {{planet_contact_element.classList.toggle('noDisplay')}},
                targets: planet_contact_element,
                translateX: [800, 0],
                translateY: [500, 0],
                scale: [1.5, 1]
            }, 0).add({
                //Galaxy
                targets: galaxy_element,
                translateX: [200, 0],
                translateY: [200, 0],
                scale: [1.6, 1.2],
            }, 0).add({
                //Planet Works
                targets: planet_works_element,
                begin: () => { 
                    planet_works_element.style.left = '20%';
                    planet_works_element.style.top = '32%';
                },
                scale: [3.4, 1],
            }, 0).add({
                //Title element
                targets: title_element_works,
                opacity: [1,0],
                duration: 600,
                complete:() => {
                    title_element_works.classList.toggle('noDisplay');
                }
            }, 200).add({
                targets: work_section_element,
                opacity: [1,0],
                duration: 200,
                complete:() => {
                    work_section_element.classList.toggle('noDisplay');
                }
            }, 0).add({
                targets: title_element,
                opacity: [0,1],
            }, 0).add({
                targets: title_text,
                opacity: [0,1]
            })
        
            transition_home_timeline.play()
} 

//Skills section
function home_to_skills() {
        section_state = 'skills';
    
        title_frame_anim.setDirection(-1);
        title_frame_anim.setSpeed(2.6);
        title_frame_anim.play();
    
        var transition_skills_timeline = anime.timeline({
            easing: 'easeInOutQuad',
            duration: 1200
        })
        transition_skills_timeline.add({
            targets: planet_skills_container,
            translateX: [0, -1400],
            translateY: [0, 800],
            scale: [1, 4],
        }, 0).add({
            targets: planet_contact_element,
            translateX: [0, -1200],
            translateY: [0, 1200],
            scale: [1, 1.5],
            complete: () => {planet_contact_element.classList.toggle('noDisplay')}
        }, 0).add({
            targets: planet_works_element,
            translateX: [0, -1200],
            translateY: [0, 800],
            scale: [1, 1.5],
            complete: () => {planet_contact_element.classList.toggle('noDisplay')}
        }, 0).add({
            //Galaxy
            targets: galaxy_element,
            translateX: [0, -300],
            translateY: [0, 300],
            scale: [1.2, 1.4],
        }, 0).add({
            begin: ()=> {skill_section.classList.toggle('noDisplay')},
            targets: skill_section,
            opacity: [0, 1],
            duration: 600,
            complete: () => {
                title_frame_skills_anim.setDirection(1);
                title_frame_skills_anim.setSpeed(2)
                title_frame_skills_anim.play();
            }
        }, 0).add({
            targets: title_element,
            opacity: [1,0],
            duration: 200,
        }, 50).add({
            targets: title_text,
            opacity: [1,0],
            duration: 200
        }, 100).add({
            targets: title_text_skills,
            opacity: [0,1],
            duration: 200
        }, 1000)
    
        transition_skills_timeline.play();
}
function skills_to_home() {
        
        planet_skills_container.style.pointerEvents = 'all';
        //Closes title
        title_frame_skills_anim.setDirection(-1);
        title_frame_skills_anim.setSpeed(2)
        title_frame_skills_anim.play();
        title_text_skills.style.opacity = 0;
    
        var transition_skills_timeline = anime.timeline({
            easing: 'easeInOutQuad',
            duration: 1200
        })
        transition_skills_timeline.add({
            //Planet Skills
            targets: planet_skills_container,
            translateX: [-1400, 0],
            translateY: [800, 0],
            scale: [4, 1],
        }, 0).add({
            //Planet Contact
            targets: planet_contact_element,
            translateX: [-1200, 0],
            translateY: [1200, 0],
            scale: [1.5, 1],
            complete: () => {planet_contact_element.classList.toggle('noDisplay')}
        }, 0).add({
            //Planet Works
            targets: planet_works_element,
            translateX: [-1400, 0],
            translateY: [800, 0],
            scale: [1.5, 1],
            complete: () => {
                planet_contact_element.classList.toggle('noDisplay')
            }
        }, 0).add({
            //Galaxy
            targets: galaxy_element,
            translateX: [-300, 0],
            translateY: [300, 0],
            scale: [1.4, 1.2],
        }, 0).add({
            //Skill Section
            targets: skill_section,
            opacity: [1,0],
            duration: 1000,
            complete: ()=> {
                skill_section.classList.toggle('noDisplay');
            }
        }, 0).add({
            targets: title_element,
            opacity: [0,1],
            duration: 200,
            complete: ()=> {
                title_frame_anim.setDirection(1);
                title_frame_anim.setSpeed(1);
                title_frame_anim.play();
            }
        }, 500).add({
            targets: title_text,
            opacity: [0,1],
            duration: 400
        }, 1800)
    
        transition_skills_timeline.play();
        
}

//Contact section
function home_to_contact() {

    section_state = 'contact';

    title_frame_anim.setDirection(-1);
    title_frame_anim.setSpeed(2.6);
    title_frame_anim.play();

    contact_section_element.classList.toggle('noDisplay');

    const transition_contact_timeline = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 1000
    })

    transition_contact_timeline.add({
        targets: [planet_works_element, planet_skills_container],
        translateY: -700,
        duration: 800,
        complete: () => {
            planet_works_element.classList.toggle('noDisplay');
            planet_skills_container.classList.toggle('noDisplay');
        }
    }, 0).add({
        targets: title_element,
        opacity: [1,0],
        duration: 100,
        complete: () => {
            title_frame_contact_anim.setDirection(1);
            title_frame_contact_anim.setSpeed(1);
            title_frame_contact_anim.play();
        }
    }, 300).add({
        targets: title_text,
        opacity: [1,0],
        duration: 200,
    }, 100).add({
        //Galaxy
        targets: galaxy_element,
        translateY: -300,
        translateX: -300,
        scale: [1.2,1.6],
        duration: 1500
    }, 0).add({
        targets: planet_contact_element,
        scale: [1, 2],
        translateY: [0, -250],
        translateX: [0, 120],
        duration: 800
    }, 0).add({
        targets: form_element,
        translateY: [500, 0],
        opacity: [0,1]
    }, 0).add({
        targets: title_text_contact,
        opacity: [0,1]
    }, 700)

    transition_contact_timeline.play();
}
function contact_to_home() {

    section_state = 'home';

    title_frame_contact_anim.setDirection(-1);
    title_frame_contact_anim.setSpeed(3);
    title_frame_contact_anim.play();

    planet_works_element.classList.toggle('noDisplay');
    planet_skills_container.classList.toggle('noDisplay');

    const transition_contact_timeline = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 1000
    })

    transition_contact_timeline.add({
        targets: [planet_works_element, planet_skills_container],
        translateY: [-700, 0],
        duration: [800,0],
    }, 0).add({
        targets: title_element,
        opacity: [0,1],
        duration: 100,
        complete: () => {
            title_frame_anim.setDirection(1);
            title_frame_anim.setSpeed(1);
            title_frame_anim.play();
            contact_section_element.classList.toggle('noDisplay');
        }
    }, 800).add({
        targets: title_text,
        opacity: [0,1],
        duration: 200,
    }, 1500).add({
        //Galaxy
        targets: galaxy_element,
        translateY: [-300, 0],
        translateX: [-300, 0],
        scale: [1.6,1.2],
        duration: 1500,
    }, 0).add({
        targets: planet_contact_element,
        scale: [2,1],
        translateY: [-250,0],
        translateX: [100,0],
        duration: 800
    }, 0).add({
        targets: title_text_contact,
        opacity: [1,0]
    }, 0).add({
        targets: form_element,
        translateY: [0, 500],
        opacity: [1,0]
    }, 0)

    transition_contact_timeline.play();
}