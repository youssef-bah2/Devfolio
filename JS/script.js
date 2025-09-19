var typed = new Typed('#element', {
      strings: ['Designer', 'Developer','FreeLancer','Photographer'],
      typeSpeed: 100,
      backSpeed:50,
      backDelay:2000,
      loop:true
    });


    document.addEventListener("DOMContentLoaded", () => {
  const dropdownLinks = document.querySelectorAll(".nav-item.dropdown > a, .dropend > a");

  dropdownLinks.forEach(link => {
    link.addEventListener("click", e => {
      if (window.innerWidth < 992) {
        e.preventDefault();
        const parent = link.parentElement;
        parent.parentElement.querySelectorAll(".active").forEach(el => {
          if (el !== parent) el.classList.remove("active");
        });
        parent.classList.toggle("active");
      }
    });
  });
});
