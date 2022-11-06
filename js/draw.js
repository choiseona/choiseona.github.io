const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colorss = document.getElementsByClassName("controls_color");
const range = document.getElementById("range");
const mode = document.getElementById("mode_btn");
const save = document.getElementById("save_btn");
const clear = document.getElementById("clear_btn");

const INIT_FILL_COLOR = "rgb(255, 255, 255)";
const INIT_STROCKE_COLOR = "rgb(44, 44, 44)";

canvas.width = 300;
canvas.height = 300;

ctx.fillStyle = "rgb(255, 255, 255)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.lineWidth = 2.5;

changeColor(INIT_STROCKE_COLOR);

let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
  ctx.closePath();
}

function startPainting() {
  if (!filling) {
    painting = true;
    ctx.beginPath();
    ctx.moveTo(x, y);
  }
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  if (painting) {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleColorClick(event) {
  changeColor(event.target.style.backgroundColor);
}

function changeColor(color) {
  ctx.strokeStyle = color;
  ctx.fillStyle = color;

  Array.from(colorss).forEach((e) => {
    if (e.classList.contains("active") && e.style.backgroundColor !== color) {
      e.classList.remove("active");
    } else if (e.style.backgroundColor === color && !e.classList.contains("active")) {
      e.classList.add("active");
    }
  });
}

function handleRangeChange(event) {
  ctx.lineWidth = event.target.value;
}

function handleModeClick() {
  filling = !filling;

  if (filling) {
    mode.innerText = "Fill Mode";
  } else {
    mode.innerText = "Draw Mode";
  }
}

function handleCanvasClick() {
  if (filling) ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function handleSaveClick() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "Paint";
  link.click();
}

function handleClearClick() {
  ctx.fillStyle = INIT_FILL_COLOR;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = ctx.strokeStyle;
}

canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);
canvas.addEventListener("click", handleCanvasClick);

Array.from(colorss).forEach((e) => {
  e.addEventListener("click", handleColorClick);
});

range.addEventListener("input", handleRangeChange);
mode.addEventListener("click", handleModeClick);
save.addEventListener("click", handleSaveClick);
clear.addEventListener("click", handleClearClick);