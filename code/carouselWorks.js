//-----Works moon carousel-----//

const buttons = document.querySelectorAll("[data-carousel-button]");

const moonTitle = document.querySelector('.moon-title');

const activeElement = document.querySelector('[data-moons]')

window.onload = function changeText() {moonTitle.innerText = "SSNF"}

//Deactivate while anim is running
let canClick = true;

//Animates the active element on click
activeElement.addEventListener('click', ()=> {

    let isActive = true;

    let centerElement = activeElement.querySelector('[data-active]')
    let rightElement = activeElement.querySelector('[data-right]')
    let leftElement = activeElement.querySelector('[data-left]')
    let planetBase = document.querySelector('.planet-work-base')
    let titleElement = document.querySelector('.title-works')
    let titleElementBG = document.querySelector('.title-works-base')
    let frameImg = document.querySelector('.image-frame')
    let buttonLeft = document.querySelector('.carousel-button.prev')
    let buttonRight = document.querySelector('.carousel-button.next')

    let activeName = document.querySelector('.moon-title')
    
    anime({
        begin: () => {
            anime({
                targets: [activeName, buttonRight, buttonLeft, rightElement, leftElement, planetBase, titleElement, titleElementBG, frameImg],
                opacity: 0,
                easing: 'easeInQuad',
                duration: 200
            })
        },
        targets: centerElement,
        scale: 2.3,
        translateX: -250,
        easing: 'easeInOutQuad',
        duration: 450
    })
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



