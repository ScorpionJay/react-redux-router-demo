# Demo



样式分离
http://webpack.github.io/docs/stylesheets.html
npm install extract-text-webpack-plugin --save

CSS里为什么我给ul加上background后整个区块颜色不变呢？
 分享| 2013-08-16 08:25 HAONANREN2002 | 浏览 1040 次  来自：手机知道
ul{
width：400px;
background:blue;
}
ul li{
float:left;
background:orange;
}
2013-08-16 09:05 提问者采纳
你里面的 li 设置浮动float了
float是不能把父级标签的高撑开的
也就是说你现在ul的高是0所以就没有背景色了，你给ul设个高就好了