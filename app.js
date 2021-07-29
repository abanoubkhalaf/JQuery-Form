$(document).ready(function () {

    $("form").animate({
        top: "0",
    }, 500);
    $("form").animate({
        borderRadius: "5%",
    }, 500, function () {
        $("form").css("transform", "rotateZ(10turn)");
    });
    $("form").animate({
        width: "50%",
    }, 500);
    $("form").animate({
        height: "300px",
    }, 500, function () {
        $("div, button").slideDown(1000);
    });
    $("button").click(function (e) {
        e.preventDefault();
        $("div, button").slideUp(100);
        $("form").animate({
            "width": "50px"
        }, "100");
        $("form").animate({
            "height": "50px"
        }, "100", function () {
            $("form").delay(1000).css("transform", "rotateZ(20turn)");
        }).fadeOut(800);
    });
});