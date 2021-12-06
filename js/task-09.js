const el = {
  changeColor: document.querySelector(".change-color"),
  selectedColor: document.querySelector(".color"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onColorChange(event) {
  const colorHex = getRandomHexColor();
  document.body.style.backgroundColor = colorHex;
  el.selectedColor.textContent = colorHex;
}

el.changeColor.addEventListener("click", onColorChange);
