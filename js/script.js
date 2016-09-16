var grid = '.grid';         // Wrapper around the results
var option = '.option';     // Filter Option Element
var active = 'active';      // Will be added to the active element
var attr = 'data-group';    // Name of the Attribute containing the filter tags

$(grid).isotope({});        // Initializes Isotope

//
$(option).click(function(){
    $(option).removeClass(active);
    $(this).addClass(active);
    $(grid).isotope({filter: $(this).attr(attr)});
});