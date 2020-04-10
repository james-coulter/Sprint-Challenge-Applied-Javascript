/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function makeCarousel() {

  const carousel = document.createElement('div')
  const buttonL = document.createElement('div')
  const mountains = document.createElement('img')
  const computer = document.createElement('img')
  const trees = document.createElement('img')
  const turntable = document.createElement('img')
  const buttonR = document.createElement('div')

  carousel.classList.add('carousel')
  buttonL.classList.add('left-button')
  buttonR.classList.add('right-button')
  mountains.classList.add('img')
  computer.classList.add('img')
  trees.classList.add('img')
  turntable.classList.add('img')

  carousel.append(buttonL)
  carousel.append(mountains)
  carousel.append(computer)
  carousel.append(trees)
  carousel.append(turntable)
  carousel.append(buttonR)


  mountains.src = './assets/carousel/mountains.jpeg'
  computer.src = './assets/carousel/computer.jpeg'
  trees.src = './assets/carousel/trees.jpeg'
  turntable.src = './assets/carousel/turntable.jpeg'


  return carousel
}

// document.querySelector('.img').addEventListener('click', event => {
  
// })


const carouselLarge = document.querySelector('.carousel-container')
const newCarouselFirst = makeCarousel()
carouselLarge.append(newCarouselFirst)

