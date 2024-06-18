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

// Função para criar um novo desafio
function criarDesafio() {
    // Obtenha o conteúdo do desafio do input
    var conteudoDesafio = document.getElementById("conteudoDesafio").value;
    
    // Verifique se o conteúdo do desafio não está vazio
    if (conteudoDesafio.trim() !== "") {
        // Cria um novo elemento de div para o desafio
        var novoDesafio = document.createElement("div");
        novoDesafio.classList.add("desafio");
        novoDesafio.textContent = conteudoDesafio;

        // Obtém o container de desafios
        var desafiosContainer = document.getElementById("desafiosContainer");

        // Adicione o novo desafio ao container de desafios
        desafiosContainer.appendChild(novoDesafio);

        // Exiba o container de desafios e oculte a mensagem "Nenhum desafio adicionado ainda"
        document.getElementById("nenhumDesafio").style.display = "none";
        desafiosContainer.style.display = "block";

        // Limpe o input de conteúdo do desafio
        document.getElementById("conteudoDesafio").value = "";

        // Feche o modal
        var modal = bootstrap.Modal.getInstance(document.getElementById("exampleModal"));
        modal.hide();

        // Salva os desafios atualizados no armazenamento local
        salvarDesafios();
    } else {
        // Se o conteúdo do desafio estiver vazio, exiba uma mensagem de alerta
        alert("Por favor, insira o conteúdo do desafio.");
    }
}

// Função para salvar os desafios no armazenamento local
function salvarDesafios() {
    var desafios = [];
    var desafiosContainer = document.getElementById("desafiosContainer");
  
    // Obtém o texto de cada desafio e adiciona à lista de desafios
    for (var i = 0; i < desafiosContainer.children.length; i++) {
        desafios.push(desafiosContainer.children[i].textContent);
    }
  
    // Salva os desafios no armazenamento local
    localStorage.setItem("desafios", JSON.stringify(desafios));
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
