document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((block) => {
        // 添加复制按钮
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = '复制';
        block.parentNode.insertBefore(button, block);

        // 按钮点击事件
        button.addEventListener('click', () => {
            const text = block.innerText;
            navigator.clipboard.writeText(text).then(() => {
                button.textContent = '已复制!';
                setTimeout(() => {
                    button.textContent = '复制';
                }, 2000);
            }).catch((err) => {
                console.error('复制失败: ', err);
                button.textContent = '复制失败';
            });
        });
    });

    hljs.highlightAll();
    hljs.initLineNumbersOnLoad();
});
