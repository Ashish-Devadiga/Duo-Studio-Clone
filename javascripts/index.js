var cursor = document.querySelector('.cursor')
var main = document.querySelector(".main")
main.addEventListener("mousemove", function(dets) {
   gsap.to(cursor,{
      x:dets.x,
      y:dets.y,
      duration: 1,
      ease: "back.out"
   })
})

var boxes = document.querySelectorAll(".box")

boxes.forEach(function(elem){
console.log(elem);
elem.addEventListener("mouseenter", function(){
    var att =  elem.getAttribute("data-img")
    cursor.style.width = "160px"
    cursor.style.height = "150px"
    cursor.style.borderRadius = "50%"
    cursor.style.backgroundImage = `url(${att})`
})

elem.addEventListener("mouseleave", function(){
    elem.style.backgroundColor = "transparent"
    cursor.style.width = "20px"
    cursor.style.height = "20px"
    cursor.style.borderRadius = "50%"
    cursor.style.backgroundImage = `url(none)`
})
})



