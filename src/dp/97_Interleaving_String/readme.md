97. Interleaving String

Given s1, s2, and s3, find whether s3 is formed by the interleaving of s1 and s2.

Example 1:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true

Example 2:

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false

Example 3:

Input: s1 = "", s2 = "", s3 = ""
Output: true

Constraints:

    0 <= s1.length, s2.length <= 100
    0 <= s3.length <= 200
    s1, s2, and s3 consist of lower-case English letters.



思考
1 dp[i][j] 等于s1中i的位置和s2中j位置的字符组成的s3,所以就是找到状态转移方程，
dp[i][j] = (dp[i-1][j] & s3[i+j-1] == s1[i-1]) || (dp[i][j-1] & s2[j-1] == s3[i+j-1])
然后找到初始值dp[0][0] = true;

