/**
 * Função 13: Exibe uma mensagem de boas-vindas simples APENAS UMA VEZ POR SESSÃO.
 */
function exibirBoasVindasPorSessao() {
    // 1. CHAVE DE CONTROLE: Usa sessionStorage para durar apenas até o navegador fechar.
    const CHAVE_VISTA = 'boasVindasPetShowVisto';

    // 2. VERIFICAÇÃO: Checa se a chave já existe.
    if (sessionStorage.getItem(CHAVE_VISTA)) { 
        console.log("Mensagem de boas-vindas já foi exibida nesta sessão.");
        return; 
    }

    // 3. LÓGICA DO ALERTA: Completo.
    const horaAtual = new Date().getHours();
    let saudacao = "";

    if (horaAtual < 12) {
        saudacao = "Bom dia";
    } else if (horaAtual < 18) {
        saudacao = "Boa tarde";
    } else {
        saudacao = "Boa noite";
    }

    // 4. EXIBE O ALERTA:
    alert(`${saudacao}! Bem-vindo(a) à PetShow, o melhor lugar para seu amigo de patas!`);

    // 5. GRAVAÇÃO: Salva a chave no sessionStorage.
    sessionStorage.setItem(CHAVE_VISTA, 'true');
}

// Chama a função COMPLETA.
exibirBoasVindasPorSessao();