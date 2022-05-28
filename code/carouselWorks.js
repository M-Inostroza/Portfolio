//-----Works moon carousel-----//

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

console.log("Welcome, dear traveller... feel free to inspect everything!")

//Arrows
const buttons = document.querySelectorAll("[data-carousel-button]");

//Title + update onload
const moonTitle = document.querySelector('.moon-title');
window.onload = function changeText() {moonTitle.innerText = "SSNF"}

//Active Moon
const activeElement = document.querySelector('[data-moons]')
console.log(activeElement.children)

//Text elements
const textContainer = document.querySelector('.text-container');
const bulletPointContainer = document.querySelector('.bullet-point-container');
const bulletList = document.querySelector('.bullet-list');
let [...bulletPoints] = document.querySelectorAll('.bullet-point');

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
        //Scales the title up
        anime({
            begin: () => {
                //Activates text container
                setTimeout(() => {
                    textContainer.classList.remove('noDisplay')
                    bulletPointContainer.classList.remove('noDisplay')
                    textFrame.setDirection(1)
                    textFrame.setSpeed(1.5)
                    textFrame.play()
                }, 200);
            },
            targets: moonTitle,
            scale: 1.8,
            easing: "easeInOutQuad",
            duration: 250,
            translateY: -60,
            translateX: 20,
        })

        
        //Creates Bulletpoints
        if (centerElement.dataset.name == "ssnf") {
            for (let i = 0; i < bulletTextsWeb.length; i++) {
                let element = document.createElement('p');
                element.innerText = bulletTextsWeb[i]
                element.classList.add('bullet-point')
                bulletList.appendChild(element)
            }
        } else if (centerElement.dataset.name == "moxy") {
            for (let i = 0; i < bulletTextsSM.length; i++) {
                let element = document.createElement('p');
                element.innerText = bulletTextsSM[i]
                element.classList.add('bullet-point')
                bulletList.appendChild(element)
            }
        } else if (centerElement.dataset.name == "unknown") {
            
        }

        //Shows the bulletpoints
        anime({
            targets: bulletList.children,
            opacity: [0,1],
            duration: 500,
            easing: 'easeInQuad',
            delay: anime.stagger(200),
        })

        //Moves moon from center to left with scale
        anime({
            begin:  ()=>{canClick=false},
            targets: centerElement,
            delay: 100,
            scale: 2.3,
            translateX: -250,
            easing: 'easeInOutQuad',
            duration: 350,
            complete: ()=>{
                canClick=true
            }    
        })

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
            targets: centerElement,
            scale: 1,
            translateX: 0,
            easing: 'easeInOutQuad',
            delay: 100,
            duration: 350,
            complete: ()=>{
                canClick=true
            }
        })

        //Display elements
        anime({
            begin: ()=>{
                isActive=false
                outElements.forEach(element => {
                    element.classList.toggle('noDisplay')
                });
                leftElement.classList.toggle('noDisplay')
                rightElement.classList.toggle('noDisplay')
            },
            targets: [outElements, leftElement, rightElement],
            delay: 100,
            opacity: [0, 1],
            duration: 450,
            easing: 'easeInOutQuad'
        })
    }
    
})

//Loop buttons
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

                //-----Moon movement-----//
                
                //Center to left-down
                anime({
                    targets: activeMoon,
                    translateX: [0,-615],
                    translateY: [0,190],
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

                //Left to right
                anime({
                    targets: leftMoon,
                    translateX: [0,1230],
                    opacity: [1,0.5,1],
                    easing: 'easeInOutQuad',
                    duration: 750,
                    complete: () => {
                        leftMoon.style.transform = 'initial';
                        delete leftMoon.dataset.left
                        activeMoon.dataset.left = true;
                    }
                });

                //Down-right to center
                anime({
                    targets: rightMoon,
                    translateX: [0,-615],
                    translateY: [0,-190],
                    opacity: [1,0.5,1],
                    easing: 'easeInOutQuad',
                    duration: 750,
                    complete: () => {
                        rightMoon.style.transform = 'initial';
                        delete rightMoon.dataset.right
                        leftMoon.dataset.right = true;
                    }
                });  
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
                    translateX: [0,615],
                    translateY: [0,190],
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

                //Right to left
                anime({
                    targets: rightMoon,
                    translateX: [0,-1230],
                    opacity: [1,0.5,1],
                    easing: 'easeInOutQuad',
                    duration: 750,
                    complete: () => {
                        rightMoon.style.transform = 'initial';
                        delete rightMoon.dataset.right
                        rightMoon.dataset.left = true;
                    }
                });

                //Down-left to center
                anime({
                    targets: leftMoon,
                    translateX: [0,615],
                    translateY: [0,-190],
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
    })
})



