$(function () {

    $('#texto').on('input', function () {
        let texto = $(this).val().replace(/\s{2,}/g,' ');
        $(this).val($(this).val().replace(/\r?\n|\r/g,'').replace(/\s{2,}/g,' '));
        $('#convertido1').val(texto);
    });
});
