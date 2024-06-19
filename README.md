![img](https://github.com/Alanrk/hexo-theme-one_note/blob/main/source/img/screen.jpg)

这里是专注阅读和写作的Hexo主题 “onenote”，性冷淡风格，在原Hexo主题“one-paper”基础上修改而来，原主题“one-paper”链接[zheli-design/hexo-theme-one-paper: 专注于写作，模拟纸张阅读感受的轻量 Hexo 主题。 (github.com)](https://github.com/zheli-design/hexo-theme-one-paper)

在“one-paper”的基础上，专注于提供良好的阅读体验，保持轻量和视觉的干净，希望给访客带来良好的阅读体验。

## Demo

## 支持功能

### 继承自“one-paper”的内容

* 响应式设计，兼容手机端、pad 端以及 PC 端；
- 支持所有现代浏览器；
- Markdown 常用格式支持；
- 代码高亮、行数显示支持；
- 目前版本支持的模版页：首页、文章详情页、归档页、单页；
### “onenote”修改内容

* 主页视觉调整：调整主页背景颜色、内容区尺寸、字号、行高；文章列表新增标签显示；footer 部分版权显示自动获取当前年份；
- 文章详情页调整：调整文章字号和版式，使之更适合阅读；增加文章标签显示；返回按钮由顶部调整到页面底部；
- 归档页调整：调整归档页页面样式，增加按照年份倒排的归档列表，使归档页重点更突出；
- 新增标签云页：增加标签云页面，点击标签，可查看该标签的所有文章；
- 代码高亮样式调整：统一代码高亮样式，增加复制代码按钮；
- 删除 "one-paper"内置第三方字体；

以上调整在 chatgpt的支持下完成（毕竟我只是一个只能看懂部分 HTML 和 css的经验的人）。

### 安装

1. 下载 zip 压缩包并解压；
2. 复制 onenote 到 hexo/themes 目录下；
3. 更改博客根目录_config.yml 配置：`theme: onenote`；
4.  终端切换到博客目录，输入`hexo server` 预览效果。

