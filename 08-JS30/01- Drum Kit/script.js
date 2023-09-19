window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-item = "${e.keyCode}"]`);
    const block = document.querySelector(`.block[data-item = "${e.keyCode}"]`);
    // 如果沒有對應的audio，就不傳值
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    block.classList.add('press');
});

// 建立一個移除.press funciton
function removePress(e){
    if ( e.propertyName !== 'transform' ) return;
    this.classList.remove('press');
};

// forEach 加上 事件監聽 'transitionend'
const blocks = document.querySelectorAll('.block');
blocks.forEach( block => {
    block.addEventListener('transitionend', removePress);
});