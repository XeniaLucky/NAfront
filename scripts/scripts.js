'use strict';
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-container .overlay');
    let currentIndex = 0;
    const slideInterval = 3000;
    let intervalId;
    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function startSlider() {
        showImage(currentIndex);
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }, slideInterval);
    }

    function handleImageError() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    images.forEach((img) => {
        img.addEventListener('error', handleImageError);
    });

    startSlider();
});
