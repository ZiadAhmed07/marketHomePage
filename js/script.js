
/* slider button */
let UlSlider = document.getElementById("ul-slider")

let UlSliderNUM = 0

function FnRight(){
  UlSliderNUM -= 150
    UlSliderNUM >= 0 ?  
    UlSlider.style.left = `${UlSliderNUM}px` : 
    UlSliderNUM = 0
}

function FnLeft(){
  UlSliderNUM += 150
  UlSliderNUM <= 600 ?  
  UlSlider.style.left = `${UlSliderNUM}px` : 
  UlSliderNUM = 600
}