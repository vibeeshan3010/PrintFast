
  let slideIndex = 0;
  const slides = document.getElementsByClassName("mySlides");
  const menuicon=document.getElementsByClassName('menu-icon');
  const sidebar=document.getElementsByClassName("sidebar");

  
  function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds (3000 milliseconds)
  }

  showSlides(); // Initial call to start the slideshow

  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});

