22. Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.


Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:

Input: n = 1
Output: ["()"]


Example 3:

Input: n = 2
Output: ["(())","()()"]


Constraints:

    1 <= n <= 8


递归可以画图画出函数执行栈
1 利用递归，首先添加 "(", 然后再添加“)”,当字符串的长度等于2*n的时候，停止
比如当n = 3的时候，递归执行顺序如下
(
((
(((
((()
((())
((()))
(()
(()(
(()()
(()())
(())
(())(
(())()
()
()(
()((
()(()
()(())
()()
()()(
()()()

