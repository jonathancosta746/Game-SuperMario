const mario = document.querySelector('.mario');
const tubulação = document.querySelector('.tubulação');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 1500);
}

const loop = setInterval(() => {
    const tubulaçãoPosition = tubulação.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if(tubulaçãoPosition <= 120 && tubulaçãoPosition > 0 && marioPosition < 80) {

            tubulação.style.animation = 'none';
            tubulação.style.left = '${tubulaçãoPosition}px';

            mario.style.animation = 'none';
            mario.style.left = '${marioPosition}px';

            mario.src = './images/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';
        }
}, 10)

document.addEventListener('keydown', jump);