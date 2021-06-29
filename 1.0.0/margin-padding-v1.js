// $(document).ready(function(){
//     var mt = $("*[class*='m-t-']");
//     for(var i=0; i<mt.length; i++){
//         var tt = mt[i];
//         var classList = $(tt).attr('class').split(/\s+/);
//         classList.forEach(element => {
//             if(element.match('^m-t-')){
//                 var regex = /\d+/g;
//                 var value = element.match(regex)+'px';
//                 $('.'+element).css('margin-top',value);
//             }
//         });
//     }
// });

window.onload = (event) => {
    var mt = document.querySelectorAll("*[class*='m-t-']");
    mt.forEach(element => {
        var classList = element.className.split(' ');
        classList.forEach(singleClass => {
            if(singleClass.match('^m-t-')){
                // var regex = /d+/g;
                var regex = /(\d+)/;
                var value = singleClass.match(regex);
                var css = document.querySelector('.'+singleClass);
                css.style.marginTop = value[0]+"px";
            }
        });
    });

    // for(var i=0; i<mt.length; i++){
    //     var tt = mt[i];
    //     var classList = document.querySelectorAll(tt).attr('class').split(/s+/);
    //     classList.forEach(element => {
    //         if(element.match('^m-t-')){
    //             var regex = /d+/g;
    //             var value = element.match(regex)+'px';
    //             document.querySelectorAll('.'+element).css('margin-top',value);
    //         }
    //     });
    // }
};