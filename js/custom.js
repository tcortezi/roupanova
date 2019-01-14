function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 30,
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};


// Modal

$(".cart-btn").click(function() {
    $(".cart").addClass("is-active");
    $(".cart").addClass("is-clipped");
});


$(".video-btn").click(function() {
    $(".modal").addClass("is-active");
    $(".modal").addClass("is-clipped");
    $(this).scrollspy('refresh');
    $videoSrc = $(this).data( "src" );
    $("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
});

$(".modal-close").click(function() {
    closeModals();
});

$(".voltar-modal").click(function() {
    closeModals();
});

$(".modal").click(function() {
    closeModals();
});      

document.addEventListener('keydown', function (event) {
    var e = event || window.event;
    if (e.keyCode === 27) {
      closeModals();
    }
});

function closeModals() {
    $(".modal").removeClass("is-active");
    $(".modal").removeClass("is-clipped");
    $(".cart").removeClass("is-active");
    $(".cart").removeClass("is-clipped");
}



// Colapse

document.addEventListener('DOMContentLoaded', function() {
    let cardToggles = document.getElementsByClassName('card-toggle');
    for (let i = 0; i < cardToggles.length; i++) {
        cardToggles[i].addEventListener('click', e => {
            e.currentTarget.parentElement.parentElement.childNodes[3].classList.toggle('is-hidden');
        });
    }
});


