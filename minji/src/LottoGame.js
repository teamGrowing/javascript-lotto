const LottoConsole = require("./LottoConsole");
const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { LOTTO_PRIZE, LOTTO_PRICE } = require("./constant");

class LottoGame {
  #lottos;
  #WinningLotto;
  #result;

  constructor() {
    this.#lottos = [];
    this.#WinningLotto = null;
    this.#result = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, rate: 0 };
  }

  start() {
    this.#getMoney();
  }

  #getMoney() {
    LottoConsole.inputMoney((money) => this.#buyLottos(money));
  }

  #buyLottos(money) {
    const n = money / 1000;
    for (let i = 0; i < n; i += 1) {
      this.#lottos.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    }
    LottoConsole.outputLottoNumbers(this.#lottos);
    this.#getWinningNumbers();
  }

  #getWinningNumbers() {
    LottoConsole.inputWinningNumbers((numbers) =>
      this.#inputWinningAfterFunc(numbers)
    );
  }

  #inputWinningAfterFunc(numbers) {
    this.#WinningLotto = new Lotto(numbers);
    this.#getBonusNumber();
  }

  #getBonusNumber() {
    LottoConsole.inputBonusNumber((number) =>
      this.#inputBonusAfterFunc(number)
    );
  }

  #inputBonusAfterFunc(number) {
    this.#WinningLotto.setBonusNumber(number);
    this.#matchWithWinningLotto();
  }

  #matchWithWinningLotto() {
    this.#lottos.forEach((lotto) => {
      const rank = this.#WinningLotto.getRank(lotto);
      if (rank) this.#result[rank] += 1;
    });

    this.#printResult();
  }

  #printResult() {
    this.#calculateResult();
    LottoConsole.outputResult(this.#result);
  }
  #calculateResult() {
    let moneyReturn = 0;
    for (let i = 1; i < 6; i += 1) {
      moneyReturn += LOTTO_PRIZE[i] * this.#result[i];
    }

    this.#result.rate = (
      (Math.abs(this.#lottos.length * LOTTO_PRICE - moneyReturn) /
        (this.#lottos.length * 1000)) *
      100
    ).toFixed(1);

    this.#exit();
  }
  #exit() {
    LottoConsole.closeConsole();
  }
}

module.exports = LottoGame;
