// 最大房间数目
const N = 1e5;
// 需要mod的数
const MOD = BigInt(1e9 + 7);
// 保存从1到n的阶乘
const fact = new Array(N).fill(0n);
// 保存从1到n的乘法逆元
const nfact = new Array(N).fill(0n);
// 动态规划缓存数组
const dp = new Array(N);
// 节点数
const cnt = new Array(N);
// O ( logn )
// 费马小定理说：若p是质数且gcd(a,p)=1，那么 a^(p-1)≡1 (mod p)，a*x ≡1 (mod p) x是a的逆元
// 所以，a*x=a^(p-1) 推出  x=a^(p-2) (mod p)
// 注意：这里要求模数p必须为质数

// ^这里指的是平方，x^10指的是x的10次方
// 快速幂，顾名思义，快速求幂运算。原理也很简单，比如我们求 x^10 我们可以求 (x^5)^2 可以减少一半的运算。

// 假设我们求 (x^n)

//     如果 n 是偶数，变为求 (x^(n/2))^2
//     如果 n 是奇数，则求 (x^⌊n/2⌋)^2 * x （⌊⌋ 是向下取整）

// 因为快速幂涉及到的题目一般数据都很大，需要取模，所以加了取模运算。其中，代码中 n>>=1 相当于 n=n/2，if(n&1)是在判断n是否为奇数。

// 代码如下：
// 基本思想就是x^11 = x * x^2 ^ 5
(function () {
  const quickPow = function (x, y) {
    let res = 1n;
    while (y) {
      // y是奇数
      if (y & 1n) {
        res = (res * x) % MOD;
      }
      x = (x * x) % MOD;
      // n>>=1 相当于 n=n/2
      y >>= 1n;
    }
    return res;
  };

  fact[0] = nfact[0] = 1n;

  for (let i = 1; i < N; i++) {
    fact[i] = (fact[i - 1] * BigInt(i)) % MOD;
    nfact[i] = quickPow(fact[i], MOD - 2n) % MOD;
  }
})();
export default (prevRoom) => {
  const len = prevRoom.length;
  const map = new Map();
  dp[0] = 1n;
  cnt[0] = 1;
  // 建立起来树
  for (let i = 1; i < len; i++) {
    dp[i] = 1n;
    cnt[i] = 1;
    if (!map.has(prevRoom[i])) {
      map.set(prevRoom[i], new Set());
    }
    map.get(prevRoom[i]).add(i);
  }
  // 递归
  const dfs = function (n) {
    // const temp = 1;
    if (map.get(n)) {
      for (const v of map.get(n).keys()) {
        dfs(v);
        // 利用乘法逆元计算，二分合并的方法
        dp[n] = (((dp[n] * dp[v]) % MOD) * nfact[cnt[v]]) % MOD;
        cnt[n] += cnt[v];
      }
    }
    dp[n] = (dp[n] * fact[cnt[n] - 1]) % MOD;
  };
  dfs(0);
  return dp[0];
};
