$(document).ready(function(){
    var mt = $("*[class*='m-t-']");
    for(var i=0; i<mt.length; i++){
        var tt = mt[i];
        var classList = $(tt).attr('class').split(/\s+/);
        classList.forEach(element => {
            if(element.match('^m-t-')){
                var regex = /\d+/g;
                var value = element.match(regex)+'px';
                $('.'+element).css('margin-top',value);
            }
        });
    }
});