var a;
a=400;
document.addEventListener('DOMContentLoaded', () => {
    const slenderman = document.getElementById('slenderman');
    const body = document.body;

    function randomPosition() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        return {
            x: Math.floor(Math.random() * width),
            y: Math.floor(Math.random() * height)
        };
    }

    function showSlenderman() {
        const { x, y } = randomPosition();
        slenderman.style.left = `${x}px`;
        slenderman.style.top = `${y}px`;
        slenderman.style.display = 'block';
    }

    setInterval(showSlenderman, a); // Показываем Слендермана каждые 1000 мс

    body.addEventListener('click', (event) => {
        if (event.target === slenderman) {
            alert("Вы победили!");
            location.reload(); // Перезагружаем страницу для новой игры
        } else {
            slenderman.style.display = 'none'; // Скрываем Слендермана
        }
    });
});