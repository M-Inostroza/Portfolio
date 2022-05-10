//-----Works moon carousel-----//

const buttons = document.querySelectorAll("[data-carousel-button]");

//Deactivate while anim is running
let canClick = true;

//Loop both buttons
buttons.forEach(button => {
    button.addEventListener('click', () =>{
        //Moon selector
        const moons = button.closest('[data-carousel]').querySelector("[data-moons]")
        //Moons variables
        const activeMoon = moons.querySelector("[data-active]")
        const leftMoon = moons.querySelector("[data-left]")
        const rightMoon = moons.querySelector("[data-right]")

        if (canClick) { 
            canClick = false;

            //Changes dataset according to button
            if (button.dataset.carouselButton === "next") {

                //-----Moon section movement-----//

                //Center to left-down
                anime({
                    targets: activeMoon,
                    translateX: [0,-620],
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

                //Left to right
                anime({
                    targets: leftMoon,
                    translateX: [0,1250],
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
                    translateX: [0,-620],
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
            } else {
                //Center to right-down
                anime({
                    targets: activeMoon,
                    translateX: [0,620],
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

                //Right to left
                anime({
                    targets: rightMoon,
                    translateX: [0,-1250],
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
                    translateX: [0,620],
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
        }
    })
})