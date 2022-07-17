let celulas = document.querySelectorAll(".celula");
let checar_turno= true;
const jogador_x="x"
const jogador_o="O"

document.addEventListener('click', (e)=>{
 if(e.target.matches('.celula')){
    jogar(e.target.id);
}
});
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

function jogar (id){
    const celula = document.getElementById(id);
   turno = checar_turno ? jogador_x : jogador_o;
   checar_turno=!checar_turno;
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
    else if(checar_empate){
        encerrar_jogo();
    }
} //fim da função checar_ganhador
function checar_empate(){
    return false
} 

 function encerrar_jogo(vencedor=null){
        if(vencedor){
            console.log(vencedor + " venceu ");
        }
           else{
            console.log("Empate");
           
           }
            
        }
        
    
