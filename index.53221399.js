var e=globalThis,t={},o={},s=e.parcelRequire7a53;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in o){var s=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,s.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequire7a53=s),(0,s.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>o,set:e=>o=e,enumerable:!0,configurable:!0});var o,s=new Map;o=function(e,t){for(var o=0;o<t.length-1;o+=2)s.set(t[o],{baseUrl:e,path:t[o+1]})}}),s("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["dZpbI","index.53221399.js","2iSiY","scissors.c30bb30b.svg","c0Bwb","rock.5753bd08.svg","1SDq9","paper.a271be70.svg","6Y7gx","tijeras.6a2fdda1.svg","c9Bcl","piedra.c88f7ccf.svg","jcw3T","papel.5f79bbf0.svg","9x1SD","green-star.4b96d87d.svg","dDpOY","red-star.342a139d.svg","bmPBw","yellow-star.cb78cc31.svg","2f9Wx","ellipse.1fcd968b.svg"]'));const i={data:{userMove:[],pcMove:[],results:[]},listeners:[],downloadState(){let e=JSON.parse(localStorage.getItem("data"));this.data.results=e?.results||[]},uploadState(){let e=JSON.stringify(this.data);console.log(e),localStorage.setItem("data",e)},getState(){return this.downloadState(),this.data},setState(e){for(let t of(this.data=e,this.uploadState(),this.listeners))t()},setPcMove(e){for(let t of(this.data.pcMove=[],this.data.pcMove.push(e),this.uploadState(),this.listeners))t()},setUserMove(e){for(let t of(this.data.userMove=[],this.data.userMove.push(e),this.uploadState(),this.listeners))t()},pushResult(e){for(let t of(this.data.results.push(e),this.uploadState(),this.listeners))t()},suscribe(e){this.listeners.push(e)}};var a={};a=new URL("scissors.c30bb30b.svg",import.meta.url).toString();var n={};n=new URL("rock.5753bd08.svg",import.meta.url).toString();var r={};r=new URL("paper.a271be70.svg",import.meta.url).toString();var c={};c=new URL("tijeras.6a2fdda1.svg",import.meta.url).toString();var l={};l=new URL("piedra.c88f7ccf.svg",import.meta.url).toString();var d={};d=new URL("papel.5f79bbf0.svg",import.meta.url).toString();const p=[{path:/\/desafio-piedra-papel-tijeras_dwf-n2\/\/inicio/,component:function(e,t){let o=new URL(a),s=new URL(n),p=new URL(r),u=new URL(c),m=new URL(l),h=new URL(d);i.downloadState(),e.innerHTML=`
<div class="main-container">
      <div class="title-container">
        <h1 class="title">Piedra Papel <span class="transparent">\xf3</span> Tijeras</h1>
      </div>
        <button-ce id='start-button'>Empezar</button-ce>
        <div class="images-container">
        <img src="${o}" alt="">
        <img src="${s}" alt="">
        <img src="${p}" alt="">
        </div>
        </div>
        `;let g=document.querySelector(".main-container");document.getElementById("start-button").addEventListener("click",()=>{g.innerHTML=`
    <div class="instructions-container">
      <h2 class="instructions">Presion\xe1 jugar y eleg\xed: piedra, papel o tijeras antes 
      de que pasen los 3 segundos.</h2>
    </div>
      <button-ce id='play-button'>\xa1Jugar!</button-ce>
      <div class="images-container">
      <img src="${o}" alt="">
      <img src="${s}" alt="">
      <img src="${p}" alt="">
      </div>
    `,document.getElementById("play-button").addEventListener("click",()=>{(function(){function e(e){document.querySelector(".counter-container").innerHTML=`
      <counter-ce>${e}</counter-ce>
      `}g.innerHTML=`
    <div class='counter-container'></div>
    <move-options-ce></move-options-ce>
    `;let o=document.querySelector("move-options-ce").shadowRoot.querySelectorAll('input[type="radio"]');var s=3;e(3);let a=setInterval(function(){let n,r;--s>0&&e(s),0==s&&(r=function(){let e=Math.floor(3*Math.random()+1);return(i.setPcMove(e),1==e)?m:2==e?h:3==e?u:void 0}(),o.forEach(e=>{var t;e.checked&&(i.setUserMove(Number(e.value)),n=(t=e.id).includes("tijeras")?u:t.includes("piedra")?m:t.includes("papel")?h:void 0)}),n||(clearInterval(a),t.goTo("/inicio")),g.innerHTML=`
      <img src=${r} class='pc-move-img'height='300px'/>
      <img src=${n} class='user-move-img'height='300px'/>
      `),s<0&&(clearInterval(a),t.goTo("/resultado"))},1e3)})()})})}},{path:/\/desafio-piedra-papel-tijeras_dwf-n2\/\/resultado/,component:function(e,t){function o(e,t){let o=document.querySelector("result-star-ce").shadowRoot,n=o.querySelector(`.${e}-star`);o.querySelector(".result-star-ce__text").innerHTML=t,n.setAttribute("style","display: initial"),i.pushResult(e),s.classList.add(`${e}-background`),function(){let e=s.querySelector(".user-score"),t=s.querySelector(".pc-score"),o=a.results;e.innerHTML="Vos: "+o.filter(e=>"win"==e).length,t.innerHTML="Máquina: "+o.filter(e=>"lose"==e).length}()}let s=e.querySelector(".main-container"),a=i.getState();if(s){let i=document.createElement("div");switch(i.className="background-element",i.innerHTML=s.innerHTML,s.innerHTML=`
  <div class='result-container'>
  <result-star-ce></result-star-ce>
  <div class='scoreboard'>
  <h2>Score</h2>
  <p class='user-score'></p>
  <p class='pc-score'></p>
  </div>
  <button-ce id='again-button'>Volver a Jugar</button-ce>
  </div>
  `,e.appendChild(i),a.pcMove*a.userMove){case 12:case 5:o("win","Ganaste");break;case 4:case 10:case 18:o("draw","Empate");break;case 6:case 8:case 15:o("lose","Perdiste")}document.getElementById("again-button").addEventListener("click",()=>{t.goTo("/inicio")})}else t.goTo("/inicio")}}];var u={};u=new URL("green-star.4b96d87d.svg",import.meta.url).toString();var m={};m=new URL("red-star.342a139d.svg",import.meta.url).toString();var h={};h=new URL("yellow-star.cb78cc31.svg",import.meta.url).toString();var g={};g=new URL("ellipse.1fcd968b.svg",import.meta.url).toString(),function(){(function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){let e=new URL(c),t=new URL(l),o=new URL(d);this.shadow.innerHTML=`
      <div class="move-options-ce__container">
      <input
      type="radio"
      name="move-options"
      id="piedra"
      value="4"
      class="move-options-ce__radio" />
      <label for="piedra" class="move-options-ce__label">
        <img
        src=${t}
        alt=""
        class="move-options-ce__image" />
      </label>
      <input
      type="radio"
      name="move-options"
      id="papel"
      value="5"
      class="move-options-ce__radio" />
      <label for="papel" class="move-options-ce__label">
        <img
        src=${o}
        alt=""
        class="move-options-ce__image" />
      </label>
      <input
      type="radio"
      name="move-options"
      id="tijeras"
      value="6"
      class="move-options-ce__radio" />
      <label for="tijeras" class="move-options-ce__label">
          <img
            src=${e}
            alt=""
            class="move-options-ce__image" />
      </label>
    </div>
      `;let s=document.createElement("style");s.innerHTML=`
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
      
      `,this.shadow.appendChild(s)}}customElements.define("move-options-ce",e)})(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.originalText=this.textContent,this.render()}render(){let e=document.createElement("button");e.textContent=this.originalText,e.classList.add("root"),this.shadow.appendChild(e);let t=document.createElement("style");t.innerHTML=`
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
      `,this.shadow.appendChild(t)}}customElements.define("button-ce",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){let e=new URL(u),t=new URL(m),o=new URL(h);this.shadow.innerHTML=`
      <div class="result-star-ce__container">
      <img
        src=${e}
        class="result-star-ce__image win-star"
        width="255px" />
      <img
        src=${t}
        class="result-star-ce__image lose-star"
        width="255px" />
      <img
        src=${o}
        class="result-star-ce__image draw-star"
        width="255px" />
      <p class="result-star-ce__text"></p>
    </div>
      `;let s=document.createElement("style");s.innerHTML=`
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

      .win-star, .draw-star,.lose-star {
        display: none;
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
        color: white;
      }      
      `,this.shadow.appendChild(s)}}customElements.define("result-star-ce",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){let e=this.textContent;console.log(e);let t=new URL(g);this.shadow.innerHTML=`
      <div class="counter-ce__holder">
      <img
        src=${t}
        class="counter-ce__image"
        width="243px" />
      <p class="counter-ce__time">${e}</p>
    </div>
      `;let o=document.createElement("style");o.innerHTML=`
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
      `,this.shadow.appendChild(o)}}customElements.define("counter-ce",e)}();let e=document.querySelector("body");console.log(location.pathname),function(e){function t(e){history.pushState({},"",e),o(e)}function o(o){for(let s of p)s.path.test(o)&&s.component(e,{goTo:t})}o(location.pathname)}(e)}();
//# sourceMappingURL=index.53221399.js.map
