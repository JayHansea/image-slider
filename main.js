let slideIndex = 0;
const slides = document.getElementsByClassName('slide');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
// const dot1 = document.getElementsByClassName('dot1');
// const dot2 = document.getElementsByClassName('dot2');
// const dot3 = document.getElementsByClassName('dot3');
// const dot4 = document.getElementsByClassName('dot4');
// const dot5 = document.getElementsByClassName('dot5');
// const dot6 = document.getElementsByClassName('dot6');

const showSlides = () => {

    // Clear all images
    function reset() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
    }
    

    // Initialise slider
    function startSlider() {
        reset();
        slides[0].style.display = "block";
    }
    

    // Show prev
    function leftSlide() {
        reset();
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].style.transition = "1s ease in out";
        slideIndex--;
    }

    // Show next
    function rightSlide() {
        reset();
        slides[slideIndex + 1].style.display = "block";
        slides[slideIndex + 1].style.transition = "1s ease in out";
        slideIndex++;   
    }
    
    // Left arrow click event 
    arrowLeft.addEventListener('click', function(){
        if (slideIndex === 0) {
            slideIndex = slides.length;
        }
        leftSlide();
    });

    // Right arrow click event 
    arrowRight.addEventListener('click', function(){
        if (slideIndex === slides.length - 1) {
            slideIndex = -1;
        }
        rightSlide();
    });

    // dot click event
    // let dotContainer = document.getElementsByClassName("dotContainer");
    // let dots = document.getElementsByClassName("dot");
    // for (var i = 0; i < dots.length; i++) {
    // dots[i].addEventListener("click", function() {
    // let current = document.getElementsByClassName("active");
    // if (current.length > 0) { 
    //     current[0].className = current[0].className.replace(" active", "");
    // }
    // this.className += " active";
    // });
    // }



    // setTimeout(showSlides, 3000);
    startSlider();
}

showSlides();