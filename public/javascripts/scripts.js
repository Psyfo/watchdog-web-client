$(document).ready(function() {});
// Service dropdown
$(function() {
    'use strict';

    function uncheckBox() {
        var isChecked = $('#services-menu').prop('checked');
        if (isChecked) {
            $('#services-menu').prop('checked', false);
        }
    }
    function checkBox() {
        var isChecked = $('#services__toggler').prop('checked');
        if (!isChecked) {
            $('#services__toggler').prop('checked', true);
        }
        if (isChecked) {
            $('#services__toggler').prop('checked', false);
        }
    }

    $('body').on('click', function() {
        uncheckBox();
    });
    $('.navigation__icon').on('click', function() {
        checkBox();
    });

    $('#services-menu,label').on('click', function(e) {
        e.stopPropagation();
    });
});
