function validarFormulario() {
    const nomeInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const telefoneInput = document.getElementById('tel');
    const erroNome = document.getElementById('erroNome');
    const erroEmail = document.getElementById('erroEmail');
    const erroTelefone = document.getElementById('erroTelefone');

    erroNome.textContent = '';
    erroEmail.textContent = '';
    erroTelefone.textContent = '';

    let valid = true;

    if (nomeInput.value === '') {
        erroNome.textContent = 'Por favor, preencha o campo Nome.';
        valid = false;
    }

    if (emailInput.value === '' || !emailInput.checkValidity()) {
        erroEmail.textContent = 'Por favor, insira um e-mail válido.';
        valid = false;
    }

    if (telefoneInput.value === '' || !telefoneInput.checkValidity()) {
        const br = document.createElement('br');
        erroTelefone.appendChild(document.createTextNode('Por favor, insira um telefone válido.'));
        erroTelefone.appendChild(br);
        erroTelefone.appendChild(document.createTextNode('Ex: (DD) 9XXXX-XXXX'));
        return valid;
    }


    if (valid) {
        // Realizar ação de processamento do formulário, se necessário

        // Redirecionar após a validação
        window.location.href = '/thanks.html';

        // Impedir o envio normal do formulário
        return false;
    }


    return valid;
}