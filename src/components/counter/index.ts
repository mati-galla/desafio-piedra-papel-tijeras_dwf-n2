export function initCounter() {
  class CounterCE extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });

    constructor() {
      super();
      this.render();
    }

    render() {
      const ellipseImageURL = new URL(
        "/src/images/ellipse.svg",
        import.meta.url
      );

      this.shadow.innerHTML = `
      <div class="counter-ce__container">
      <img
        src=${ellipseImageURL}
        class="counter-ce__image"
        width="243px" />
      <p class="counter-ce__text">3</p>
    </div>
      `;

      const style = document.createElement("style");
      style.innerHTML = `
      * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      }

      .counter-ce__container {
        width: 243px;
        height: 243px;
        position: relative;
      }
      
      .counter-ce__image {
        z-index: -1;
        position: absolute;
      }
      
      .counter-ce__text {
        z-index: 0;
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
