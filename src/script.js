const card = document.querySelector('.container');

card.addEventListener("mousemove", cardEffect);
card.addEventListener("mouseleave", cardBack);
card.addEventListener("mouseenter", cardEnter);


card.addEventListener("touchmove", cardEffect);
card.addEventListener("touchcancel", cardBack);
card.addEventListener("touchstart", cardEnter);


card.addEventListener("deviceorientation", function(event) {
    alpha = Math.round(event.alpha);
    beta = Math.round(event.beta);
    gamma = Math.round(event.gamma);
}, true);



function cardEffect(event) {
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = card.offsetLeft + cardWidth / 2;
    const centerY = card.offsetTop + cardHeight / 2;
    const positionX = event.clientX - centerX || event.touches[0].clientX - centerX || event.gamma - centerX;
    const positionY = event.clientY - centerY || event.touches[0].clientY - centerY || event.alpha - centerY;

    const rotateX = ((+1) * 25 * positionY / (cardHeight / 2).toFixed(2));
    const rotateY = ((-1) * 25 * positionX / (cardWidth / 2).toFixed(2));

    card.style.transform = ` perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    console.log(rotateX, rotateY);
    //console.log(rotateX);

}

function cardBack(event) {
    card.style.transform = ` perspective(500px) rotateX(0deg) rotateY(0deg)`;
    cardTransition();
}

function cardTransition() {
    clearInterval(card.transitionId)
    card.style.transition = 'transform 400ms';
    card.transitionId = setTimeout(() => {
        card.style.transition = '';
    }, 400);
}

function cardEnter(event) {
    cardTransition();
}