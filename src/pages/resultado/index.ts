import { state } from "src/state";

export function initResultado(body: HTMLBodyElement, params) {
  function showResult(result, resultado) {
    const resultStarCE = document.querySelector("result-star-ce").shadowRoot;
    const img = resultStarCE.querySelector<HTMLElement>(`.${result}-star`);
    const txt = resultStarCE.querySelector<HTMLElement>(
      ".result-star-ce__text"
    );
    txt.innerHTML = resultado;
    img.setAttribute("style", "display: initial");
    state.pushResult(result);
    mainContainer.classList.add(`${result}-background`);
    showScore();
  }

  function showScore() {
    const userScore = mainContainer.querySelector<HTMLElement>(".user-score");
    const pcScore = mainContainer.querySelector<HTMLElement>(".pc-score");
    const score = data.results;
    userScore.innerHTML = "Vos: " + score.filter((e) => e == "win").length;
    pcScore.innerHTML = "Máquina: " + score.filter((e) => e == "lose").length;
  }

  const mainContainer = body.querySelector<HTMLElement>(".main-container");
  const data = state.getState();

  if (!mainContainer) {
    params.goTo("/inicio");
  } else {
    const backgroundEl = document.createElement("div");
    backgroundEl.className = "background-element";
    backgroundEl.innerHTML = mainContainer.innerHTML;
    mainContainer.innerHTML = `
  <div class='result-container'>
  <result-star-ce></result-star-ce>
  <div class='scoreboard'>
  <h2>Score</h2>
  <p class='user-score'></p>
  <p class='pc-score'></p>
  </div>
  <button-ce id='again-button'>Volver a Jugar</button-ce>
  </div>
  `;

    body.appendChild(backgroundEl);

    switch (data.pcMove * data.userMove) {
      case 12:
      case 5:
        showResult("win", "Ganaste");
        break;
      case 4:
      case 10:
      case 18:
        showResult("draw", "Empate");
        break;
      case 6:
      case 8:
      case 15:
        showResult("lose", "Perdiste");
        break;
    }

    const playAgainButton = document.getElementById("again-button");
    playAgainButton.addEventListener("click", () => {
      params.goTo("/inicio");
    });
  }
}
