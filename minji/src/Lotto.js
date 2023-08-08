const { Validator } = require("./Validator");

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.validateNumber(numbers);

    this.#numbers = numbers.split(",");
  }

  setBonusNumber(number) {
    Validator.validateBonusNumber(number);
    this.#numbers.push(number);
  }

  getRank(numbers) {
    const result = this.#returnMatchResult(numbers);

    if (result.general < 3) return 0;
    if (result.general === 3) return 5;
    if (result.general === 4) return 4;
    if (result.general === 5 && result.bonus === 1) return 2;
    if (result.general === 6) return 1;
    return result.general;
  }

  #returnMatchResult(numbers) {
    const result = { general: 0, bonus: 0 };
    for (let i = 0; i < 6; i += 1) {
      if (numbers.includes(Number(this.#numbers[i]))) result.general++;
    }
    if (numbers.includes(Number(this.#numbers[6]))) result.bonus++;

    return result;
  }
}

module.exports = Lotto;
