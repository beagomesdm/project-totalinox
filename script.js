
function confirmar() {

    let mensagem = "Código adicionado com sucesso!"; // peguei o id do meu paragrafo para quando fosse clicado o botao, mostrasse a mensagem la escrita 
    let inputTarefa = document.getElementById("inputTarefa") // criei uma variavel com o mesmo id que eu dei ao meu input
    let tarefa = inputTarefa.value // criei uma variavel para pegar o conteudo que fosse escrito dentro do meu input
    document.getElementById("mensagem").textContent = mensagem; // pedi para o JS olhar para o meu paragrafo nomeado de mensagem e adicionar o texto

    let listaTarefas = document.getElementById("listaTarefas") // dei o nome listaTarefas à minha ul, criada la no html. (ul é lista) 
    let novaTarefa = document.createElement("li") // criei uma variavel nova q n existe em lugar nenhum, e criei o ELEMENTO LI!! atribuí a variavel, 
    // o elemento que acabei de criar (a lista)

    novaTarefa.textContent = tarefa // Aqui eu pego o texto que salvei do input e escrevo ele dentro do li que acabei de fabricar. 
    // O li agora tem conteúdo, mas ainda está guardado na minha mão."
    listaTarefas.appendChild(novaTarefa) // É o "GRUDE": Pega o item que fabriquei e preenchi (novaTarefa) 
// e coloca ele dentro da minha lista (listaTarefas) que já está no HTML. 
// Sem essa linha, o item existe na memória, mas não aparece no site.

    inputTarefa.value = "" // esvazia a caixa input toda vez que eu escrevo algo e clico em confirmar. 
    inputTarefa.focus(); // faz o mouse voltar para a janela de input sem precisar clicar novamente

}