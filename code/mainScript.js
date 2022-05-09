  //-----Works moon carrusel-----//

  const buttons = document.querySelectorAll("[data-carousel-button]");

  //Loop for both buttons
  buttons.forEach(button => {
    button.addEventListener('click', () =>{

        //This selects the moons
        const moons = button.closest('[data-carousel]').querySelector("[data-moons]")

        //Moons in variables
        const activeMoon = moons.querySelector("[data-active]")
        const leftMoon = moons.querySelector("[data-left]")
        const rightMoon = moons.querySelector("[data-right]")

        //Deletes current dataset
        delete activeMoon.dataset.active
        delete leftMoon.dataset.left
        delete rightMoon.dataset.right

        //Changes dataset according to button
        if (button.dataset.carouselButton === "next") {
            activeMoon.dataset.left = true;
            rightMoon.dataset.active = true;
            leftMoon.dataset.right = true;
        } else {
            activeMoon.dataset.right = true;
            rightMoon.dataset.left = true;
            leftMoon.dataset.active = true;
        }
    })
  })