export function initInicio(body: HTMLBodyElement, params) {
  const scissorsImageURL = new URL("/src/images/scissors.svg", import.meta.url);
  const rockImageURL = new URL("/src/images/rock.svg", import.meta.url);
  const paperImageURL = new URL("/src/images/paper.svg", import.meta.url);
  const tijerasImageURL = new URL("/src/images/tijeras.svg", import.meta.url);
  const piedraImageURL = new URL("/src/images/piedra.svg", import.meta.url);
  const papelImageURL = new URL("/src/images/papel.svg", import.meta.url);

  body.innerHTML = `
<div class="main-container">
      <div class="title-container">
        <h1 class="title">Piedra Papel <span class="transparent">ó</span> Tijeras</h1>
      </div>
        <button-ce id='start-button'>Empezar</button-ce>
        <div class="image-container">
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
      <div class="image-container">
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
      if (timeLeft == 0) {
        movesList.forEach((e) => {
          if (e.checked) showMoves(e.id);
        });
      }
      if (timeLeft < 0) {
        clearInterval(counterIntervalID);
        params.goTo("/resultado");
      }
    }

    function showMoves(move: string) {
      let moveURL: URL;
      move.includes("tijeras")
        ? (moveURL = tijerasImageURL)
        : move.includes("piedra")
        ? (moveURL = piedraImageURL)
        : move.includes("papel")
        ? (moveURL = papelImageURL)
        : new ReferenceError("No se eligio ninguna opcion");

      mainContainer.innerHTML = `
      <img src=${moveURL} class='move-img'height='360px'/>
      `;
    }

    mainContainer.innerHTML = `
    <div class='counter-container'></div>
    <move-options-ce></move-options-ce>
    `;
    const moveOptionsCE = document.querySelector("move-options-ce");
    const movesList =
      moveOptionsCE.shadowRoot.querySelectorAll<HTMLInputElement>(
        'input[type="radio"]'
      );
    var timeLeft = 3;
    renderCounter(timeLeft);
    const counterIntervalID = setInterval(changeCounter, 1000);
  }
}
