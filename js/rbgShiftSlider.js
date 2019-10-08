// set images
var images = [
  "./img/main1.jpg",
  "./img/main2.jpg",
  "./img/main3.jpg",
  "./img/main4.jpg",
  "./img/main5.jpg",
]
// instanciate slider
var rbgShiftSlider = new rbgShiftSlider({
  nav : true,
  navElement: '.scene-nav',
  slideImages: images,
  stageWidth: 1280,
  stageHeight: 1280,
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