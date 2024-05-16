$(document).ready(function(){
    console.log(document.querySelector('header button'))

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const nomeNovaTarefa = $('#nome-nova-tarefa').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`
        <li>${nomeNovaTarefa}</li>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000);
        $('#nome-nova-tarefa').val('')

    })

})