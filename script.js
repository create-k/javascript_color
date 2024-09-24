// JavaScript

// console.log('Hello world!');
// console.log(document.getElementById('myColor').value);

// document.getElementById('bodyText').textContent = document.getElementById('myColor').value;

//定数の宣言
const color = document.getElementById('myColor');
const text = document.getElementById('bodyText');

// text.textContent = color.value;

function changeColor() {
    // 背景色を変更
    document.body.style.backgroundColor = color.value;

    //カラーコードを表示
    if (color.value === '#274b84') {
        text.textContent = 'コード：' + color.value + '(三日月宗近)';
    } else if (color.value === '#d7b214') {
        text.textContent = 'コード：' + color.value + '(小狐丸)';
    } else if (color.value === '#779657') {
        text.textContent = 'コード：' + color.value + '(石切丸)';
    } else if (color.value === '#74288a') {
        text.textContent = 'コード：' + color.value + '(岩融)';
    } else if (color.value === '#e84c5e') {
        text.textContent = 'コード：' + color.value + '(今剣)';
    } else if (color.value === '#b6aebe') {
        text.textContent = 'コード：' + color.value + '(骨喰藤四郎)';
    } else if (color.value === '#8e6881') {
        text.textContent = 'コード：' + color.value + '(薬研藤四郎)';
    } else if (color.value === '#e52a6e') {
        text.textContent = 'コード：' + color.value + '(亀甲貞宗)';
    } else if (color.value === '#e52a6e') {
        text.textContent = 'コード：' + color.value + '(亀甲貞宗)';
    } else {
        text.textContent = 'コード：' + color.value;
    }


}

// カラーピッカーで色が選択されたら、changeColorを動作させる
color.addEventListener('input', changeColor);