import $ from 'jquery';

document.addEventListener("DOMContentLoaded", function() {

    let my_text = $('#wrapper-16').find('p').text();
 
    let new_text = [...my_text].map(function(e,i){
        return e != ' ' ? `<span>${e}</span>` : ' ';
    });

    new_text = new_text.toString().replace(/,/g,'');

    $('#wrapper-16').find('p').html(new_text);


});