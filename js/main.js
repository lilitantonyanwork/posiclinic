$(function (){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:40,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });
    $('.btn-menu').on('click',function (){
        $('.overlay').toggle();
        $('.aside').addClass('show');
        $('body').addClass('no-scroll');

    })
    $('.overlay').on('click',function (){
        $('.overlay').toggle();
        $('.aside').removeClass('show');
        $('body').removeClass('no-scroll');

    })
    $('.close-menu').on('click',function (){
        $('.overlay').toggle();
        $('.aside').removeClass('show');
        $('body').removeClass('no-scroll');

    })
    $('.btn-request').on('click',function (e){
        e.preventDefault();
        $('.popup-contact').toggleClass('show');
        $('body').addClass('no-scroll');

    })
    $('.btn-green-outline').on('click',function (e){
        e.preventDefault();
        $('.popup-contact').toggleClass('show');
        $('.popup-contact').find('.form-row:nth-child(4)').show();
        $('body').addClass('no-scroll');

    })
    $('.btn-address').on('click',function (e){
        e.preventDefault();
        $('.popup-find-us').toggleClass('show');
        $('body').addClass('no-scroll');

    });
    $('.address a').on('click',function (e){
        e.preventDefault();
        $('.popup-find-us').toggleClass('show');
        $('body').addClass('no-scroll');
    })
    $('.btn-close').on('click',function (e){
        e.preventDefault();
        $('.popup').removeClass('show');
        $('.popup-contact').find('.form-row:nth-child(4)').hide();
        $('body').removeClass('no-scroll');

    })
    $('.tab-item').on('click',function (){
        $('.tab-item').removeClass('active');
        $('.tab').addClass('dn').removeClass('active');
        $(this).addClass('active');
        let index= $(this).index() + 1;
        console.log(index)
        $('.tab-'+ index).removeClass('dn').addClass('active')
    })

    $( ".menu-item.has-sub" )
        .on( "mouseover", function() {
            $( this ).find( "> .menu-link" ).siblings('.menu-sub').addClass('show');
        } )
        .on( "mouseout", function() {
                $( this ).find( ".menu-link" ).siblings('.menu-sub').removeClass('show');

        } ).off().on('click',function (e){
        e.preventDefault();
        $('.menu-sub').removeClass('show');
        if( !$( this ).find( "> .menu-link" ).siblings('.menu-sub').hasClass('show')){

            $( this ).find( "> .menu-link" ).siblings('.menu-sub').addClass('show');
        } else{
            $( this ).find( "> .menu-link" ).siblings('.menu-sub').removeClass('show');

        }
    })

    $( ".menu-sub > .menu-item" )
        .on( "mouseover", function() {
            $( this ).find( "> .menu-link" ).siblings('.menu-sub').addClass('show-sub');
        } )
        .on( "mouseout", function() {
                $(this).find(".menu-link").siblings('.menu-sub').removeClass('show-sub');
        } ).off().on('click',function (e){
        e.preventDefault();
        $('.menu-sub').removeClass('show-sub');
        if( ! $(this).find(".menu-link").siblings('.menu-sub').hasClass('show-sub')){

            $( this ).find( "> .menu-link" ).siblings('.menu-sub').addClass('show-sub');

        } else{
            $(this).find(".menu-link").siblings('.menu-sub').removeClass('show-sub');

        }
    })

    function getIp(callback) {
        fetch('ipinfo.io/140.82.183.34?token=66e2f39b20a2bd', { headers: { 'Accept': 'application/json' }})
            .then((resp) => resp.json())
            .catch(() => {
                return {
                    country: 'ru',
                };
            })
            .then((resp) => callback(resp.country));
    }

    const phoneInputField = document.querySelector("#phone");
    const phoneInput = window.intlTelInput(phoneInputField, {
        utilsScript:
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        initialCountry: "ru"
    });

    const info = document.querySelector(".alert-info");

    function process(event) {
        event.preventDefault();

        const phoneNumber = phoneInput.getNumber();

        info.style.display = "";
        info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
    }
})