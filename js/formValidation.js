function validarFormulario() {
    const nomeInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const telefoneInput = document.getElementById('tel');
    const erroNome = document.getElementById('erroNome');
    const erroEmail = document.getElementById('erroEmail');
    const erroTelefone = document.getElementById('erroTelefone');
    const spinner = document.querySelector('.spinner-container');

    erroNome.textContent = '';
    erroEmail.textContent = '';
    erroTelefone.textContent = '';

    let valid = true;

    if (nomeInput.value === '') {
        erroNome.style.display = "block";
        erroNome.textContent = 'Por favor, preencha o campo Nome.';
        valid = false;
    }

    if (emailInput.value === '' || !emailInput.checkValidity()) {
        erroEmail.style.display = "block";
        erroEmail.textContent = 'Por favor, insira um e-mail válido.';
        valid = false;
    }

    if (telefoneInput.value === '' || !telefoneInput.checkValidity()) {
        erroTelefone.style.display = "block";
        const br = document.createElement('br');
        erroTelefone.appendChild(document.createTextNode('Por favor, insira um telefone válido.'));
        erroTelefone.appendChild(br);
        erroTelefone.appendChild(document.createTextNode('Ex: (DD) 9XXXX-XXXX'));
        valid = false;
    }


    if (valid) {
        // Realizar ação de processamento do formulário, se necessário
        spinner.style.display = 'flex';
        erroNome.style.display = 'none';
        erroEmail.style.display = 'none';
        erroTelefone.style.display = 'none';
        // Redirecionar após a validação
        setTimeout(() => {
            spinner.style.display = 'none';
            window.location.href = '/cadastro/thanks.html';
        }, 3000);

        // Impedir o envio normal do formulário
        return false;
    }

    return valid;
}