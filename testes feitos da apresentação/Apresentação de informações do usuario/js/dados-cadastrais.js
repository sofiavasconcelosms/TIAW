function salvar() {
    function obterID() {
        let id = parseInt(localStorage.getItem("id")) || 0;
        id += 1;
        localStorage.setItem("id", id);
        return id;
    }

    var birthDate = document.getElementById('birthdate').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var password = document.getElementById('password').value;
    


    if (birthDate.trim() === '') {
        alert('Por favor, selecione sua data de nascimento.');
        return;
    }

    if (email.trim() === '') {
        alert('Por favor, digite seu e-mail.');
        return;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, digite um e-mail válido.');
        return;
    }

    if (number.trim() === '') {
        alert('Por favor, digite seu número de celular.');
        return;
    }

    if (password.trim() === '') {
        alert('Por favor, digite sua senha.');
        return;
    }


   
    var usuario = {
        id: obterID(),
        birthDate: birthDate,
        email: email,
        number: number,
        password: password,

    };

    var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert('Dados cadastrais alterados com sucesso!');
    window.location.href = "crud.html";
}
