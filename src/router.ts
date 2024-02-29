import { initInicio } from "./pages/inicio";
import { initResultado } from "./pages/resultado";

const routes = [
  {
    path: /\/inicio/,
    component: initInicio,
  },
  {
    path: /\/resultado/,
    component: initResultado,
  },
];

export function initRouter(container: HTMLBodyElement) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        r.component(container, { goTo: goTo });
      }
    }
  }
  handleRoute(location.pathname);
}
