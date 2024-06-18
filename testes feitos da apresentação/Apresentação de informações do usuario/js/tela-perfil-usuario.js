const inputImagem = document.getElementById('input-imagem');
const imagemPreview = document.getElementById('imagem-preview');
const STORAGE_KEY = 'foto_perfil';

// Carregar foto do perfil do armazenamento local, se disponível
const fotoPerfil = localStorage.getItem(STORAGE_KEY);
if (fotoPerfil) {
    imagemPreview.src = fotoPerfil;
}

inputImagem.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            imagemPreview.src = reader.result;
            // Armazenar a imagem no armazenamento local
            localStorage.setItem(STORAGE_KEY, reader.result);
        }
        reader.readAsDataURL(file);
    }
});

// Função para remover a foto do perfil
function removerFotoPerfil() {
    // Remover a imagem do armazenamento local
    localStorage.removeItem(STORAGE_KEY);
    // Limpar a visualização da imagem
    imagemPreview.src = '';
}


// Carregar objetivos do armazenamento local, se disponíveis
const descricaoDptoInput = document.getElementById('descricao-dpto');
const OBJETIVOS_STORAGE_KEY = 'objetivos';

const objetivosSalvos = localStorage.getItem(OBJETIVOS_STORAGE_KEY);
if (objetivosSalvos) {
    descricaoDptoInput.value = objetivosSalvos;
}

// Salvar objetivos quando o botão "Salvar" for clicado
function salvar() {
    const objetivos = descricaoDptoInput.value;
    // Armazenar objetivos no armazenamento local
    localStorage.setItem(OBJETIVOS_STORAGE_KEY, objetivos);
    alert('Objetivos salvos com sucesso!');
}

// Função para salvar o nome localmente
function salvarNome() {
    var nomeUsuario = document.getElementById("input-nome").value;
    localStorage.setItem("nomeUsuario", nomeUsuario);
    alert("Nome salvo com sucesso!");
}

// Verifica se há um nome salvo localmente ao carregar a página
window.onload = function() {
    var nomeSalvo = localStorage.getItem("nomeUsuario");
    if (nomeSalvo !== null) {
        document.getElementById("input-nome").value = nomeSalvo;
    }
};


function editarTexto() {
    var quadrado = document.getElementById("quadrado");
    var conteudoQuadrado = document.getElementById("conteudoQuadrado");

    // Transforma o texto do quadrado em um campo de texto editável
    conteudoQuadrado.contentEditable = true;
    conteudoQuadrado.focus();

    // Quando o usuário pressionar Enter, desfoca do campo de texto
    conteudoQuadrado.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            conteudoQuadrado.blur();
        }
    });

    // Quando o usuário desfocar do campo de texto, torna o conteúdo não editável novamente
    conteudoQuadrado.addEventListener("blur", function () {
        conteudoQuadrado.contentEditable = false;
    });
}


