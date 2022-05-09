//-----Shifting text-----//

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
    {value: 40 , duration: 0.01},
    {value: 0,  duration: 500},
    {value: 0,  duration: 2000}, 
    {value: -40, duration: 500}
  ],
  opacity: [
    {value: 0, duration: 0.01}, 
    {value: 1, duration: 500}, 
    {value: 1, duration: 2000}, 
    {value: 0, duration: 500}
  ],
  color: '#EAC1D8',
  complete: function() {textIndex++ , textElement.innerText = jumpWords[textIndex]}

}).add({
  //Design
  translateY: [
    {value: 40 , duration: 0.01},
    {value: 0,  duration: 500},
    {value: 0,  duration: 2000}, 
    {value: -40, duration: 500}
  ],
  opacity: [
    {value: 0, duration: 0.01}, 
    {value: 1, duration: 500}, 
    {value: 1, duration: 2000}, 
    {value: 0, duration: 500}
  ],
  color: '#CAAFDC',
  complete: function() {textIndex++ , textElement.innerText = jumpWords[textIndex]}

}).add({
  //Prototype
  translateY: [
    {value: 40 , duration: 0.01},
    {value: 0,  duration: 500},
    {value: 0,  duration: 2000}, 
    {value: -40, duration: 500}
  ],
  opacity: [
    {value: 0, duration: 0.01}, 
    {value: 1, duration: 500}, 
    {value: 1, duration: 2000}, 
    {value: 0, duration: 500}
  ],
  color: '#B5ACCC',
  complete: function() {textIndex++ , textElement.innerText = jumpWords[textIndex]}

}).add({
  //Build
  translateY: [
    {value: 40 , duration: 0.01},
    {value: 0,  duration: 500},
    {value: 0,  duration: 2000}, 
    {value: -40, duration: 500}
  ],
  opacity: [
    {value: 0, duration: 0.01}, 
    {value: 1, duration: 500}, 
    {value: 1, duration: 2000}, 
    {value: 0, duration: 500}
  ],
  color: '#B1B1BC',
  complete: function() {textIndex++ , textElement.innerText = jumpWords[textIndex]}

}).add({
  //Imagine
  translateY: [
    {value: 40},
    {value: 0,  duration: 400},
    {value: 0,  duration: 2000}, 
    {value: -40, duration: 400},
  ],
  opacity: [
    {value: 0}, 
    {value: 1, duration: 300}, 
    {value: 1, duration: 2000}, 
    {value: 0, duration: 300},
  ],
  color: '#fff',
  complete: function() {
    textIndex = 0
    textElement.innerText = jumpWords[textIndex]
    textTimeline.restart()
  }
})



//-----Changing Text-----//

const detailWords = ["Web", "User interface", "User experience", "games"];

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
    {value: 130 , duration: 0.01},
    {value: 0,  duration: 500},
    {value: 0,  duration: 2000}, 
    {value: -130, duration: 500}
  ],
  opacity: [
    {value: 0, duration: 0.01}, 
    {value: 1, duration: 500}, 
    {value: 1, duration: 2000}, 
    {value: 0, duration: 500}
  ],
  complete: function() {detailIndex++ , textDetail.innerText = detailWords[detailIndex]}
  //Index 1
})
.add({
  //User interface
  translateX: [
    {value: 130 , duration: 0.01},
    {value: 0,  duration: 500},
    {value: 0,  duration: 2000}, 
    {value: -130, duration: 500}
  ],
  opacity: [
    {value: 0, duration: 0.01}, 
    {value: 1, duration: 500}, 
    {value: 1, duration: 2000}, 
    {value: 0, duration: 500}
  ],
  complete: function() {detailIndex++ , textDetail.innerText = detailWords[detailIndex]}
  //Index 2
})
.add({
  //User experience
  translateX: [
    {value: 130 , duration: 0.01},
    {value: 0,  duration: 500},
    {value: 0,  duration: 2000}, 
    {value: -130, duration: 500}
  ],
  opacity: [
    {value: 0, duration: 0.01}, 
    {value: 1, duration: 500}, 
    {value: 1, duration: 2000}, 
    {value: 0, duration: 500}
  ],
  complete: function() {detailIndex++ , textDetail.innerText = detailWords[detailIndex]}
  //Index 3
})
.add({
  //games
  translateX: [
    {value: 130 , duration: 0.01},
    {value: 0,  duration: 500},
    {value: 0,  duration: 2000}, 
    {value: -130, duration: 500}
  ],
  opacity: [
    {value: 0}, 
    {value: 1, duration: 300}, 
    {value: 1, duration: 2000}, 
    {value: 0, duration: 300},
  ],
  complete: function() {
    detailIndex = 0;
    textDetail.innerText = detailWords[detailIndex]
    detailTimeline.restart()
  }})


  //-----Works moon carrusel-----//

  const buttons = document.querySelectorAll("[data-carousel-button]");

  //Loop for both buttons
  buttons.forEach(button => {
    button.addEventListener('click', () =>{

      //This gives 1 or -1 according to the button
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;

      //This selects the moons
      const moons = button.closest('[data-carousel]').querySelector("[data-moons]")

      //Moons in variables
      const activeMoon = moons.querySelector("[data-active]")

      const leftMoon = moons.querySelector("[data-left]")
      
      const rightMoon = moons.querySelector("[data-right]")

      //Gives the index number of the active moon + (1 or -1)
      let newIndex = [...moons.children].indexOf(activeMoon) + offset

      //Checks if the slides hit the last element
      if (newIndex < 0) newIndex = moons.children.length -1

      //Checks if the first item hits the end of the array
      if (newIndex >= moons.children.length) newIndex = 0

      //Sets active the element in the index
      console.log(newIndex)
      moons.children[newIndex].dataset.active = true
      moons.children[newIndex-1].dataset.left = true
      
      //Deletes data set active atribute
      delete activeMoon.dataset.active

      delete leftMoon.dataset.left
      
    })
  })
  



