const options = document.getElementsByClassName("option");
const calculate = document.getElementById("calculate");
const name = document.getElementById("name");
const resultEl = document.getElementsByClassName("result")[0];
const greeting = document.getElementById("greeting");

const results = {
  autumn: "CrabCakes",
};

const otherResults = [
  "Grumpy",
  "Deep in thought",
  "Tired",
  "Contemplating your life",
  "Easily annoyed",
  "Ready to go",
  "Still asleep",
];

name.addEventListener("keyup", () => {
  greeting.innerHTML =
    name.value.trim().toUpperCase()[0] +
    name.value.trim().toLowerCase().slice(1);
});

const optionClick = (e) => {
  if (e.target.style.color == "white") {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "black";
  } else {
    e.target.style.backgroundColor = "rgb(150, 150, 255)";
    e.target.style.color = "white";
  }
};

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", optionClick);
}

const calculateResult = () => {
  if (Object.keys(results).includes(name.value.trim().toLowerCase())) {
    console.log("yes");
    resultEl.innerHTML = "Loading...";
    window.setTimeout(() => {
      resultEl.innerHTML = results[name.value.trim().toLowerCase()];
      resultEl.classList.add("color");
    }, 3000);
  } else {
    console.log("no");
    resultEl.innerHTML = "Loading...";
    window.setTimeout(() => {
      resultEl.innerHTML =
        otherResults[Math.floor(Math.random() * otherResults.length)];
      resultEl.classList.add("color");
    }, 3000);
  }
};

calculate.addEventListener("click", calculateResult);
