import anime from "animejs";

$(document).ready(function () {
    alert("JS is working");
});
// Service dropdown
$(function () {
    "use strict";

    function uncheckBox() {
        var isChecked = $("#services-menu").prop("checked");
        if (isChecked) {
            $("#services-menu").prop("checked", false);
        }
    }
    function checkBox() {
        var isChecked = $("#services__toggler").prop("checked");
        if (!isChecked) {
            $("#services__toggler").prop("checked", true);
        }
        if (isChecked) {
            $("#services__toggler").prop("checked", false);
        }
    }

    $("body").on("click", function () {
        uncheckBox();
    });
    $(".navigation__icon").on("click", function () {
        checkBox();
    });

    $("#services-menu,label").on("click", function (e) {
        e.stopPropagation();
    });
});

$(document).ready(function () {
    var servicesMenu = () => {
        anime({
            targets: ".services__menu",
            duration: 300,
        });
    };
    servicesMenu();
});
