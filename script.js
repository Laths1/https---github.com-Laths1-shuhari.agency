let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0; // Loop back to the first slide
  } else if (index < 0) {
    currentIndex = totalSlides - 1; // Loop back to the last slide
  } else {
    currentIndex = index;
  }

  // Move the carousel to show the current slide
  const offset = -currentIndex * 100;  // Calculate the percentage offset
  document.querySelector('.carousel-items').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// contact us
function sendContactMail(){
  let param = {
    from_name : document.getElementById("contact-name").value,
    message : document.getElementById("contact-message").value,
    from_email : document.getElementById("contact-email").value,
  }
  emailjs.send("service_3ix5u63", "template_bsc94np", param)
  .then(alert("Email has been sent successfully from: " + param.from_name));
  
}
// application