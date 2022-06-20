//-----Works section-----//

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


