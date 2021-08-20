var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
setInterval("plusSlides(1)", 5000)
fetch('courses.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        courses(data);
    })
    .catch(function(err) {
        console.log('Error: ' + err)
    });

function courses(data) {
    let coursesCont = document.getElementById('courses-cont');
    for (let index = 0; index < data.length; index++) {
        if (index % 5 == 0) {
            headSec3 = document.createElement('div');
            headSec3.className = 'head-sec3';
            coursesCont.appendChild(headSec3);
        };

        let coursesContent = document.getElementsByClassName('head-sec3')[document.getElementsByClassName('head-sec3').length - 1];
        // console.log(coursesContent[coursesContent.length-1])
        let flipCard = document.createElement('div');
        flipCard.className = 'flip-card';
        coursesContent.appendChild(flipCard);

        let flipCardInner = document.createElement('div');
        flipCardInner.className = 'flip-card-inner';
        flipCard.appendChild(flipCardInner);

        let flipCardFront = document.createElement('div');
        flipCardFront.className = 'flip-card-front';
        flipCardInner.appendChild(flipCardFront);

        let fh1 = document.createElement('h1');
        flipCardFront.appendChild(fh1);
        fh1.innerHTML = `${data[index].Name}`

        let flipCardBack = document.createElement('div');
        flipCardBack.className = 'flip-card-back';
        flipCardInner.appendChild(flipCardBack);

        let bh1 = document.createElement('h1');
        flipCardBack.appendChild(bh1);
        bh1.innerHTML = `${data[index].Cost}`;

        let bp1 = document.createElement('p');
        flipCardBack.appendChild(bp1);
        bp1.innerHTML = `${data[index].Desc}`;

        let bp2 = document.createElement('p');
        flipCardBack.appendChild(bp2);
        bp2.innerHTML = `By:- ${data[index].professorName}`;
    };
};