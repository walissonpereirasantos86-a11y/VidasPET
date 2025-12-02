function exibirBoasVindasPorSessao() {
    const CHAVE_VISTA = 'boasVindasPetShowVisto';

    if (sessionStorage.getItem(CHAVE_VISTA)) { 
        return; 
    }

    const horaAtual = new Date().getHours();
    let saudacao = "";

    if (horaAtual < 12) {
        saudacao = "Bom dia";
    } else if (horaAtual < 18) {
        saudacao = "Boa tarde";
    } else {
        saudacao = "Boa noite";
    }

    alert(`${saudacao}! Bem-vindo(a) à PetShow, o melhor lugar para seu amigo de patas!`);

    sessionStorage.setItem(CHAVE_VISTA, 'true');
}

exibirBoasVindasPorSessao();