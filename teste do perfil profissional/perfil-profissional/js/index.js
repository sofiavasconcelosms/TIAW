// Função para criar um novo desafio
function criarDesafio() {
  // Obtém o conteúdo do desafio do input
  var conteudoDesafio = document.getElementById("conteudoDesafio").value;
  
  // Verifica se o conteúdo do desafio não está vazio
  if (conteudoDesafio.trim() !== "") {
    // Obtém o container de desafios
    var desafiosContainer = document.getElementById("desafiosContainer");
    
    // Cria um novo elemento de div para o desafio
    var novoDesafio = document.createElement("div");
    novoDesafio.classList.add("desafio");
    novoDesafio.textContent = conteudoDesafio;
    
    // Cria um botão de apagar para o novo desafio
    var btnDeletar = document.createElement("button");
    btnDeletar.textContent = "Apagar";
    btnDeletar.classList.add("btn", "btn-danger", "btn-sm");
    btnDeletar.onclick = function() {
      // Remove o desafio quando o botão de apagar é clicado
      desafiosContainer.removeChild(novoDesafio);
      
      // Verifica se ainda há desafios após a remoção
      if (desafiosContainer.children.length === 0) {
        // Se não houver desafios, mostra a mensagem "Nenhum desafio cadastrado"
        var nenhumDesafio = document.getElementById("nenhumDesafio");
        nenhumDesafio.style.display = "block";
      }
      
      // Salva os desafios atualizados no armazenamento local
      salvarDesafios();
    };
    
    // Adiciona o botão de apagar ao novo desafio
    novoDesafio.appendChild(btnDeletar);
    
    // Adiciona o novo desafio ao container
    desafiosContainer.appendChild(novoDesafio);
    
    // Mostra o container de desafios
    desafiosContainer.style.display = "inline-block";
    
    // Oculta a mensagem "Nenhum desafio cadastrado"
    var nenhumDesafio = document.getElementById("nenhumDesafio");
    nenhumDesafio.style.display = "none";
    
    // Limpa o input
    document.getElementById("conteudoDesafio").value = "";
    
    // Salva os desafios atualizados no armazenamento local
    salvarDesafios();
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

// Função para carregar os desafios do armazenamento local ao carregar a página
window.onload = function() {
  var desafios = JSON.parse(localStorage.getItem("desafios"));
  var desafiosContainer = document.getElementById("desafiosContainer");
  var nenhumDesafio = document.getElementById("nenhumDesafio");

  // Verifica se há desafios armazenados localmente
  if (desafios && desafios.length > 0) {
    // Carrega os desafios armazenados localmente
    desafios.forEach(function(desafio) {
      var novoDesafio = document.createElement("div");
      novoDesafio.classList.add("desafio");
      novoDesafio.textContent = desafio;

      // Cria um botão de apagar para cada desafio carregado
      var btnDeletar = document.createElement("button");
      btnDeletar.textContent = "Apagar";
      btnDeletar.classList.add("btn", "btn-danger", "btn-sm");
      btnDeletar.onclick = function() {
        // Remove o desafio quando o botão de apagar é clicado
        desafiosContainer.removeChild(novoDesafio);
        
        // Verifica se ainda há desafios após a remoção
        if (desafiosContainer.children.length === 0) {
          // Se não houver desafios, mostra a mensagem "Nenhum desafio cadastrado"
          var nenhumDesafio = document.getElementById("nenhumDesafio");
          nenhumDesafio.style.display = "block";
        }
        
        // Salva os desafios atualizados no armazenamento local
        salvarDesafios();
      };

      // Adiciona o botão de apagar ao desafio
      novoDesafio.appendChild(btnDeletar);

      // Adiciona o desafio ao container
      desafiosContainer.appendChild(novoDesafio);
    });
  } else {
    // Mostra a mensagem "Nenhum desafio cadastrado" se nenhum desafio estiver armazenado localmente
    nenhumDesafio.style.display = "block";
  }
}
