document.querySelectorAll(".elem").forEach(function (elem){
  elem.addEventListener("mousemove",function(dets){
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    gsap.to(elem.querySelector("img"),{
      opacity:1,
      ease: Power1,
      top:diff,
      left:dets.clientX,
      
    });
  });
});
