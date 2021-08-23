/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
const getMaxProfit = (
  startTime,
  endTime,
  profit,
  nowProfit,
  nowEndTime,
  res
) => {
  if (startTime.length == 0) {
    res[0] = Math.max(res[0], nowProfit);
  }
  let flag = true;

  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] >= nowEndTime) {
      flag = true;
      let startTimeTemp = [...startTime];
      let endTimeTemp = [...endTime];
      const profitTemp = [...profit];
      startTimeTemp.splice(i, 1);
      endTimeTemp.splice(i, 1);
      profitTemp.splice(i, 1);
      const nowProfitTemp = nowProfit + profit[i];
      const nowEndTimeTemp = endTime[i];
      getMaxProfit(
        startTimeTemp,
        endTimeTemp,
        profitTemp,
        nowProfitTemp,
        nowEndTimeTemp,
        res
      );
    } else {
      flag = false;
    }
  }
  if (!flag) {
    res[0] = Math.max(res[0], nowProfit);
  }
};
export default (startTime, endTime, profit) => {
  const res = [0];
  getMaxProfit(startTime, endTime, profit, 0, 0, res);
  return res[0];
};
