

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
      document.querySelector("#dot").style.transform = `translate(${dets.clientX}px ,${dets.clientY}px)`;
    }
    )
}

circleMouseFollower();


document.querySelectorAll(".elem").forEach(function (elem){
  var rota=0;
  var diffrotate=0;
  elem.addEventListener("mouseleave",function(dets){
    // gsap.utils.clamp(-20,20,dif);
    gsap.to(elem.querySelector("img"),{
      opacity:0,
      ease: Power3,
      duration:0.75,
      
    });
  });
  

  elem.addEventListener("mousemove",function(dets){
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrotate=dets.clientX-rota;
    rota=dets.clientX;
    // gsap.utils.clamp(-20,20,dif);
    gsap.to(elem.querySelector("img"),{
      opacity:1,
      ease: Power3,
      top:diff,
      left:dets.clientX,
      rotate:gsap.utils.clamp(-20,20,diffrotate*1.5),
      
    });
  });
});



