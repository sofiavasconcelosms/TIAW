var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
var tabelaUsuarios = document.getElementById('tabelaUsuarios');

for (var i = 0; i < usuarios.length; i++) 
    {
    (function (index) {
        var usuario = usuarios[index];
        var tr = document.createElement('tr');
        

        var tdBirthDate = document.createElement('td');
        var inputBirthDate = document.createElement('input');
        inputBirthDate.type = 'date';
        inputBirthDate.value = usuario.birthDate;
        inputBirthDate.disabled = true;
        inputBirthDate.name = 'birthDate';
        tdBirthDate.appendChild(inputBirthDate);
        tr.appendChild(tdBirthDate);

       

        var tdEmail = document.createElement('td');
        var inputEmail = document.createElement('input');
        inputEmail.type = 'email';
        inputEmail.value = usuario.email;
        inputEmail.disabled = true;
        inputEmail.name = 'email';
        tdEmail.appendChild(inputEmail);
        tr.appendChild(tdEmail);

        var tdPassword = document.createElement('td');
        var inputPassword = document.createElement('input');
        inputPassword.type = 'password';
        inputPassword.value = usuario.password;
        inputPassword.disabled = true;
        inputPassword.maxLength = 15;
        inputPassword.name = 'password';
        tdPassword.appendChild(inputPassword);
        tr.appendChild(tdPassword);

        var tdNumber = document.createElement('td');
        var inputNumber = document.createElement('input');
        inputNumber.type = 'tel';
        inputNumber.value = usuario.number;
        inputNumber.disabled = true;
        inputNumber.maxLength = 11;
        inputNumber.name = 'number';
        tdNumber.appendChild(inputNumber);
        tr.appendChild(tdNumber);

       

        var tdActions = document.createElement('td');

        var editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.onclick = function () {
            var inputs = tr.querySelectorAll('input, select');
            for (var k = 0; k < inputs.length; k++) {
                inputs[k].disabled = false;
            }
            editButton.style.display = 'none';
            saveButton.style.display = 'inline-block';
            cancelButton.style.display = 'inline-block';
            showPasswordCheckbox.disabled = false;
        };

        var saveButton = document.createElement('button');
        saveButton.textContent = 'Salvar';
        saveButton.style.display = 'none';
        saveButton.onclick = function () {
            var inputs = tr.querySelectorAll('input, select');
            for (var k = 0; k < inputs.length; k++) {
                inputs[k].disabled = true;
            }
            saveButton.style.display = 'none';
            editButton.style.display = 'inline-block';
            cancelButton.style.display = 'none';

            usuarios[index].birthDate = inputBirthDate.value;
            usuarios[index].email = inputEmail.value;
            usuarios[index].password = inputPassword.value;
            usuarios[index].number = inputNumber.value;

            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        };

        var cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancelar';
        cancelButton.style.display = 'none';
        cancelButton.onclick = function () {
            cancelEdit(tr, usuario);
            saveButton.style.display = 'none';
            editButton.style.display = 'inline-block';
            cancelButton.style.display = 'none';
        };

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.onclick = function () {
            var confirmacao = confirm("Tem certeza que deseja excluir este usuário?");
            if (confirmacao) {
                usuarios.splice(index, 1);
                localStorage.setItem("usuarios", JSON.stringify(usuarios));
                location.reload();
            }
        };

        tdActions.appendChild(editButton);
        tdActions.appendChild(saveButton);
        tdActions.appendChild(cancelButton);
        tdActions.appendChild(deleteButton);
        tr.appendChild(tdActions);

        var showPasswordCheckbox = document.createElement('input');
        showPasswordCheckbox.type = 'checkbox';
        showPasswordCheckbox.disabled = true;
        tdPassword.appendChild(showPasswordCheckbox);

        showPasswordCheckbox.addEventListener('change', function () {
            inputPassword.type = this.checked ? 'text' : 'password';
        });

        tabelaUsuarios.appendChild(tr);
    })(i);
}

function cancelEdit(row, originalData) {
    var inputs = row.querySelectorAll('input, select');
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var fieldName = input.name;
        if (fieldName) {
            input.value = originalData[fieldName];
        }
        input.disabled = true;
    }
    var editButton = row.querySelector('button:nth-of-type(1)');
    var saveButton = row.querySelector('button:nth-of-type(2)');
    var cancelButton = row.querySelector('button:nth-of-type(3)');
    editButton.style.display = 'inline-block';
    saveButton.style.display = 'none';
    cancelButton.style.display = 'none';
}