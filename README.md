Função observarElementosNoDOM()
Objetivo:
Esta função monitora e responde a alterações no DOM, especificamente quando novos elementos são adicionados.

Uso:
Para utilizá-la, basta chamar observarElementosNoDOM(), geralmente chamada durante a inicialização da página.

Detalhes Técnicos:
MutationObserver:

É inicializado para observar mudanças no document.body.
Parâmetros: { childList: true, subtree: true } - Observa mudanças nos filhos e subárvores.
Callback do MutationObserver:

Executado sempre que ocorre uma mutação no DOM.
Processo:

a. Iteração sobre Mutations:

Itera sobre a lista de mutações (mutationsList).
b. Verificação de Elementos Adicionados:

Verifica se há elementos adicionados na mutação.
c. Seleção de Elementos:

Seleciona elementos usando document.querySelectorAll para ícones de remoção e links de produtos.
d. Modificações nos Links:

Modifica os links de produtos para javascript:void(0) para evitar que sejam clicáveis.
e. Remoção de Links em Células de Imagem:

Remove os atributos href de links dentro de células de imagem.
f. Condição de Finalização:

Se existirem elementos específicos no DOM (elementos.length > 0), são realizadas alterações adicionais nos ícones e ações específicas são executadas (alterarClassesDosIcones, alterarEmcasa, emFranquia).
Em seguida, o observador é desconectado para interromper a observação contínua.
Notas Finais:
Modularidade:
A função chama outras funções (alterarClassesDosIcones, alterarEmcasa, emFranquia) para realizar ações específicas após a detecção dos elementos desejados.
Desempenho:
O uso de um observador de mutação é eficiente para detecção de alterações no DOM sem a necessidade de atualizações constantes.
