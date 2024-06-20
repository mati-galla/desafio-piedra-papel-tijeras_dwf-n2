import { initInicio } from "./pages/inicio";
import { initResultado } from "./pages/resultado";

const BASE_PATH = "/desafio-piedra-papel-tijeras_dwf-n2";

function isGitHubPages() {
  return location.host.includes("mati-galla.github.io");
}

const routes = [
  {
    path: /\/inicio/,
    component: initInicio,
  },
  // {
  //   path: /\//,
  //   component: initInicio,
  // },
  {
    path: /\/resultado/,
    component: initResultado,
  },
];

export function initRouter(container: HTMLBodyElement) {
  function goTo(path) {
    const completePath = isGitHubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }

  function handleRoute(route) {
    const newRoute = isGitHubPages() ? route.replace(BASE_PATH, "") : route;
    for (const r of routes) {
      if (r.path.test(newRoute)) {
        r.component(container, { goTo: goTo });
      }
    }
  }

  if (
    location.pathname == "/" ||
    location.pathname == "/desafio-piedra-papel-tijeras_dwf-n2/"
  ) {
    goTo("/inicio");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
