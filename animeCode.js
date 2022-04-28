//-----Shifting text-----//

const jumpWords = ["make", "design", "prototype", "build", "imagine"];

const textElement = document.querySelector('.description-jumper')

let textIndex = 0;

const textTimeline = anime.timeline({
  easing: 'easeOutQuad',
  loop: true
});

textTimeline.add({
  targets: textElement,
  begin: function() {textElement.innerText = jumpWords[textIndex]},
  translateY: [0, -40],
  duration: 1500,
  opacity: 0,
  complete: function() {textIndex++}
}).add({
  targets: textElement,
  begin: function() {textElement.innerText = jumpWords[textIndex];},
  translateY: [0, -40],
  duration: 1500,
  opacity: [1, 0],
  complete: function() {textIndex++}
}).add({
  targets: textElement,
  begin: function() {textElement.innerText = jumpWords[textIndex]},
  translateY: [0, -40],
  duration: 1500,
  opacity: [1, 0],
  complete: function() {textIndex++}
}).add({
  targets: textElement,
  begin: function() {textElement.innerText = jumpWords[textIndex]},
  translateY: [0, -40],
  duration: 1500,
  opacity: [1, 0],
  complete: function() {textIndex++}
}).add({
  targets: textElement,
  begin: function() {textElement.innerText = jumpWords[textIndex]},
  translateY: [0, -40],
  duration: 1500,
  opacity: [1, 0],
  complete: function() {textIndex = 0}
})






