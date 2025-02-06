var crsr = document.querySelector("#cursor")
var crsrblr = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    crsrblr.style.left = dets.x-150+"px"
    crsrblr.style.top = dets.y-150+"px"
})

