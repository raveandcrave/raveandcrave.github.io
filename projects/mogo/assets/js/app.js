$(function() {


    /*Header Fixed*/
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();



 $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(introH, scrollPos);

    });
    function checkScroll(introH, scrollPos) {
        if(scrollPos>introH){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /*Smooth Scroll*/
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset
        },700);
    });

    /*Menu nav Toggle*/
    $("#nav_toggle").on("click", function(event){
        event.preventDefault();


        $("#nav").toggleClass("active");
        $("#nav_toggle").toggleClass("active");

    })


    /*Collapse*/
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
        elementId = $this.data('collapse');

        $this.toggleClass("active");

    })

    /*Slider*/
    $('[data-slider]').slick({
        infinite: true,
        fade:false,
        slidesToShow: 1,
          slidesToScroll: 1
    });

});
