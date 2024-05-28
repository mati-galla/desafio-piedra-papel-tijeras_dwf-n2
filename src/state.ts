export const state = {
  data: {
    userMove: [],
    pcMove: [],
    results: [],
  },

  listeners: [],

  downloadState() {
    const responseStringi = localStorage.getItem("data");
    const response = JSON.parse(responseStringi);
    this.data.results = response?.results || [];
  },

  uploadState() {
    const dataStringi = JSON.stringify(this.data);
    console.log(dataStringi);
    localStorage.setItem("data", dataStringi);
  },

  getState() {
    this.downloadState();
    return this.data;
  },

  setState(newState) {
    this.data = newState;
    this.uploadState();
    for (const cb of this.listeners) {
      cb();
    }
  },

  setPcMove(move) {
    this.data.pcMove = [];
    this.data.pcMove.push(move);
    this.uploadState();
    for (const cb of this.listeners) {
      cb();
    }
  },

  setUserMove(move) {
    this.data.userMove = [];
    this.data.userMove.push(move);
    this.uploadState();
    for (const cb of this.listeners) {
      cb();
    }
  },

  pushResult(result) {
    this.data.results.push(result);
    this.uploadState();
    for (const cb of this.listeners) {
      cb();
    }
  },

  suscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
};
