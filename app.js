function smoothScroll(target,duration){ 
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset; 
    console.log(startPosition);
}

smoothScroll(".section1", 1000);