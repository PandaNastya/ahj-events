const cursor = document.querySelector(".cursor");

export default function moveCursor(e) {  //постановка картинки
    cursor.style.top = `${e.pageY}px`;
    cursor.style.left = `${e.pageX}px`;
}

window.addEventListener("mouseover", moveCursor);