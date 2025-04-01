'use strict';
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-container .overlay');
    let currentIndex = 0;
    const slideInterval = 3000; // Интервал смены слайдов в миллисекундах
    let intervalId; // Переменная для хранения ID интервала

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function startSlider() {
        showImage(currentIndex); // Показываем первое изображение
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length; // Используем модуль для цикличности
            showImage(currentIndex);
        }, slideInterval);
    }

    function handleImageError() {
        // Если изображение не загружается, переходим к следующему
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Добавляем обработчик ошибок для каждого изображения
    images.forEach((img) => {
        img.addEventListener('error', handleImageError);
    });

    startSlider(); // Запускаем слайдер при загрузке страницы
});
