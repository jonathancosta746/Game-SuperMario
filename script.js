const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


/*================ Função Start ===================*/ 

const start = () => {
    pipe.classList.add('pipe-animation');
    mario.src = './images/mario.gif';
            mario.style.width = '150px';
            mario.style.marginLeft = '50px';



}

document.addEventListener('keydown', start);












/*================ Função Pulo ===================*/ 

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 1500); 
}

document.addEventListener('keydown', jump);







/*================ Código para acabar o jogo ===================*/ 

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(pipePosition);
   
        if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80 ) {

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './images/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            clearInterval(loop);
         }
}, 10);