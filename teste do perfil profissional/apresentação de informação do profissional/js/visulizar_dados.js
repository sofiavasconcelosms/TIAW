const nome_html = document.querySelector("#nome-prfl");
const sobrenome_html = document.querySelector("#sobrenome-prfl");
const nascimento_html = document.querySelector("#nascimento-prfl");
const genero_html = document.querySelector("#genero-prfl");
const telefone_html = document.querySelector("#telefone-prfl");
const email_html = document.querySelector("#email-prfl");
const senha_html = document.querySelector("#senha-prfl");
const crm_html = document.querySelector("#crm-prfl");

function exibirDetalhesProfissional() {

    const id = sessionStorage.getItem("idProfissional");

    let profissionais = JSON.parse(localStorage.getItem("profissionais")) || [];

    let profissional = profissionais.find((p) => { return p.id == id; } );

    nome_html.innerText = profissional.nome;
    sobrenome_html.innerText = profissional.sobrenome;
    nascimento_html.innerText = profissional.nascimento;
    genero_html.innerText = profissional.genero;
    telefone_html.innerText = profissional.telefone;
    email_html.innerText = profissional.email;
    senha_html.innerText = profissional.senha;
    crm_html.innerText = profissional.crm;
}

window.addEventListener("load", () => {

    exibirDetalhesProfissional();

});