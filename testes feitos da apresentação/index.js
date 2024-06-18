function criarDesafio() {
    // Obter o valor do conteúdo do desafio
    var conteudoDesafio = document.getElementById('conteudoDesafio').value;
    
    // Criar um novo elemento para o desafio
    var novoDesafio = document.createElement('div');
    novoDesafio.classList.add('card');
    novoDesafio.innerHTML = '<div class="card-body">' + conteudoDesafio + '</div>';
    
    // Adicionar o novo desafio à área de desafios cadastrados
    var desafiosContainer = document.getElementById('desafiosContainer');
    desafiosContainer.appendChild(novoDesafio);
    
    // Limpar o campo de entrada
    document.getElementById('conteudoDesafio').value = '';
    
    // Fechar o modal
    var modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    modal.hide();
  }