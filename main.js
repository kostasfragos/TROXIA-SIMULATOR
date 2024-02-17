const slider_1 = document.querySelector("#velocity-1");
const slider_2 = document.querySelector("#velocity-2");
const main_canvas = document.querySelector("#main-canvas");

function log_slider_values() {
    console.log(slider_1.value, slider_2.value);
    ctx.clearRect(0, 0, main_canvas.width, main_canvas.height);
    ctx.beginPath();
    ctx.rect(slider_1.value, slider_2.value, 150, 100);
    ctx.stroke();
}

slider_1.addEventListener("change", e => log_slider_values());
slider_2.addEventListener("change", e => log_slider_values());

const ctx  = main_canvas.getContext("2d")
