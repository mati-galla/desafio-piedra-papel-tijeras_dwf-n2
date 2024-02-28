import { initRouter } from "./router";
import { initMoveOptions } from "./components/move-options";
import { initButton } from "./components/button";
import { initResultStar } from "./components/result-star";
import { initCounter } from "./components/counter";

(function () {
  initMoveOptions();
  initButton();
  initResultStar();
  initCounter();

  const body = document.querySelector("body");
  initRouter(body);
})();
