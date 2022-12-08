const transPos = document.querySelector("#direction");

transPos.addEventListener("input", function () {
  let pos = this.value;
  document.documentElement.style.setProperty("--pos", pos);
});