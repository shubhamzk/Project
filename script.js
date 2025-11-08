// Hero slider JavaScript
  const slides = document.getElementById('slides');
  const totalSlides = slides.children.length;
  let currentSlide = 0;

  document.getElementById('nextBtn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  });
  document.getElementById('prevBtn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  function updateSlider() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  // Auto slide every 6 seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }, 6000);

   // Testimonials slider functionality
  const testimonials = document.querySelectorAll('.testimonial-slide');
  let currentIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  document.getElementById('prevTestimonial').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  });

  document.getElementById('nextTestimonial').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  });