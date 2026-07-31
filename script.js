function open_dropdown() {
  document.getElementById("header-items").classList.toggle("show");
}

function open_image(a) {
  a.parentNode
    .getElementsByClassName("image-scroll-container")[0]
    .classList.toggle("show");
}
