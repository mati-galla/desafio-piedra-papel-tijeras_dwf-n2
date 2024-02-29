export function initResultStar() {
  class ResultStarCE extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });

    constructor() {
      super();
      this.render();
    }

    render() {
      const greenStarImageURL = new URL(
        "/src/images/green-star.svg",
        import.meta.url
      );
      const redStarImageURL = new URL(
        "/src/images/red-star.svg",
        import.meta.url
      );

      this.shadow.innerHTML = `
      <div class="result-star-ce__container">
      <img
        src=${greenStarImageURL}
        class="result-star-ce__image"
        width="255px" />
      <p class="result-star-ce__text">Ganaste</p>
    </div>
      `;

      const style = document.createElement("style");
      style.innerHTML = `
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      }

      .result-star-ce__container {
        width: 255px;
        height: 260px;
        position: relative;
      }
      
      .result-star-ce__image {
        z-index: 0;
        position: absolute;
      }
      
      .result-star-ce__text {
        z-index: 1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -65%);
        font-family: "Odibee Sans", sans-serif;
        font-weight: 400;
        font-size: 55px;
        color: #d8fcfc;
      }      
      `;
      this.shadow.appendChild(style);
    }
  }
  customElements.define("result-star-ce", ResultStarCE);
}
