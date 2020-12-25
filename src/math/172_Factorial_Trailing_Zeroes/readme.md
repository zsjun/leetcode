#### 172. 阶乘后的零

##### 题目描述

给定一个整数 n，返回 n! 结果尾数中零的数量。<br/>


例子1<br/>

Input:  3<br/>

output: 0<br/>

例子2<br/>

Input:  5<br/>

output: 1<br/>

解释：5！=120



##### 思考

1 刚开始的时候想直接使用暴力解法，但是发现如果输入30之后，就会用科学计数法来表示，基本上就得不到正确的结果了<br/>

2 另外一种思路是可以发现10！= 362800，这时候我们要求出最后有几个0，很明显就是看362800可以除以10得到正整数。<br/>

此时已经发现先得到10的结果再求多少个0已经得不到正确的结果了，可以想一下10！还可以怎么表示？<br/>

10！ = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10<br/>

那么10！/ 10 就可以表示成1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10 / 10<br/>

同时除以10可以看成除以2 * 5，同时10！也可以转换成
1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 2 * 5,那么公式就变成了1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 2 * 5/ 2 * 5<br/>

此时我们基本上就可以发现其实就是求10！里边含有多少对2 * 5了<br/>

那么如果求呢？<br/>

这里可以发现10！里边肯定含有的2比5多，因为任何一个偶数都含有2，但是不一定含有5<br/>

所以我们只需要求5出现了多少次就可以了<br/>

那么怎么求5出现了多少次呢？<br/>

我们可以分成几步来求<br/>
第一步求含有1个5的数量，比如在10！中那就是5 和 10<br/>
第二步求含有2个5的数量，比如在30！中那就是25<br/>
依次类推<br/>


参考实现1<br/>

##### 实现1

```js
/**
 * @param {number} n
 * @return {number}
 */
// Runtime: 88 ms, faster than 68.48% of JavaScript online submissions for Factorial Trailing Zeroes.
// Memory Usage: 39.4 MB, less than 43.21% of JavaScript online submissions for Factorial Trailing Zeroes.
const trailingZeroes = (n) => {
  if (n <= 4) return 0;
  let res = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    res += n;
  }
  return res;
};
export default trailingZeroes;
```
时间复杂度O（lgn）空间复杂度O（1）