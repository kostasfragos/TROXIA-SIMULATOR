const slider_1 = document.querySelector("#velocity-1");
const slider_2 = document.querySelector("#velocity-2");
const slider_3 = document.querySelector("#velocity-3");
const slider_4 = document.querySelector("#velocity-4");
const main_canvas = document.querySelector("#main-canvas");

// function log_slider_values() {
//     console.log(slider_1.value, slider_2.value);
//     ctx.clearRect(0, 0, main_canvas.width, main_canvas.height);
//     ctx.beginPath();
//     ctx.rect(slider_1.value, slider_2.value, 150, 100);
//     ctx.stroke();
// }

// slider_1.addEventListener("input", e => log_slider_values());
// slider_2.addEventListener("input", e => log_slider_values());

// const ctx  = main_canvas.getContext("2d")

var canvas = new fabric.Canvas('main-canvas');

// create a rectangle with angle=45
var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 20,
  height: 20,
  angle: 45
});

canvas.add(rect);

var circle = new fabric.Circle({
    radius: 20, 
    fill: 'green', 
    left: canvas.getWidth()/2, 
    top: canvas.getHeight()/2,
    originX: "center", 
    originY:"center",
    fill: null, 
    strokeWidth: 3, 
    stroke: "orange", 
    startAngle: 0,
    endAngle: 360
  });
 
canvas.add(circle);

function log_slider_values() {
    rect.set({
        left: Number.parseInt(slider_1.value)/100 * canvas.getWidth(), 
        top: Number.parseInt(slider_2.value)/100 * canvas.getHeight()
    });
    // circle.set({
    //     left: Number.parseInt(slider_3.value)/100 * canvas.getWidth(), 
    //     top: Number.parseInt(slider_4.value)/100 * canvas.getHeight()
    // })

    const s1 = Number.parseInt(slider_1.value);
    const s2 = Number.parseInt(slider_2.value);
    if(s1 == s2)
        return;
    
    const r = s1/Math.abs(s2-s1) * 3;

    circle.set({
        radius: r,
        endAngle: Number.parseInt(slider_4.value)/100 * 360
    })
    canvas.renderAll();
}

slider_1.addEventListener("input", e => log_slider_values());
slider_2.addEventListener("input", e => log_slider_values());
slider_3.addEventListener("input", e => log_slider_values());
slider_4.addEventListener("input", e => log_slider_values());

