// =========================
// BLOG DO MC PAIVA
// =========================


// =========================
// BOTÕES DE CURTIDA
// =========================

// Seleciona somente os botões de curtida
const botoes = document.querySelectorAll(
    ".btn-curtir, .btn-like"
);


// Adiciona o funcionamento em cada botão
botoes.forEach(function (botao) {

    let curtiu = false;

    botao.addEventListener("click", function () {

        const texto = botao.querySelector("span");

        // Verifica se existe um contador
        if (!texto) {
            return;
        }

        let numero = Number(texto.textContent);


        // Curtir
        if (!curtiu) {

            numero++;

            curtiu = true;

            botao.classList.add("curtido");

        }

        // Descurtir
        else {

            numero--;

            curtiu = false;

            botao.classList.remove("curtido");
        }


        // Atualiza o número
        texto.textContent = numero;
    });

});


// =========================
// BOTÃO DE TEMA
// =========================

// Seleciona o botão de tema
const btnTemaEscuro = document.querySelector(
    ".btn-tema-escuro"
);


// Verifica se o botão existe
if (btnTemaEscuro) {

    btnTemaEscuro.addEventListener(
        "click",
        mudaTema
    );

}


// =========================
// FUNÇÃO PARA MUDAR O TEMA
// =========================

function mudaTema() {

    const corpoPagina = document.body;


    // Alterna entre claro e escuro
    corpoPagina.classList.toggle(
        "tema-escuro"
    );


    // Verifica qual tema está ativo
    if (
        corpoPagina.classList.contains(
            "tema-escuro"
        )
    ) {

        // Tema escuro
        btnTemaEscuro.textContent = "☀️";

        btnTemaEscuro.setAttribute(
            "aria-label",
            "Ativar tema claro"
        );

        btnTemaEscuro.setAttribute(
            "title",
            "Ativar tema claro"
        );

    } else {

        // Tema claro
        btnTemaEscuro.textContent = "🌙";

        btnTemaEscuro.setAttribute(
            "aria-label",
            "Ativar tema escuro"
        );

        btnTemaEscuro.setAttribute(
            "title",
            "Ativar tema escuro"
        );
    }

}
