var nostraImageCaption = $('#nostraImages--caption');
var nostraImageCarousel = $('#nostraImages--carousel').carousel({interval:5000});

nostraImageCarousel.on('slide.bs.carousel', function(event) {
    nostraImageCaption.carousel('next');
})