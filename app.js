function smoothScroll(target,duration){ //
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    console.log(targetPosition);
    console.log(target);
}

smoothScroll(".section1", 1000);