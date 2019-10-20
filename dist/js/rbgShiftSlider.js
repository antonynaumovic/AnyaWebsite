// set images
var images = [
  "./img/main2.jpg",
  "./img/main3.jpg",
  "./img/main4.jpg",
  "./img/main5.jpg",
  "./img/main6.jpg",
  "./img/main7.jpg",
  "./img/main8.jpg",
  "./img/main9.jpg",
  "./img/main10.jpg",
  "./img/main11.jpg",
  "./img/main12.jpg",
  "./img/main13.jpg",
  "./img/main14.jpg",
  "./img/main15.jpg",
  "./img/main16.jpg",
  "./img/main17.jpg",
  "./img/main18.jpg",
  "./img/main19.jpg",
  "./img/main20.jpg",
  "./img/main21.jpg",
  "./img/main22.jpg",
  "./img/main23.jpg",
  "./img/main24.jpg"
]
// instanciate sWlider
var rbgShiftSlider = new rbgShiftSlider({
  nav : true,
  navElement: '.scene-nav',
  slideImages: images,
  stageWidth: 2000,
  stageHeight: 1600,
  displacementImage: 'http://hmongouachon.com/_demos/rgbShiftSlider/displace-circle.png',
  fullScreen: true,
  transitionDuration: 0.35, // must be 0.1 > transitionGhostDuration
  transitionGhostDuration : 0.25,
  transitionFilterIntensity: 350,
  transitionSpriteIntensity: 2,
  mouseDispIntensity: 3,
  interactive : true,
  autoPlay : true,
  autoPlaySpeed : 5000,
});