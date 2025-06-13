document.getElementById('checkButton').addEventListener('click', function() {
    // 立即触发五彩纸屑效果
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        // 从不同位置发射五彩纸屑
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
    }, 250);

    // 显示自定义提示框
    const customAlert = document.getElementById('customAlert');
    customAlert.classList.add('show');
});

// 关闭自定义提示框
document.querySelector('.alert-close').addEventListener('click', function() {
    const customAlert = document.getElementById('customAlert');
    customAlert.classList.remove('show');
}); 