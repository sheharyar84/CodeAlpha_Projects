const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentIndex = 0;
let visibleImages = [...images];

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = 'flex';
  });
});

function showImage() {
  lightboxImg.src = visibleImages[currentIndex].src;
}

closeBtn.onclick = () => lightbox.style.display = 'none';

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % visibleImages.length;
  showImage();
};

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + visibleImages.length) % visibleImages.length;
  showImage();
};

function filterImages(category) {
  visibleImages = [];
  images.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
      visibleImages.push(img);
    } else {
      img.style.display = 'none';
    }
  });
}