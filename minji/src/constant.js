const MAX_NUMBER = 45;
const MIN_NUMBER = 1;
const LOTTO_PRICE = 1000;
const LOTTO_PRIZE = Object.freeze({
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
});

const INPUT_MESSAGE = Object.freeze({
  money: "구입금액을 입력해 주세요.",
  bonus: "보너스 번호를 입력하세요.",
  winning: "당첨 번호를 입력해 주세요.",
});

const RESULT_MESSAGE = Object.freeze({
  title: "당첨 통계\n---",
  buying: (cnt) => `${cnt}개를 구매했습니다.`,
  rank1: (cnt) => `6개 일치 (2,000,000,000원) - ${cnt}개`,
  rank2: (cnt) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${cnt}개`,
  rank3: (cnt) => `5개 일치 (1,500,000원) - ${cnt}개`,
  rank4: (cnt) => `4개 일치 (50,000원) - ${cnt}개`,
  rank5: (cnt) => `3개 일치 (5,000원) - ${cnt}개`,
  returning: (percent) => `수익률은 ${percent}% 입니다.`,
});

const MONEY_ERROR = Object.freeze({
  number: "[ERROR] 숫자를 입력해 주세요.",
  amount: "[ERROR] 1000원 단위로 입력해 주세요.",
});

const BONUS_ERROR = Object.freeze({
  number: "[ERROR] 보너스 번호는 숫자여야 합니다.",
  range: "[ERROR] 보너스 번호는 1~45 사이여야 합니다.",
});

const LOTTO_ERROR = Object.freeze({
  range: "[ERROR] 로또 번호는 1~45 사이여야 합니다.",
  number: "[ERROR] 로또 번호는 숫자여야 합니다.",
  length: "[ERROR] 로또 번호는 6개를 쉼표로 구분하여 입력해야 합니다.",
  duplicate: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
});

module.exports = {
  MAX_NUMBER,
  MIN_NUMBER,
  INPUT_MESSAGE,
  RESULT_MESSAGE,
  MONEY_ERROR,
  BONUS_ERROR,
  LOTTO_ERROR,
  LOTTO_PRIZE,
  LOTTO_PRICE,
};
