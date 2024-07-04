window.onload = function() {
    var photoElement = document.getElementsByClassName('photo-subj')[0];
    if (photoElement) {
        photoElement.classList.add('animate-Up');
    }

    var titleElement = document.getElementsByClassName('title')[0];
    if (titleElement) {
        setTimeout(function() {
            titleElement.classList.add('animate-Right');
        }, 1200); 
    }

    var subtitleElement = document.getElementsByClassName('subtitle')[0];
    if (subtitleElement) {
        setTimeout(function() {
            subtitleElement.classList.add('animate-Down');
        }, 1000); 
    }
};


document.addEventListener('DOMContentLoaded', function(){
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('previous');
    const photoContainers = document.getElementsByClassName('photo-container');

    let currentIndex = 0;

    photoContainers[currentIndex].classList.add('active');
    const photoCircles = photoContainers[currentIndex].querySelectorAll('.circle');
    photoCircles[currentIndex].classList.add('active');



    nextButton.addEventListener('click', function(){
        
        photoContainers[currentIndex].classList.remove('active', 'animate-slideOut', 'animate-slideIn');
        const photoCircles = photoContainers[currentIndex].querySelectorAll('.circle');
        photoCircles[currentIndex].classList.remove('active');
    
        currentIndex++;
        if (currentIndex >= photoContainers.length){
            currentIndex = 0;
        }
        
        photoContainers[currentIndex].classList.add('active');
        photoContainers[currentIndex].classList.add('animate-slideIn');
        const newPhotoCircles = photoContainers[currentIndex].querySelectorAll('.circle');
        newPhotoCircles[currentIndex].classList.add('active');

    });
    


    prevButton.addEventListener('click', function(){
        
        photoContainers[currentIndex].classList.remove('active', 'animate-slideOut', 'animate-slideIn');
        const photoCircles = photoContainers[currentIndex].querySelectorAll('.circle');
        photoCircles[currentIndex].classList.remove('active');
    
        currentIndex--;
        if (currentIndex < 0){
            currentIndex = photoContainers.length - 1;
        }
    
        photoContainers[currentIndex].classList.add('active');
        photoContainers[currentIndex].classList.add('animate-slideOut');
        const newPhotoCircles = photoContainers[currentIndex].querySelectorAll('.circle');
        newPhotoCircles[currentIndex].classList.add('active');

    });





});





/* 

document.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('previous');
    const photoContainers = document.querySelectorAll('.photo-container');

    let currentIndex = 0;

    const showPhoto = (index) => {
        photoContainers.forEach((photo, i) => {
            if (i === index) {
                photo.classList.add('active');
                photo.style.display = 'block';
            } else {
                photo.classList.remove('active');
                photo.style.display = 'none';
            }
        });
    };

    nextButton.addEventListener('click', () => {
        const currentPhoto = photoContainers[currentIndex];
        currentIndex = (currentIndex + 1) % photoContainers.length;
        const nextPhoto = photoContainers[currentIndex];

        currentPhoto.classList.add('animate-slideLeft');
        currentPhoto.addEventListener('animationend', () => {
            currentPhoto.classList.remove('active', 'animate-slideLeft');
            currentPhoto.style.display = 'none';
            nextPhoto.classList.add('active', 'animate-slideRight');
            nextPhoto.style.display = 'block';
            nextPhoto.addEventListener('animationend', () => {
                nextPhoto.classList.remove('animate-slideRight');
            }, { once: true });
        }, { once: true });
    });

    prevButton.addEventListener('click', () => {
        const currentPhoto = photoContainers[currentIndex];
        currentIndex = (currentIndex - 1 + photoContainers.length) % photoContainers.length;
        const prevPhoto = photoContainers[currentIndex];

        currentPhoto.classList.add('animate-slideLeft');
        currentPhoto.addEventListener('animationend', () => {
            currentPhoto.classList.remove('active', 'animate-slideLeft');
            currentPhoto.style.display = 'none';
            prevPhoto.classList.add('active', 'animate-slideRight');
            prevPhoto.style.display = 'block';
            prevPhoto.addEventListener('animationend', () => {
                prevPhoto.classList.remove('animate-slideRight');
            }, { once: true });
        }, { once: true });
    });

    // Initially show the first photo
    showPhoto(currentIndex);
});

*/