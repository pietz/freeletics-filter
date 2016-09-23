$(document).ready(function(){

    var grid = $('.page-content');
    var options = $('.mdl-switch__input');
    var attribute = 'data-group';
    
    grid.isotope();

    function executeFilter() {
        var filters = [];
        options.filter(':checked').each(function(){
            filters.push($(this).attr(attribute));
        })
        filters.push('.p' + $("#slider").val().toString().charAt(0));
        filters = filters.join().split(',').join('');
        console.log(filters);
        grid.isotope({filter: filters});
    }

    options.change(function(){
        executeFilter();
    });

    $('#slider').on("input change", function(){
        $('#sliderOutput').text("Max Points: " + $('#slider').val());
        executeFilter();
    });

    var dialog = document.querySelector('dialog');
    var showDialogButton = document.querySelector('#show-dialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });

})
