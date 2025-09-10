// 动态交互效果
document.addEventListener('DOMContentLoaded', function() {
    // 示例：为每个部分添加点击动画
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.addEventListener('click', () => {
            section.style.transform = 'scale(1.02)';
            setTimeout(() => {
                section.style.transform = 'scale(1)';
            }, 300);
        });
    });

    // 示例：控制台输出欢迎信息
    console.log('欢迎访问我的简历页面！');
});