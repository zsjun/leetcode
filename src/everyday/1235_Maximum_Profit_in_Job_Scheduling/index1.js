// Sort the jobs by endTime.

// dp[time] = profit means that within the first time duration,
// we cam make at most profit money.
// Intial dp[0] = 0, as we make profit = 0 at time = 0.

// For each job = [s, e, p], where s,e,p are its start time, end time and profit,
// Then the logic is similar to the knapsack problem.
// If we don't do this job, nothing will be changed.
// If we do this job, binary search in the dp to find the largest profit we can make before start time s.
// So we also know the maximum cuurent profit that we can make doing this job.

// Compare with last element in the dp,
// we make more money,
// it worth doing this job,
// then we add the pair of [e, cur] to the back of dp.
// Otherwise, we'd like not to do this job.

// Complexity

// Time O(NlogN) for sorting
// Time O(NlogN) for binary search for each job
// Space O(N)

const findLowestIndex = (lists, i) => {
  let l = 0,
    r = i - 1;
  while (l + 1 < r) {
    let mid = (l + r) >> 1;
    // mid结束时间小于i的开始时间
    if (lists[mid][1] <= lists[i][0]) {
      l = mid;
    } else {
      r = mid;
    }
  }
  if (lists[r][1] <= lists[i][0]) {
    return r;
  } else {
    return l;
  }
};
export default (startTime, endTime, profit) => {
  if (startTime === null || endTime === null || profit === null) {
    return 0;
  }

  const lists = startTime.map((time, index) => {
    return [time, endTime[index], profit[index]];
  });
  lists.sort((a, b) => a[1] - b[1]);
  const dp = [];
  // 先执行第一个任务
  dp[0] = lists[0][2];
  // dp[0] = 0;
  for (let i = 1; i < lists.length; i++) {
    // 寻找最大的dp的index
    const index = findLowestIndex(lists, i);
    // 结束时间小于lists[i]的开始时间
    if (lists[index][1] <= lists[i][0]) {
      dp[i] = Math.max(dp[i - 1], dp[index] + lists[i][2]);
    } else {
      dp[i] = Math.max(dp[i - 1], lists[i][2]);
    }
  }
  return dp[lists.length - 1];
};
