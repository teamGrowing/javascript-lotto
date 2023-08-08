const {
  LOTTO_ERROR,
  BONUS_ERROR,
  MONEY_ERROR,
  LOTTO_PRICE,
} = require("./constant");

class Validator {
  static validateMoney(money) {
    if (!Number(money)) {
      throw new Error(MONEY_ERROR.number);
    }
    if (money % LOTTO_PRICE !== 0) {
      throw new Error(MONEY_ERROR.amount);
    }
  }

  static validateNumber(numbers) {
    const numberArr = numbers.split(",");

    numberArr.forEach((number, i) => {
      if (i > 5) throw new Error(LOTTO_ERROR.length);
      if (!Number(number)) throw new Error(LOTTO_ERROR.number);
      if (number > 45 || number < 1) throw new Error(LOTTO_ERROR.range);
    });

    if (new Set(numberArr).size !== numberArr.length) {
      throw new Error(LOTTO_ERROR.duplicate);
    }
  }

  static validateBonusNumber(number) {
    if (!Number(number)) throw new Error(BONUS_ERROR.number);
    if (number > 45 || number < 1) throw new Error(BONUS_ERROR.range);
  }
}

module.exports = { Validator };
