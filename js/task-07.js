const elments = {
  fontSizeControl: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

elments.fontSizeControl.addEventListener("input", onChangeFontSize);
elments.text.style.fontSize = `${elments.fontSizeControl.value}px`;

function onChangeFontSize(event) {
  elments.text.style.fontSize = `${event.currentTarget.value}px`;
}