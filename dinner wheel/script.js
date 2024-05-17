document.addEventListener('DOMContentLoaded', () => {
    const wheel = document.getElementById('wheel');
    const button = document.getElementById('spinButton');

    button.addEventListener('click', () => {
        const rotation = Math.floor(Math.random() * 3600) + 360; // 随机旋转角度
        wheel.style.transform = `rotate(${rotation}deg)`;
    });
});
