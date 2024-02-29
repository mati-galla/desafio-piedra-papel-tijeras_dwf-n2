export function initResultado(body: HTMLBodyElement, params) {
  const backgroundEl = body.querySelector<HTMLElement>(".main-container");
  backgroundEl.className = "background-element";
  backgroundEl.innerHTML = `
  <div class='result-container'>
  <result-star-ce></result-star-ce>
  <div class='scoreboard'>
  <h2>Score</h2>
  <p>Vos: 3</p>
  <p>Máquina: 2</p>
  </div>
  <button-ce id='again-button'>Volver a Jugar</button-ce>
  </div>
  `;

  const playAgainButton = document.getElementById('again-button');
  playAgainButton.addEventListener('click', () => {
    params.goTo('/inicio');
  })
}
