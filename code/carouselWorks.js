//-----Works moon carousel-----//
console.log("Welcome, dear traveller... feel free to inspect everything!")

const buttons = document.querySelectorAll("[data-carousel-button]");

const moonTitle = document.querySelector('.moon-title');

const activeElement = document.querySelector('[data-moons]')

//Elements that dissapear in the background
let [...outElements] = document.querySelectorAll('[data-out]');
let [...inElements] = document.querySelectorAll('[data-in]')

window.onload = function changeText() {moonTitle.innerText = "SSNF"}

//Deactivate while anim is running
let canClick = true;
let isActive = false;

//Animates the active element on click
activeElement.addEventListener('click', ()=> {

    let centerElement = activeElement.querySelector('[data-active]')
    let leftElement = activeElement.querySelector('[data-left]')
    let rightElement = activeElement.querySelector('[data-right]')
    
    if(!isActive && canClick){
        //Moves the title in
        anime({
            targets: moonTitle,
            scale: 1.8,
            easing: "easeInOutQuad",
            duration: 350,
            translateY: -35,
            translateX: 120
        })

        //Move from center to left with scale
        anime({
            begin:  ()=>{canClick=false},
            targets: centerElement,
            scale: 2.3,
            translateX: -250,
            easing: 'easeInOutQuad',
            duration: 450,
            complete: ()=>{canClick=true}    
        })

        //Dissapear elements
        anime({
            begin: ()=>{isActive=true},
            targets: [outElements, leftElement, rightElement],
            opacity: [1,0],
            easing: 'easeInOutQuad',
            duration: 350,
            complete: () => {
                outElements.forEach(element => {
                    element.classList.toggle('noDisplay')
                });
                leftElement.classList.toggle('noDisplay')
                rightElement.classList.toggle('noDisplay')
                inElements.forEach(element => {
                    element.classList.remove('noDisplay')
                })
            }
        })
    } else if (isActive && canClick) {

        //Moves the title out
        anime({
            targets: moonTitle,
            scale: 1,
            easing: "easeInOutQuad",
            duration: 350,
            translateY: 0,
            translateX: 0
        })

        //Move from center to left with scale
        anime({
            begin:  ()=>{canClick=false},
            targets: centerElement,
            scale: 1,
            translateX: 0,
            easing: 'easeInOutQuad',
            duration: 450,
            complete: ()=>{canClick=true}
        })

        //Reapears elements
        anime({
            begin: ()=>{
                isActive=false
                outElements.forEach(element => {
                    element.classList.toggle('noDisplay')
                });
                leftElement.classList.toggle('noDisplay')
                rightElement.classList.toggle('noDisplay')
                inElements.forEach(element => {
                    element.classList.add('noDisplay')
                })
            },
            targets: [outElements, leftElement, rightElement],
            opacity: [0, 1],
            duration: 350,
            easing: 'easeInOutQuad'
        })
    }
    
})

//Loop both buttons
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
                        moonTitle.innerText = rightMoon.dataset.moon;
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
                        moonTitle.innerText = leftMoon.dataset.moon;
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



