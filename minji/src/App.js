const LottoGame = require("./LottoGame");

class App {
  #LottoGame;

  constructor() {
    this.#LottoGame = new LottoGame();
  }
  play() {
    this.#LottoGame.start();
  }
}

module.exports = App;
