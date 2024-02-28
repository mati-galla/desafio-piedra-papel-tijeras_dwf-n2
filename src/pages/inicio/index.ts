export function initInicio(container: HTMLElement) {
  const scissorsImageURL = new URL("/src/images/scissors.svg", import.meta.url);
  const rockImageURL = new URL("/src/images/rock.svg", import.meta.url);
  const paperImageURL = new URL("/src/images/paper.svg", import.meta.url);

  container.innerHTML = `
<div class="main-container">
      <div class="title-container">
        <h1 class="title">Piedra Papel <span class="transparent">ó</span> Tijeras</h1>
      </div>
        <button-ce>Empezar</button-ce>
        <div class="image-container">
        <img src="${scissorsImageURL}" alt="">
        <img src="${rockImageURL}" alt="">
        <img src="${paperImageURL}" alt="">
        </div>
    </div>
`;
}
