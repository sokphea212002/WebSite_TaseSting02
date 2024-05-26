let sections = document.querySelectorAll("section");
let vavlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        linnks.classlist.remove("active");
        document
          .querySelector("haeder nav a[href+=" + id + "]")
          .classList.add("active");
      });
    }
  });
  //   =================================&&====================/
  let haeder = document.querySelector("haeder");

  haeder.classList.toggle("sticky", window.scrollY > 100);​
};
