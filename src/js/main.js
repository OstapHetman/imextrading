// $('#carouselProduction').on('slide.bs.carousel', function(e) {

//     var $e = $(e.relatedTarget);
//     var idx = $e.index();
//     var itemsPerSlide = 3;
//     var totalItems = $('.carousel-item').length;

//     if (idx >= totalItems - (itemsPerSlide - 1)) {
//         var it = itemsPerSlide - (totalItems - idx);
//         for (var i = 0; i < it; i++) {
//             // append slides to end
//             if (e.direction == "left") {
//                 $('.carousel-item').eq(i).appendTo('.carousel-inner');
//             } else {
//                 $('.carousel-item').eq(0).appendTo('.carousel-inner');
//             }
//         }
//     }
// });
$('#carouselProduction').on('slide.bs.carousel', function(e) {

    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('.carousel-production-item').length;
    console.log(totalItems);

    if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "left") {
                $('.carousel-production-item').eq(i).appendTo('.carousel-production-inner');
            } else {
                $('.carousel-production-item').eq(0).appendTo('.carousel-production-inner');
            }
        }
    }
});

// Certificate Slider
// $('#carouselCertificate').on('slide.bs.carousel', function(e) {
//     var $e = $(e.relatedTarget);
//     var idx = $e.index();
//     var itemsPerSlide = 3;
//     var totalItems = $('.carousel-item.certificate-item').length;
//     console.log('Total Slides: ' + totalItems);
//     if (idx >= totalItems - (itemsPerSlide - 1)) {
//         var it = itemsPerSlide - (totalItems - idx);
//         for (var i = 0; i < it; i++) {
//             // append slides to end
//             console.log('It: ' + it);
//             if (e.direction == "left") {
//                 console.log('IF: ')
//                 $('.carousel-item.certificate-item').eq(i).appendTo('.carousel-inner');
//             } else {
//                 console.log('else: ')
//                 $('.carousel-item.certificate-item').eq(0).appendTo('.carousel-inner');
//             }
//         }
//     }
// });
$('#carouselCertificate').on('slide.bs.carousel', function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('.carousel-certificate-item').length;
    console.log('Total Slides: ' + totalItems);
    if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
            // append slides to end
            console.log('It: ' + it);
            if (e.direction == "left") {
                console.log('IF: ')
                $('.carousel-certificate-item').eq(i).appendTo('.carousel-certificate-inner');
            } else {
                console.log('else: ')
                $('.carousel-certificate-item').eq(0).appendTo('.carousel-certificate-inner');
            }
        }
    }
});

// Get src and set to modal
const imgInModal = document.getElementById('modal-image');
const images = document.getElementsByClassName('certificate__img');
const lengthImg = images.length;

for (let i = 0; i < lengthImg; i++) {

    images[i].onclick = function() {
        let attr = this.getAttribute('src');
        console.log(attr);
        imgInModal.setAttribute('src', `${attr}`);
        console.log('Works...');
    }
}