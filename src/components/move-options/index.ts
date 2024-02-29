export function initMoveOptions() {
  class MoveOptionsCE extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });

    constructor() {
      super();
      this.render();
    }

    render() {
      const tijerasImageURL = new URL(
        "/src/images/tijeras.svg",
        import.meta.url
      );
      const piedraImageURL = new URL("/src/images/piedra.svg", import.meta.url);
      const papelImageURL = new URL("/src/images/papel.svg", import.meta.url);

      this.shadow.innerHTML = `
      <div class="move-options-ce__container">
      <input
        type="radio"
        name="move-options"
        id="tijeras"
        class="move-options-ce__radio" />
      <label for="tijeras" class="move-options-ce__label">
        <img
          src=${tijerasImageURL}
          alt=""
          class="move-options-ce__image" />
      </label>
      <input
        type="radio"
        name="move-options"
        id="piedra"
        class="move-options-ce__radio" />
      <label for="piedra" class="move-options-ce__label">
        <img
          src=${piedraImageURL}
          alt=""
          class="move-options-ce__image" />
      </label>
      <input
        type="radio"
        name="move-options"
        id="papel"
        class="move-options-ce__radio" />
      <label for="papel" class="move-options-ce__label">
        <img
          src=${papelImageURL}
          alt=""
          class="move-options-ce__image" />
      </label>
    </div>
      `;

      const style = document.createElement("style");
      style.innerHTML = `
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      }

      .move-options-ce__container {
        height: 210px;
        display: flex;
        margin-left: 0;
        margin-rigth: 0;
        border: none;
        justify-content: space-between;
      }
      
      .move-options-ce__label {
        height: 100%;
      }
      
      .move-options-ce__image {
        height: 100%;
      }
      
      .move-options-ce__radio {
        display: none;
      }
      
      .move-options-ce__radio:checked + .move-options-ce__label {
        .move-options-ce__image {
          position: relative;
          top: -40px;
          opacity: 100%;
        }
      }
      
      .move-options-ce__radio:checked ~ .move-options-ce__radio {
        + .move-options-ce__label {
          .move-options-ce__image {
            position: relative;
            bottom: -40px;
            opacity: 50%;
          }
        }
      }
      
      .move-options-ce__radio:has(~ .move-options-ce__radio:checked) {
        + .move-options-ce__label {
          .move-options-ce__image {
            position: relative;
            bottom: -40px;
            opacity: 50%;
          }
        }
      }
      
      `;

      this.shadow.appendChild(style);
    }
  }
  customElements.define("move-options-ce", MoveOptionsCE);
}
