
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

    function isElementTarget(element){
        return (filteredTo === 'None' || $(element).attr("data-target").includes(filteredTo))
         && (myTarget === 'None' || $(element).attr("my-target").includes(myTarget));
    }
    function updateFilter(){
        $('.cableItem').each( function (index, element){
            if (!isElementTarget(element)){
                $(element).addClass('cableItem-hide')
            }else{
                $(element).removeClass('cableItem-hide')
            }
        })
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