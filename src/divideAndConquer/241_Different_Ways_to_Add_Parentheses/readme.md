### 241. 为运算表达式设计优先级

#### 题目描述

给定一个含有数字和运算符的字符串，为表达式添加括号，改变其运算优先级以求出不同的结果。你需要给出所有可能的组合的结果。有效的运算符号包含 +, - 以及 * 。
<br/>



例子1<br/>

Input:  "2-1-1"<br/>

output: [0, 2]<br/>

解释：
((2-1)-1) = 0 <br/>
(2-(1-1)) = 2<br/>


例子2<br/>

Input: "2*3-4*5"<br/>

output: [-34, -14, -10, -10, 10]<br/>

解释：
(2*(3-(4 * 5))) = -34  <br/>
((2 * 3)-(4 * 5)) = -14  <br/>
((2*(3-4)) * 5) = -10 <br/>
(2*((3-4) * 5)) = -10 <br/>
(((2 * 3)-4)* 5) = 10 <br/>


#### 思考

1 题目难度是中等的，但是感觉难度是hard<br/>

刚开始想对于不同运算符进行处理，可是思路一直没有理清楚，后来看了下题解，思路差不多，也是对于不同运算符进行处理，不过这里处理完了之后，采用相互乘得到结果<br/>

比如这里"2*3-4*5"，可以根据对不同字符进行处理，可以获得以下结果<br/>

(2*(3-(4*5))) = -34<br/>
(2*((3-4)*5)) = -10<br/>

((2*3)-(4*5)) = -14<br/>

((2*(3-4))*5) = -10<br/>
(((2*3)-4)*5) = 10<br/>

使用递归，可以参考实现1<br/>

可以发现实现1中有些字符是重复的，可以使用缓存，参考实现2<br/>

不使用递归，使用自底向上，采用动态规划解决，这里的dp[i][j] 表示在字符串中数字组成的数组中nums[i]到nums[j]的可以组成的不同结果，那么动态转移方程就是
dp[i][j] = dp[i][k] * dp[k+1][j] (k>=i&&k<j)<br/>
参考实现3<br/>


#### 实现1
```js
/**
 * @param {string} input
 * @return {number[]}
 */

// Runtime: 84 ms, faster than 61.84% of JavaScript online submissions for Different Ways to Add Parentheses.
// Memory Usage: 40.7 MB, less than 42.11% of JavaScript online submissions for Different Ways to Add Parentheses.
const diffWaysToCompute = (input) => {
  const ret = [];
  for (let i = 0; i < input.length; i++) {
    const charI = input.charAt(i);
    if (charI === "-" || charI === "*" || charI === "+") {
      const part1 = input.substring(0, i);
      const part2 = input.substring(i + 1);
      const part1Ret = diffWaysToCompute(part1);
      const part2Ret = diffWaysToCompute(part2);
      // console.log(part1, part1Ret);
      // console.log(part2, part2Ret);
      for (let p1 of part1Ret) {
        for (let p2 of part2Ret) {
          let c = 0;
          switch (charI) {
            case "+":
              c = p1 + p2;
              break;
            case "-":
              c = p1 - p2;
              break;
            case "*":
              c = p1 * p2;
              break;
          }
          ret.push(c);
        }
      }
      console.log(ret);
    }
  }
  if (ret.length === 0) {
    ret.push(+input);
  }
  return ret;
};
export default diffWaysToCompute;

```

#### 实现2
```js
/**
 * @param {string} input
 * @return {number[]}
 */
// Runtime: 80 ms, faster than 71.05% of JavaScript online submissions for Different Ways to Add Parentheses.
// Memory Usage: 41.1 MB, less than 34.21% of JavaScript online submissions for Different Ways to Add Parentheses.
const computeWithDP = (input, map) => {
  const res = [];
  const len = input.length;
  for (let i = 0; i < len; i++) {
    const charI = input.charAt(i);
    if (charI == "+" || charI == "-" || charI == "*") {
      const part1Res = [];
      const part2Res = [];
      const part1 = input.substring(0, i);
      const part2 = input.substring(i + 1);
      if (map.has(part1)) {
        part1Res = map.get(part1);
      } else {
        part1Res = computeWithDP(part1, map);
        map.set(part1, part1Res);
      }
      if (map.has(part2)) {
        part2Res = map.get(part2);
      } else {
        part2Res = computeWithDP(part2, map);
        map.set(part2, part2Res);
      }

      for (let res1 of part1Res) {
        for (let res2 of part2Res) {
          switch (charI) {
            case "+":
              res.push(res1 + res2);
              break;
            case "-":
              res.push(res1 - res2);
              break;
            case "*":
              res.push(res1 * res2);
              break;
            default:
              break;
          }
        }
      }
    }
  }
  if (res.length === 0) {
    res.push(+input);
  }
  return result;
};

export default (input) => {
  const map = new Map();
  return computeWithDP(input, map);
};

```

#### 实现3

```js
/**
 * @param {string} input
 * @return {number[]}
 */
// Runtime: 72 ms, faster than 94.74% of JavaScript online submissions for Different Ways to Add Parentheses.
// Memory Usage: 39 MB, less than 86.84% of JavaScript online submissions for Different Ways to Add Parentheses.
const diffWaysToCompute = (input, map) => {
  if (input.length === 0 || !input) return [];
  const oprs = [];
  const nums = [];
  let begin = 0;
  // 计算出有input中有多少个操作符和多少个数字
  for (let i = 0; i < input.length; i++) {
    const charI = input.charAt(i);
    if (charI == "+" || charI == "-" || charI == "*") {
      oprs.push(charI);
      nums.push(+input.substring(begin, i));
      begin = i + 1;
    }
  }
  // 把最后一个数字加入
  nums.push(+input.substring(begin));

  const numsLen = nums.length;
  const dp = [];
  // dp[i][j]表示input中数字nums[i]到数字nums[j]的之间的结果
  for (let i = 0; i < numsLen; i++) {
    dp[i] = [];
    for (let j = 0; j < numsLen; j++) {
      dp[i][j] = [];
    }
  }

  // 遍历已经发现的所有数字
  for (let i = 0; i < numsLen; i++) {
    // 计算0到i的结果
    for (let j = i; j >= 0; j--) {
      // 如果只是一个数字，直接加入
      if (i === j) {
        dp[j][i].push(nums[i]);
      } else {
        // dp[j][i] 等于dp[j][k]和dp[k+1][i]相乘
        for (let k = j; k < i; k += 1) {
          for (let left of dp[j][k]) {
            for (let right of dp[k + 1][i]) {
              let val = 0;
              switch (oprs[k]) {
                case "+":
                  val = left + right;
                  break;
                case "-":
                  val = left - right;
                  break;
                case "*":
                  val = left * right;
                  break;
              }
              dp[j][i].push(val);
            }
          }
        }
      }
    }
  }
  if (dp[0][numsLen - 1].length === 0) {
    dp[0][numsLen - 1].push(+input);
  }
  return dp[0][numsLen - 1];
};

export default diffWaysToCompute;

```