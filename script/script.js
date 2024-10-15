window.addEventListener('load', () => {
const elements = document.querySelectorAll('.fade-in');
elements.forEach(element => {
    element.classList.add('fade-in-visible');
});

});
const items = document.querySelectorAll('.carousel-item');
let currentItem = 0;

function updateCarousel(newIndex) {
  items[currentItem].classList.remove('active');
  currentItem = newIndex;
  items[currentItem].classList.add('active');
}

document.getElementById('prevBtn').addEventListener('click', () => {
  const newIndex = (currentItem === 0) ? items.length - 1 : currentItem - 1;
  updateCarousel(newIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  const newIndex = (currentItem === items.length - 1) ? 0 : currentItem + 1;
  updateCarousel(newIndex);
});

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
const disclaimerLink = document.getElementById('disclaimerLink');
const disclaimerPopup = document.getElementById('disclaimerPopup');
const closePopup = document.getElementById('closePopup');

disclaimerLink.addEventListener('click', (e) => {
    e.preventDefault();
    disclaimerPopup.classList.remove('hidden');
});

closePopup.addEventListener('click', () => {
    disclaimerPopup.classList.add('hidden');
});

window.addEventListener('click', (e) => {
    if (e.target === disclaimerPopup) {
        disclaimerPopup.classList.add('hidden');
    }
});
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.carousel-image');
  let currentIndex = 0;

  function showImage(index) {
      images.forEach((img, i) => {
          img.classList.remove('visible');
          img.style.opacity = i === index ? '1' : '0';
      });
  }

  function showNextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
  }

  function showPreviousImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
  }

  showImage(currentIndex);

  document.getElementById('nextImage').addEventListener('click', function() {
      showNextImage();
  });

  document.getElementById('previousImage').addEventListener('click', function() {
      showPreviousImage();
  });
});
