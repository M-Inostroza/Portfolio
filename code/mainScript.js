//-----Works moon carousel-----//

const buttons = document.querySelectorAll("[data-carousel-button]");

const moonTitle = document.querySelector('.moon-title');

window.onload = function changeText() {moonTitle.innerText = "SSNF"}

//Deactivate while anim is running
let canClick = true;

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
                //-----Moon section movement-----//
                
                //Center to left-down
                anime({
                    targets: activeMoon,
                    translateX: [0,-620],
                    translateY: [0,195],
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
                    translateX: [0,1240],
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
                    translateY: [0,-195],
                    opacity: [1,0.5,1],
                    easing: 'easeInOutQuad',
                    duration: 750,
                    complete: () => {
                        rightMoon.style.transform = 'initial';
                        delete rightMoon.dataset.right
                        leftMoon.dataset.right = true;
                        moonTitle.innerText = rightMoon.dataset.moon;
                    }
                });      
            } else {
                //Center to right-down
                anime({
                    targets: activeMoon,
                    translateX: [0,615],
                    translateY: [0,195],
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
                    translateX: [0,-1240],
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
                    translateX: [0,625],
                    translateY: [0,-195],
                    opacity: [1,0.5,1],
                    easing: 'easeInOutQuad',
                    duration: 750,
                    complete: () => {
                        leftMoon.style.transform = 'initial';
                        delete leftMoon.dataset.left;
                        leftMoon.dataset.active = true;
                        moonTitle.innerText = leftMoon.dataset.moon;
                    }
                });
                
            }
        }
    })
})

