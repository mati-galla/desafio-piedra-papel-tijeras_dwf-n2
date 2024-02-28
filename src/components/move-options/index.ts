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
      <fieldset class="move-options-ce__fieldset">
      <input
        type="radio"
        name="move-options"
        id="tijeras-option"
        class="move-options-ce__radio" />
      <label for="tijeras-option" class="move-options-ce__label">
        <img
          src=${tijerasImageURL}
          alt=""
          class="move-options-ce__image" />
      </label>
      <input
        type="radio"
        name="move-options"
        id="piedra-option"
        class="move-options-ce__radio" />
      <label for="piedra-option" class="move-options-ce__label">
        <img
          src=${piedraImageURL}
          alt=""
          class="move-options-ce__image" />
      </label>
      <input
        type="radio"
        name="move-options"
        id="papel-option"
        class="move-options-ce__radio" />
      <label for="papel-option" class="move-options-ce__label">
        <img
          src=${papelImageURL}
          alt=""
          class="move-options-ce__image" />
      </label>
    </fieldset>
      `;

      const style = document.createElement("style");
      style.innerHTML = `
      .move-options-ce__fieldset {
        display: block;
        height: 125px;
        border: 0;
        gap: 15px;
      }
      
      .move-options-ce__label {
        height: 100%;
      }
      
      .move-options-ce__image {
        height: 100%;
        margin-bottom: -35px;
      }
      
      .move-options-ce__radio {
        display: none;
      }
      
      .move-options-ce__radio:checked + .move-options-ce__label {
        .move-options-ce__image {
          margin-bottom: 0;
          opacity: 100%;
        }
      }
      
      .move-options-ce__radio:checked ~ .move-options-ce__radio {
        + .move-options-ce__label {
          .move-options-ce__image {
            opacity: 50%;
          }
        }
      }
      
      .move-options-ce__radio:has(~ .move-options-ce__radio:checked) {
        + .move-options-ce__label {
          .move-options-ce__image {
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
