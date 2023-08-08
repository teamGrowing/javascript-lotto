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

const app = new App();
app.play();

module.exports = App;
