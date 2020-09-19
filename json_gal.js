var galleryTitle = 'Finance';

var imagesData =

    [{
            "name": "Chevrolet Onix Joy",
            "name": "Potenciá tu actitud con Onix Joy que, además de destacarse por su diseño juvenil y moderno, te ofrecé una óptima autonomía, un desempeño equilibrado y el máximo confort interior. \u003cbr\u003eYa sea un viaje largo o un simple paseo por la ciudad, el confort es uno de los puntos fuertes del Onix. Esta versión incluye aire acondicionado, asientos tapizados en tela y gran espacio interior que te garantiza el máximo confort.",
            "cost": 13500,
            "currency": "USD",
            "soldCount": 14,
            "category": "Autos",
            "images": [
                "img/prod1.jpg",
                "img/prod1_1.jpg",
                "img/prod1_2.jpg",
                "img/prod1_3.jpg",
                "img/prod1_4.jpg"
            ],
            "relatedProducts": [1, 3]
        }



    ];

console.log(imagesData);

//
var connector = function(itemNavigation, carouselStage) {
    return carouselStage.jcarousel('items').eq(itemNavigation.index());
};

$(function() {
    // Setup the carousels. Adjust the options for both carousels here.
    var carouselStage = $('.carousel-stage').jcarousel();
    var carouselNavigation = $('.carousel-navigation').jcarousel();

    // We loop through the items of the navigation carousel and set it up
    // as a control for an item from the stage carousel.
    carouselNavigation.jcarousel('items').each(function() {
        var item = $(this);

        // This is where we actually connect to items.
        var target = connector(item, carouselStage);

        item
            .on('jcarouselcontrol:active', function() {
                carouselNavigation.jcarousel('scrollIntoView', this);
                item.addClass('active');
            })
            .on('jcarouselcontrol:inactive', function() {
                item.removeClass('active');
            })
            .jcarouselControl({
                target: target,
                carousel: carouselStage
            });
    });

    // Setup controls for the stage carousel

    /*
      $('.prev-stage')
          .on('jcarouselcontrol:inactive', function () {
              $(this).addClass('inactive');
          })
          .on('jcarouselcontrol:active', function () {
              $(this).removeClass('inactive');
          })
          .jcarouselControl({
              target: '-=1'
          });

      $('.next-stage')
          .on('jcarouselcontrol:inactive', function () {
              $(this).addClass('inactive');
          })
          .on('jcarouselcontrol:active', function () {
              $(this).removeClass('inactive');
          })
          .jcarouselControl({
              target: '+=1'
          });
       */

    // Setup controls for the navigation carousel
    $('.prev-navigation')
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .jcarouselControl({
            target: '-=5'
        });

    $('.next-navigation')
        .on('jcarouselcontrol:inactive', function() {
            $(this).addClass('inactive');
        })
        .on('jcarouselcontrol:active', function() {
            $(this).removeClass('inactive');
        })
        .jcarouselControl({
            target: '+=5'
        });

    //update images from json

});
//json update images data 
function reloadImages() {

    // update the album title
    $('.albumTitle').html(galleryTitle);

    //get the images d into the li
    var stageHtml = '<ul>',
        thumbHtml = '<ul>';
    $.each(imagesData, function(i) {
        stageHtml += '<li><img src="' + this.images + '" alt="' + i + '"><p>' + this.name + '</p></li>';
        thumbHtml += '<li><img src="' + this.cost + '" alt="' + i + '"></li>';
    });
    stageHtml += '</ul>';
    thumbHtml += '</ul>';
    console.log(stageHtml);
    console.log(thumbHtml);
    $('.carousel-stage').html(stageHtml);
    $('.carousel-navigation').html(thumbHtml);

    // Reload carousel
    carouselStage.carouselStage('reload');
    carouselNavigation.carouselStage('reload');
}
reloadImages();
// });