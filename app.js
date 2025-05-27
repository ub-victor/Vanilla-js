function smoothScroll(target,duration){ //
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect();
    console.log(targetPosition);
}

smoothScroll(".section2", 1000);