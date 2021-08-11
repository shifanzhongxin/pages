window.onload = function () {
    content1 = document.getElementById("content1");
    content2 = document.getElementById("content2");
    content3 = document.getElementById("content3");
    const title1 = document.getElementById("title1");
    const title2 = document.getElementById("title2");
    const title3 = document.getElementById("title3");
    title1.addEventListener("mouseover", buildText1, false);
    title2.addEventListener("mouseover", buildText2, false);
    title3.addEventListener("mouseover", buildText3, false);
}

function buildText1() {
    title1.style.backgroundColor = "#339933";
    content1.style.display = "block";
    title2.style.backgroundColor = "#6699cc";
    content2.style.display = "none";
    title3.style.backgroundColor = "#6699cc";
    content3.style.display = "none";
}

function buildText2() {
    title1.style.backgroundColor = "#6699cc";
    content1.style.display = "none";
    title2.style.backgroundColor = "#339933";
    content2.style.display = "block";
    title3.style.backgroundColor = "#6699cc";
    content3.style.display = "none";
}

function buildText3() {
    title1.style.backgroundColor = "#6699cc";
    content1.style.display = "none";
    title2.style.backgroundColor = "#6699cc";
    content2.style.display = "none";
    title3.style.backgroundColor = "#339933";
    content3.style.display = "block";
}