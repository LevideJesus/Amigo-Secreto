let nomeDosAmigos =[];

function adicionarAmigo (){
   let inputAmigosDoPeito = document.getElementById ('amigo');
   let amigosAdicionados = inputAmigosDoPeito.value
   console.log (amigosAdicionados)
   
   if (amigosAdicionados == '') {
      alert ('Por favor, adicionar um nome valido!')
      return;

   }else if (nomeDosAmigos.includes (amigosAdicionados))
      alert ("Nome já adicionado na lista")
   
      else {
         nomeDosAmigos.push (amigosAdicionados);
         amigosAdicionados = document.querySelector('input');
         amigosAdicionados.value = '';
         atualizarLista();
         limparCampo();
      }
      
   
}

function atualizarLista(){
   let lista = document.getElementById ('listaAmigos')
   lista.innerHTML = '';
   for( let i = 0; i < nomeDosAmigos.length; i++){
      let item = document.createElement ('li');
      item.textContent = nomeDosAmigos[i];
      lista.appendChild(item);
   }

}
       
function sortearAmigo(){
   if (nomeDosAmigos.length < 2){
      alert ('Por favor, adicione dois amigos para iniciar o sorteio!');
      return;
   }else {
      let sorteioAmigo = Math.floor(Math.random() * nomeDosAmigos.length);
      let amigoSorteado = nomeDosAmigos [sorteioAmigo];
      let resultado = document.getElementById('resultado');
      resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
   }
   

}
