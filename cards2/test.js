
$(function(){
    
    var target = [];


    $('.category__nav a').click(function (e) {
        e.preventDefault();

        if ($(this).hasClass('checked')) {
            $(this).removeClass('checked');
            var currentIndex = target.indexOf($(this).attr('data-target'));
            target.splice(currentIndex, 1);
            $('.category').find('.cableItem').removeClass('cableItem-hide');

        } else {
            $(this).addClass('checked');
            target.push($(this).attr('data-target'));
        }
        $.each(target, function (index, value) {
            $('.category').find('.cableItem:not([data-target*="' + value + '"])').addClass('cableItem-hide');
        });

    });


    var filteredTo = "None"
    var myTarget = "None"
    function updateFilter(){
        $('.category').find('.cableItem').removeClass('cableItem-hide');

        if (filteredTo !== 'None'){
            $('.category').find(`.cableItem:not([data-target*="${filteredTo}"])`).addClass('cableItem-hide');
        }
        if (myTarget !== 'None'){
            $('.category').find(`.cableItem:not([my-target*="${myTarget}"])`).addClass('cableItem-hide');
        }
    }
    $('#type-selection').change(function(){
        filteredTo = $('#type-selection').val()
        console.log(filteredTo)
        updateFilter()
    })
    $('#my-selection').change(function(){
        myTarget = $('#my-selection').val()
        console.log(myTarget)
        updateFilter()
    })

});