//滚动页面
var timer;
roll();
const image = [];
for (let i = 0; i < 11; i++) {
    image[i] = document.getElementsByClassName("image")[i];
}
for (let i = 0; i < image.length; i++) {
    image[i].onmouseover = () => {
        clearInterval(timer);
    };
}
for (let i = 0; i < image.length; i++) {
    image[i].onmouseout = () => {
        roll();
    };
}

function roll() {
    const imglist = document.getElementById("imglist");
    timer = setInterval(() => {
        let oldValue = parseInt(getComputedStyle(imglist, null).left);
        let newValue = oldValue - 1;
        imglist.style.left = newValue + "px";
        if (newValue == -930) {
            imglist.style.left = 0;
        }
    }, 15);
}