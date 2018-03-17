require('../css/index.scss')

// 获取屏幕的宽度
let htmlwidth = document.documentElement.clientWidth || document.body.clientWidth;
let htmlDom = document.getElementsByTagName('html')[0];
htmlDom.style.fontSize = htmlwidth / 85.7 + 'px';

//设置html的font－szie作为rem的基准
window.addEventListener('resize', () => {
    htmlwidth = document.documentElement.clientWidth || document.body.clientWidth;
    htmlDom.style.fontSize = htmlwidth / 85.7 + 'px';
})

// 获取dom的公共函数
const getDom = (selector) => {
    return document.querySelector(selector);
}

// 文档载入加载
window.onload = () => {
    // 下拉登陆和登出
    let timer;
    const dropDownDom = getDom('.iconAngelDown');
    const dropDownMenu = getDom('#loginActionDom');
    dropDownMenu.style.display = 'none';
    dropDownDom.addEventListener('mouseover', () => {
        clearTimeout(timer);
        dropDownMenu.style.display = 'flex';
    });

    dropDownDom.addEventListener('mouseleave', () => {
        timer = setTimeout(() => {
            dropDownMenu.style.display = 'none';
        }, 500);
    });

    // 当用户滚动的时候进度条出现
    const sectionDom = getDom('.mainSection');

    sectionDom.addEventListener('mouseover', () => {
        sectionDom.style.overflow = 'scroll';
    });

    sectionDom.addEventListener('mouseleave', () => {
        sectionDom.style.overflow = 'hidden';
    });

    // 在tablet下aside的侧边栏出现和显示可以切换
    const asideToggleButton = getDom('.asideShow');
    const aside = getDom('aside');
    asideToggleButton.addEventListener('click', () => {
        if (aside.style.display === '') {
            aside.style.display = 'flex';
        } else {
            aside.style.display = '';
        }
    });

    // func 1 添加浏览器

    const addIconDom = getDom('.addIcon');
    addIconDom.addEventListener('click', (e) => {
        const addopUp = document.createElement('div');
        const popUpTemplate = [
            '<div class="popupContainer">',
            '<span class="close icon icon-close" onClick = "cancelPopUp()">',
            '</span>',
            '<span class="addMsg">',
            'Seperate multiple resource with commas',
            '</span>',
            '<input type="text" class="addInput"/>',
            '<div class="popupButton">',
            '<button class="addButton" onClick = "addResources()">',
            'Add Resources',
            '</button>',
            '<button class="cancelButton" onClick = "cancelPopUp()">',
            'Cancel',
            '</button>',
            '</div>',
            '</div>'
        ].join('');
        addopUp.innerHTML = popUpTemplate;
        e.target.appendChild(addopUp);
    });

}


window.removeCurrent = (id) => {
    const currentDom = document.querySelector(`#${id}`);
    currentDom.parentNode.removeChild(currentDom);
}






