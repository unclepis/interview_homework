require('../css/index.scss')

// 获取屏幕的宽度
let htmlwidth = document.documentElement.clientWidth || document.body.clientWidth;

console.log(htmlwidth);
// 获取html dom

let htmlDom = document.getElementsByTagName('html')[0];
htmlDom.style.fontSize = htmlwidth / 85.7 + 'px';

//设置html的font－szie作为rem的基准
window.addEventListener('resize', () => {
    htmlwidth = document.documentElement.clientWidth || document.body.clientWidth;
    htmlDom.style.fontSize = htmlwidth / 85.7 + 'px';
    console.log(htmlwidth);
})

// 当用户滚动的时候进度条出现
const sectionDom = document.querySelector('.mainSection');

sectionDom.addEventListener('mouseover', () => {
    sectionDom.style.overflow = 'scroll';
});

sectionDom.addEventListener('mouseleave', () => {
    sectionDom.style.overflow = 'hidden';
});
