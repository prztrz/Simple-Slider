document.addEventListener("DOMContentLoaded", function() {
    var nextBtn = document.getElementById("nextPicture"); // get #nextPicture Button
    var prevBtn = document.getElementById("prevPicture"); // get #prevPicture Button
    var listItems = document.querySelectorAll(".slider li"); //get li elements array from .slider div

    var visibleSlideIndex = 0; //index of the current active slide, 0 by default
    var visibleSlide = listItems[visibleSlideIndex];

    //set current active slide visible (adding .visible class)
    visibleSlide.classList.add('visible');
    
    /**
     * @function toggleSlideVisibility - toggles .visible class on visibleSlide
     */
    var toggleSlideVisibility = function() {
        visibleSlide.classList.toggle('visible');
    }

    /** 
     * @function changeVisibleSlide - changes current visible slide
     * @param {object} elem #nextPicture or #previousPicture
     */
    var changeVisibleSlide = function(elem) {
        toggleSlideVisibility();
        if (elem.id === 'nextPicture') {
            if (visibleSlideIndex < listItems.length-1) {
                visibleSlideIndex++;
            } else {
                visibleSlideIndex = 0;
            }
        } else if (elem.id === 'prevPicture') {
            if (visibleSlideIndex > 0) {
                visibleSlideIndex--;
            } else {
                visibleSlideIndex = listItems.length-1;
            }
        }
        visibleSlide = listItems[visibleSlideIndex];
        toggleSlideVisibility();
    }

    nextBtn.addEventListener("click", function() {
        changeVisibleSlide(this)
    });

    prevBtn.addEventListener("click", function() {
        changeVisibleSlide(this)
    });

});
