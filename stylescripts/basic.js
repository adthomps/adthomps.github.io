$(document)
.ready(function () {

// fix menu when passed
$('.masthead')
    .visibility({
        once: false,
        onBottomPassed: function () {
            $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function () {
            $('.fixed.menu').transition('fade out');
        }
    })
    ;

// create sidebar and attach to menu open
$('.ui.sidebar')
    .sidebar('attach events', '.toc.item')
    ;

})


// Lightbox for photos using Semantic UI

$('.PhotoCard').click(function() {
        var image = $(this).children('img').attr('src');
        $('body').append('<div class="ui basic modal"><div class="content"><img src="'+image+'" width="100%" /></div></div>');        
        $('.ui.basic.modal')
            .remove()
            .modal('show');
})

;