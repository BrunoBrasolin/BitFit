var form = $("form");

var planoUm = $("#contrate-plano-1");
var planoDois = $("#contrate-plano-2");
var selectPlano = $("#select-plano");

var selectUnidade = $("#select-unidade");
var unidadeMongagua = $("#unidade-mongagua");
var unidadeItanhaem = $("#unidade-itanhaem");
var unidadeSaoPaulo = $("#unidade-sao-paulo");
var unidadePraiaGrande = $("#unidade-praia-grande");

planoUm.click(function (event) {
    event.preventDefault();
    var scroll = $(window).scrollTop();
    form.css("top", scroll + "px");
    selectPlano.val(1);
    form.fadeIn("slow");
});
planoDois.click(function (event) {
    event.preventDefault();
    var scroll = $(window).scrollTop();
    form.css("top", scroll + "px");
    selectPlano.val(2);
    form.fadeIn("slow");
});
unidadeMongagua.click(function (event) {
    event.preventDefault();
    var scroll = $(window).scrollTop();
    form.css("top", scroll + "px");
    selectUnidade.val(1);
    form.fadeIn("slow");
});
unidadeItanhaem.click(function (event) {
    event.preventDefault();
    var scroll = $(window).scrollTop();
    form.css("top", scroll + "px");
    selectUnidade.val(2);
    form.fadeIn("slow");
});
unidadeSaoPaulo.click(function (event) {
    event.preventDefault();
    var scroll = $(window).scrollTop();
    form.css("top", scroll + "px");
    selectUnidade.val(3);
    form.fadeIn("slow");
});
unidadePraiaGrande.click(function (event) {
    event.preventDefault();
    var scroll = $(window).scrollTop();
    form.css("top", scroll + "px");
    selectUnidade.val(4);
    form.fadeIn("slow");
});

$("#close-modal").click(function () {
    fechaModal();
});

$(window).scroll(function () {
    fechaModal();
})

$(document).mouseup(function (event) {
    if (!form.is(event.target) && form.has(event.target).length === 0) {
        fechaModal();
    }
});

function fechaModal() {
    form.fadeOut("fast");
    selectPlano.val(0);
    selectUnidade.val(0);
}

$("#enviar-form").click(function (event) {
    event.preventDefault();
    $("fieldset").hide();
    $("#success").css("display", "inline-block");
});