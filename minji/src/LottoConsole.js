const { Console } = require("@woowacourse/mission-utils");
const { RESULT_MESSAGE, INPUT_MESSAGE } = require("./constant");

class LottoConsole {
  static inputMoney(afterFunc) {
    Console.readLine(INPUT_MESSAGE.money, (money) => {
      afterFunc(money);
    });
  }
  static inputWinningNumbers(afterFunc) {
    Console.readLine(INPUT_MESSAGE.winning, (money) => {
      afterFunc(money);
    });
  }
  static inputBonusNumber(afterFunc) {
    Console.readLine(INPUT_MESSAGE.bonus, (money) => {
      afterFunc(money);
    });
  }
  static outputLottoNumbers(lottos) {
    Console.print(RESULT_MESSAGE.buying(lottos.length));
    lottos.forEach((lotto) => Console.print(lotto));
  }

  static outputResult(result) {
    Console.print(RESULT_MESSAGE.title);
    Console.print(RESULT_MESSAGE.rank5(result[5]));
    Console.print(RESULT_MESSAGE.rank4(result[4]));
    Console.print(RESULT_MESSAGE.rank3(result[3]));
    Console.print(RESULT_MESSAGE.rank2(result[2]));
    Console.print(RESULT_MESSAGE.rank1(result[1]));
    Console.print(RESULT_MESSAGE.returning(result.rate));
  }
  static closeConsole() {
    Console.close();
  }

  constructor() {}
}

module.exports = LottoConsole;
