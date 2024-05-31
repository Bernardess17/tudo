// Identificar o click no ícone da lixeira
  var btnTrash = document.querySelector("#a > div.painel-de-botao > i.fas.fa-trash-alt")
// Anexar um evento de click ao ícone da lixeira
   btnTrash.addEventListener("click", function(){
    console.log("Remover essa linha aqui quando eu clicar na lixeira");
     btnTrash.closest("#a").remove();

   })
    var btnTrash = document.querySelector("#b > div.painel-de-botao > i.fas.fa-trash-alt")
    btnTrash.addEventListener("click", function(){
     console.log("remover essa linha aqui quando eu clicar na lixeira")
     btnTrash.closest("#b").remove();

    })
    var btnTrash = document.querySelector("#c > div.painel-de-botao > i.fas.fa-trash-alt")
    btnTrash.addEventListener("click", function(){
     console.log("remover essa linha aqui quando eu clicar na lixeira")
     btnTrash.closest("#c").remove();

    })
    var btnTrash = document.querySelector("#d > div.painel-de-botao > i.fas.fa-trash-alt")
    btnTrash.addEventListener("click", function(){
     console.log("remover essa linha aqui quando eu clicar na lixeira")
     btnTrash.closest("#d").remove();


    })

// Remove uma linha de tarefa
function removeTarefa(idTarefa){
    console.log("Id da tarefa", idTarefa)
    btnTrash.closest("").remove(); 

}
    



