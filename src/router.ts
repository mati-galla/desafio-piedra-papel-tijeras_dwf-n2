import { initInicio } from "./pages/inicio";

const routes = [
  {
    path: /\/inicio/,
    component: initInicio,
  },
];

export function initRouter(container: HTMLElement) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        r.component(container);
      }
    }
  }
  handleRoute(location.pathname);
}
