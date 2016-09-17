//var grid = '.grid';             // Wrapper around the results
//var option = '.option';         // Filter Option Element
//var active = 'btn-warning';     // Will be added to the active element
//var attr = 'data-group';        // Name of the Attribute containing the filter tags

var grid = '.page-content';             // Wrapper around the results
var option = '.mdl-switch__input';         // Filter Option Element
var active = 'active';     // Will be added to the active element
var attr = 'data-group';        // Name of the Attribute containing the filter tags

$(grid).isotope({});            // Initializes Isotope

// Click Handler
var $filters = [];
$(option).click(function(){
    if ($(this).hasClass(active)) {
        $(this).removeClass(active);
        $filters = removeByName($filters, $(this).attr(attr));
    } else {
        $(this).addClass(active);
        $filters.push($(this).attr(attr));
    }
    $(grid).isotope({filter: $filters.join().split(',').join('')});
});

// Removes an Elements by Value
function removeByName(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
};

/*
$(option).click(function(){
    $(option).removeClass(active);
    $(this).addClass(active);
    $(grid).isotope({filter: $(this).attr(attr)});
});
*/

/*
var $filters = [];
$(option).click(function(){
    console.log("jipp");
    if ($(this).hasClass(active)) {
        $(this).removeClass(active);
        $filters = removeByName($filters, $(this).attr(attr));
    } else {
        $(this).addClass(active);
        $filters.push($(this).attr(attr));
    }
    $(grid).isotope({filter: $filters.join().split(',').join('')});
});
*/