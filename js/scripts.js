let celulas = document.querySelectorAll('celula');
let chechar_turno= true;
const jogador_x="x"
const jogador_o="O"

document.addEventListener('click', (e)=>{
 if(e.target.matches('.celula')){
    jogar(e.target.id);
}
});
function jogar (id){
    const celula = document.getElementById(id);
    turno = chechar_turno ? jogador_x:jogador_o;
    celula.innerHTML = turno;
    chechar_turno = !chechar_turno;
}