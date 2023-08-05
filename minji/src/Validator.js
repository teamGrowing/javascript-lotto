class Validator {
  static #MONEY_ERROR = Object.freeze({
    number: "[ERROR] 숫자를 입력해 주세요.",
    amount: "[ERROR] 1000원 단위로 입력해 주세요.",
  });
  static #BONUS_ERROR = Object.freeze({
    number: "[ERROR] 보너스 번호는 숫자여야 합니다.",
    range: "[ERROR] 보너스 번호는 1~45 사이여야 합니다.",
  });
  static #LOTTO_ERROR = Object.freeze({
    range: "[ERROR] 로또 번호는 1~45 사이여야 합니다.",
    number: "[ERROR] 로또 번호는 숫자여야 합니다.",
    length: "[ERROR] 로또 번호는 6개를 쉼표로 구분하여 입력해야 합니다.",
    duplicate: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
  });

  validateMoney(money) {
    if (!Number(money)) {
      throw new Error(Validator.#MONEY_ERROR.number);
    }
    if (money % 1000 !== 0) {
      throw new Error(Validator.#MONEY_ERROR.amount);
    }
  }

  validateNumber(numbers) {
    const numberArr = numbers.split(",");

    numberArr.forEach((number, i) => {
      if (i > 4) throw new Error(Validator.#LOTTO_ERROR.length);
      if (!Number(number)) throw new Error(Validator.#LOTTO_ERROR.number);
      if (number > 45 || number < 1)
        throw new Error(Validator.#LOTTO_ERROR.range);
    });

    if (new Set(numberArr).length !== numberArr.length) {
      throw new Error(Validator.#LOTTO_ERROR.duplicate);
    }
  }

  validateBonusNumber(number) {
    if (!Number(number)) throw new Error(Validator.#BONUS_ERROR.number);
    if (number > 45 || number < 1)
      throw new Error(Validator.#BONUS_ERROR.range);
  }
}
