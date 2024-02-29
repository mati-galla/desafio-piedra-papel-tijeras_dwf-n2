export function initCounter() {
  class CounterCE extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });

    constructor() {
      super();
      this.render();
    }

    render() {
      const originalText = this.textContent;
      console.log(originalText);
      const ellipseImageURL = new URL(
        "/src/images/ellipse.svg",
        import.meta.url
      );

      this.shadow.innerHTML = `
      <div class="counter-ce__holder">
      <img
        src=${ellipseImageURL}
        class="counter-ce__image"
        width="243px" />
      <p class="counter-ce__time">${originalText}</p>
    </div>
      `;

      const style = document.createElement("style");
      style.innerHTML = `
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      }

      .counter-ce__holder {
        width: 243px;
        height: 243px;
        position: relative;
      }
      
      .counter-ce__image {
        position: absolute;
      }
      
      .counter-ce__time {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'American Typewriter', cursive;
        font-weight: 700;
        font-size: 100px;
        // color: #d8fcfc;
      }      
      `;
      this.shadow.appendChild(style);
    }
  }
  customElements.define("counter-ce", CounterCE);
}
