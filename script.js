document.getElementById('checkButton').addEventListener('click', function() {
    // 显示提示
    alert('电脑已开机！');
    
    // 触发五彩纸屑效果
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}); 