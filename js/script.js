jQuery(document).ready(function() {
    $('.nav-item').click(function() {
        $('.navbar-toggler').addClass('collapsed').attr('aria-expanded', 'false');
        $('.navbar-collapse').removeClass('collapse').removeClass('show').addClass('collapse');
    });

    var $navBar = $('.sticky-top');
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 200) {
            $navBar.addClass('border-b');
        } else {
            $navBar.removeClass('border-b');
        }

        if ($(this).scrollTop() > 200) {
            $("#go-top").fadeIn();
        } else {
            $("#go-top").fadeOut();
        }
    });

    $("#go-top").click(function() {
        window.location.href = "#"
    });
});
