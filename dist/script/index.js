$(document).ready(function () {
    currentSection()
})
$(window).scroll(function () {
    currentSection()
});

function currentSection() {
    let windowTop = $(this).scrollTop()
    let tempArray = $('.background').find('section').filter(function () {
        return $(this).offset().top < windowTop + 100;
    });
    let lastItem = tempArray.length - 1
    let currentSection = tempArray[lastItem].id

    if (currentSection === 'first-section') {
        $("#circle-1").addClass("white-circle");
    } else {
        $("#circle-1").removeClass("white-circle");
    }
    if (currentSection === 'second-section') {
        $("#circle-2").addClass("white-circle");
    } else {
        $("#circle-2").removeClass("white-circle");
    }
    if (currentSection === 'third-section') {
        $("#circle-3").addClass("white-circle");
    } else {
        $("#circle-3").removeClass("white-circle");
    }
    if (currentSection === 'fourth-section') {
        $("#circle-4").addClass("white-circle");
    } else {
        $("#circle-4").removeClass("white-circle");
    }
}

function select(a) {
    let element = $('.button-group').find(`.selected`)
    let selectedElement = $('.button-group').find(`#${a}`)
    $(element).removeClass("selected")
    $(selectedElement).addClass("selected")

    let containerElement = $('.flex').find(`.content`)
    $(containerElement).empty()

    if (a === 'photo') {
        $(containerElement).append("<img src='./img/samplephoto.jpg' class='child-content' />")
    }
    if (a === 'social') {
        $(containerElement).append("<img src='./img/samplesocial.jpg' class='child-content' />")
    }
    if (a === 'pr') {
        $(containerElement).append("<img src='./img/samplepr.jpg' class='child-content' />")
    }
    if (a === 'radio') {
        $(containerElement).append("<img src='./img/sampleradio.jpg' class='child-content' />")
    }
    if (a === 'video') {
        $(containerElement).append(`<iframe class='child-content' width='100%' height='250px' src='https://www.youtube.com/embed/K4TOrB7at0Y'
    title='YouTube video player' frameborder='0'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    allowfullscreen></iframe>`)
    }
}

function scrollToElement(element) {
    $('html, body').animate({
        scrollTop: $(element).offset().top
    }, 1000);
}