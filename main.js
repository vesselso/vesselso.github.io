let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro",
    scrub: true,
    start: "bottom top",
    //end: "bottom top",
  },
});

tl1
  .to("nav", { backgroundColor: "rgba(242, 242, 242, 0.9)", duration: 0.5 })
  .to("#white-identifier", { opacity: 0, duration: 0.5 }, "-=0.5")
  .to("#black-identifier", { opacity: 1, duration: 0.5 }, "-=0.5");

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".ending",
    scrub: true,
    start: "top top",
    end: "top top",
    toggleClass: "active",
  },
});

tl2
  .to("#white-identifier", { opacity: 1, duration: 0.5 })
  .to("#black-identifier", { opacity: 0, duration: 0.5 }, "-=0.5")
  .to(
    "nav",
    { backgroundColor: "rgba(23, 23, 23, 0.9)", duration: 0.5 },
    "-=0.5"
  );

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".ending",
    start: "top center",
  },
});

tl3.from(".meet", { opacity: 0, y: 15, duration: 1 });

window.onload = function(){
  document.getElementsByClassName("FAQ-text")[0].style.display = "none"
  document.getElementsByClassName("FAQ-trigger-container")[0].addEventListener("click", function(){
    document.getElementsByClassName("FAQ-text")[0].style.display == "none" ? document.getElementsByClassName("FAQ-text")[0].style.display="block" : document.getElementsByClassName("FAQ-text")[0].style.display="none"
    document.getElementsByClassName("FAQ-trigger")[0].classList.toggle("rotate")
  })
};

document.getElementById("email").addEventListener("keyup", function(event) {
    const uid = document.getElementById("email").value;
    if (event.key === "Enter" && uid != "") {
        sendone()
    }
});

document.getElementById("email2").addEventListener("keyup", function(event) {
  const uid = document.getElementById("email2").value;
  if (event.key === "Enter" && uid != "") {
      sendtwo()
  }
});