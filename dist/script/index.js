$("#background-button").click(function () {
    $('html, body').animate({
        scrollTop: $("#second-section").offset().top
    }, 1000);
});

$("#solution-button").click(function () {
    $('html, body').animate({
        scrollTop: $("#third-section").offset().top
    }, 1000);
});

$("#results-button").click(function () {
    $('html, body').animate({
        scrollTop: $("#fourth-section").offset().top
    }, 1000);
});

$("#slideshow-button").click(function () {
    $('html, body').animate({
        scrollTop: $("#fourth-section").offset().top
    }, 1000);
});

$("#circle-1").click(function () {
    $('html, body').animate({
        scrollTop: $("#first-section").offset().top
    }, 1000);
});

$("#circle-2").click(function () {
    $('html, body').animate({
        scrollTop: $("#second-section").offset().top
    }, 1000);
});

$("#circle-3").click(function () {
    $('html, body').animate({
        scrollTop: $("#third-section").offset().top
    }, 1000);
});

$("#circle-4").click(function () {
    $('html, body').animate({
        scrollTop: $("#fourth-section").offset().top
    }, 1000);
});

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