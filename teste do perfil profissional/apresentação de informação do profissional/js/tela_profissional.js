// Função para carregar a descrição do profissional armazenada localmente
function carregarDescricao() {
    var descricaoSalva = localStorage.getItem("descricaoProfissional");
    if (descricaoSalva) {
        document.getElementById("descricao").value = descricaoSalva;
    }
}

// Função para salvar a descrição do profissional
function salvarDescricao(descricao) {
    localStorage.setItem("descricaoProfissional", descricao);
}

// Adiciona um listener de evento para o envio do formulário
document.getElementById("formDescricao").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    var novaDescricao = document.getElementById("descricao").value;
    salvarDescricao(novaDescricao); // Salva a nova descrição
    alert("Descrição do profissional salva com sucesso!");
});

// Carrega a descrição do profissional ao carregar a página
carregarDescricao();


// Função para salvar o telefone e email do profissional
function salvarContato(telefone, email) {
    localStorage.setItem("telefoneProfissional", telefone);
    localStorage.setItem("emailProfissional", email);
}

// Adiciona um listener de evento para o envio do formulário
document.getElementById("dropdownMenuButtonDark").addEventListener("click", function (event) {
    event.preventDefault(); // Evita o comportamento padrão do dropdown

    var telefone = document.getElementById("input-telefone").value;
    var email = document.getElementById("input-email").value;

    salvarContato(telefone, email); // Salva o telefone e email
    alert("Telefone e email do profissional salvos com sucesso!");
});

// Carrega o telefone e email do profissional ao carregar a página
function carregarContato() {
    var telefoneSalvo = localStorage.getItem("telefoneProfissional");
    var emailSalvo = localStorage.getItem("emailProfissional");
    
    if (telefoneSalvo) {
        document.getElementById("input-telefone").value = telefoneSalvo;
    }
    if (emailSalvo) {
        document.getElementById("input-email").value = emailSalvo;
    }
}

// Carrega o telefone e email do profissional ao carregar a página
carregarContato();




