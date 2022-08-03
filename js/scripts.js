let celulas = document.querySelectorAll(".celula");

const jogador_x="x"
const jogador_o="O"


const combinaçao=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]
document.addEventListener('click', (e)=>{
    if(e.target.matches('.celula')){
       jogar(e.target.id);
       bot();
   }
   });

   
   function bot(){ 
    const posicaoDisponivel=[];
    for (index in celulas){
        if(!isNaN(index)){
            if(!celulas[index].classList.contains("X") &&
               !celulas[index].classList.contains("O")
            ){
                posicaoDisponivel.push(index);
             }
        }
    }
    const aleatorio = Math.floor(
        
    Math.random()*posicaoDisponivel.length
    
    );
 
     jogar (posicaoDisponivel[aleatorio],jogador_o);

};

function jogar (id){
    const celula = document.getElementById(id);
   turno = checar_turno ? jogador_x : jogador_o;
    celula.textContent = turno;
    celula.classList.add(turno);

    checar_ganhador(turno);

}


function checar_ganhador(turno){
    const vencedor = combinaçao.some((comb)=>{
        return comb.every((index)=>{
          return celulas[index].classList.contains(turno);

        })
    });
    if(vencedor){
        encerrar_jogo(turno);
    }
    else if(checar_empate()){
        encerrar_jogo();
    }

}
 //fim da função checar_ganhador
function checar_empate(){ 
    let x=0;
    let o=0;
 
    for(index in celulas){
        if(!isNaN(index)){
             if(celulas[index].classList.contains("jogador_x")){
             x++;
              }
              
             if(celulas[index].classList.contains("jogador_o")){
                 o++;
             } 
        }
    }

   return x+o=== 9 ? true : false;
}

 function encerrar_jogo(vencedor=null){ 
    let tela = document.getElementById("tela-escura");
    let h2 = document.createElement("h2");
    let h3 = document.createElement("h3");
    let mensagem= null
    
    tela.style.display="block";
    tela.appendChild(h2);
    tela.appendChild(h3);

    if(vencedor){
        h2.innerHTML=`O jogador <span> ${vencedor}</span> ganhou!`;
    }
    else{
        h2.innerHTML= `O jogo empatou!`;
        }
};

