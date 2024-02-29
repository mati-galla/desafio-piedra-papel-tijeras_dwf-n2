export function initButton() {
  class ButtonCE extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    originalText = this.textContent;

    constructor() {
      super();
      this.render();
    }

    render() {
      const button = document.createElement("button");
      button.textContent = this.originalText;
      button.classList.add("root");
      this.shadow.appendChild(button);

      const style = document.createElement("style");
      style.innerHTML = `
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      }

      .root {
        width: 100%;
        height: 90px;
        border: 10px solid #001997;
        border-radius: 10px;
        background-color: #006CFC;
        font-family: "Odibee Sans", sans-serif;
        font-weight: 400;
        font-size: 45px;
        color: #D8FCFC;
      }
      `;

      this.shadow.appendChild(style);
    }
  }
  customElements.define("button-ce", ButtonCE);
}
