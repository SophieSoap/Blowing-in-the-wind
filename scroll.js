window.addEventListener('scroll', function() {
    const imageContainer = document.querySelector('.image-argument1-content1');
    const distanceFromTop = imageContainer.getBoundingClientRect().top;

    if (distanceFromTop < window.innerHeight / 2) {
        imageContainer.querySelector('img').style.transform = 'translateX(30px)';
    } else {
        imageContainer.querySelector('img').style.transform = 'translateY(100px)';
    }
});
