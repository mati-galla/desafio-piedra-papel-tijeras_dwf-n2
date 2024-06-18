import { state } from "../../../src/state";

export function initInicio(body: HTMLBodyElement, params) {
  const scissorsImageURL = new URL("/src/images/scissors.svg", import.meta.url);
  const rockImageURL = new URL("/src/images/rock.svg", import.meta.url);
  const paperImageURL = new URL("/src/images/paper.svg", import.meta.url);
  const tijerasImageURL = new URL("/src/images/tijeras.svg", import.meta.url);
  const piedraImageURL = new URL("/src/images/piedra.svg", import.meta.url);
  const papelImageURL = new URL("/src/images/papel.svg", import.meta.url);
  state.downloadState();

  body.innerHTML = `
<div class="main-container">
      <div class="title-container">
        <h1 class="title">Piedra Papel <span class="transparent">ó</span> Tijeras</h1>
      </div>
        <button-ce id='start-button'>Empezar</button-ce>
        <div class="images-container">
        <img src="${scissorsImageURL}" alt="">
        <img src="${rockImageURL}" alt="">
        <img src="${paperImageURL}" alt="">
        </div>
        </div>
        `;

  const mainContainer = document.querySelector<HTMLElement>(".main-container");
  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", () => {
    initInstructions();
  });

  function initInstructions() {
    mainContainer.innerHTML = `
    <div class="instructions-container">
      <h2 class="instructions">Presioná jugar y elegí: piedra, papel o tijeras antes 
      de que pasen los 3 segundos.</h2>
    </div>
      <button-ce id='play-button'>¡Jugar!</button-ce>
      <div class="images-container">
      <img src="${scissorsImageURL}" alt="">
      <img src="${rockImageURL}" alt="">
      <img src="${paperImageURL}" alt="">
      </div>
    `;

    const playButton = document.getElementById("play-button");
    playButton.addEventListener("click", () => {
      initPlay();
    });
  }

  function initPlay() {
    function renderCounter(timeLeft) {
      const counterContainer = document.querySelector(".counter-container");
      counterContainer.innerHTML = `
      <counter-ce>${timeLeft}</counter-ce>
      `;
    }

    function changeCounter() {
      timeLeft--;
      if (timeLeft > 0) renderCounter(timeLeft);
      if (timeLeft == 0) showMoves();
      if (timeLeft < 0) {
        clearInterval(counterIntervalID);
        params.goTo("/resultado");
      }
    }

    function showMoves() {
      let pcMoveURL: URL = getPCMoveURL();
      let userMoveURL: URL;
      movesList.forEach((e) => {
        if (e.checked) {
          state.setUserMove(Number(e.value));
          userMoveURL = getUserMoveURL(e.id);
        }
      });
      if (!userMoveURL) {
        clearInterval(counterIntervalID);
        params.goTo("/inicio");
      }

      mainContainer.innerHTML = `
      <img src=${pcMoveURL} class='pc-move-img'height='300px'/>
      <img src=${userMoveURL} class='user-move-img'height='300px'/>
      `;
    }

    function getPCMoveURL() {
      const moveNumber = Math.floor(Math.random() * 3 + 1);
      state.setPcMove(moveNumber);
      if (moveNumber == 1) return piedraImageURL;
      if (moveNumber == 2) return papelImageURL;
      if (moveNumber == 3) return tijerasImageURL;
    }

    function getUserMoveURL(move) {
      if (move.includes("tijeras")) return tijerasImageURL;
      if (move.includes("piedra")) return piedraImageURL;
      if (move.includes("papel")) return papelImageURL;
    }

    mainContainer.innerHTML = `
    <div class='counter-container'></div>
    <move-options-ce></move-options-ce>
    `;
    const moveOptionsCE = document.querySelector("move-options-ce").shadowRoot;
    const movesList = moveOptionsCE.querySelectorAll<HTMLInputElement>(
      'input[type="radio"]'
    );
    var timeLeft = 3;
    renderCounter(timeLeft);
    const counterIntervalID = setInterval(changeCounter, 1000);
  }
}
