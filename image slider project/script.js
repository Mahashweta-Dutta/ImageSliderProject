// Array of image paths
const images = [
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg',
  'images/img4.jpg',
  'images/img5.jpg'
];

let currentIndex = 0;
const sliderImage = document.getElementById('slider-image');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Function to update image with fade effect
function showImage(index) {
  sliderImage.classList.remove('loaded');
  sliderImage.src = images[index];
  sliderImage.onload = () => {
    sliderImage.classList.add('loaded');
  };
}

// Show the first image on load
showImage(currentIndex);

// Next button
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Previous button
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

// Auto slide every 3 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}, 3000);
