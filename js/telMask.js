function mascararTelefone(input) {
    let valor = input.value.replace(/\D/g, '');

    if (valor.length > 0) {
        valor = '(' + valor;
    }
    if (valor.length > 3) {
        valor = valor.substring(0, 3) + ') ' + valor.substring(3);
    }
    if (valor.length > 10) {
        valor = valor.substring(0, 10) + '-' + valor.substring(10, 14);
    }

    input.value = valor;
}