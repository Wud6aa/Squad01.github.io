function agendarHorario() {
    const selectedRadio = document.querySelector('input[name="horario"]:checked');
    if (selectedRadio) {
        const horarioSelecionado = selectedRadio.value;
        console.log("Horário selecionado: ", horarioSelecionado);
    } else {
        console.log("Nenhum horário selecionado.");
    }
    return false;
}