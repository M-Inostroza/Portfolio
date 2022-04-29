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




