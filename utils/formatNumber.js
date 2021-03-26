const formatNumber = (num) => {
  if (num > 1000) {
    let formatedNumber = "";
    const stringNum = num.toString();
    for (let i = stringNum.length - 1; i >= 0; i -= 1) {
      formatedNumber = stringNum[i] + formatedNumber;
      if ((stringNum.length - i) % 3 === 0 && i !== 0) {
        formatedNumber = "." + formatedNumber;
      }
    }
    return formatedNumber;
  }
  return Math.round(num * 10) / 10;
};

export default formatNumber;
