document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    };

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});

const words = document.querySelectorAll('.flexrowwrap h1, .flexrowwrap h3');

    words.forEach(word => {
        word.addEventListener('mouseover', () => {
            word.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`;
            words.forEach(otherWord => {
                if (otherWord !== word) {
                    otherWord.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`;
                }
            });
        });

    word.addEventListener('mouseout', () => {
        word.style.transform = 'translate(0, 0)';
        words.forEach(otherWord => {
            otherWord.style.transform = 'translate(0, 0)';
        });
    });
});