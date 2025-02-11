$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        open();
    });

    btn_open.click(function() {
        open();
    });

    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");

        // Show images when opening the envelope
        $("#image1").fadeIn().css("display", "block");
        $("#image2").fadeIn().css("display", "block");
    }

    function close() {
        envelope.addClass("close").removeClass("open");

        // Hide images when resetting
        $("#image1").fadeOut();
        $("#image2").fadeOut();
    }
});
