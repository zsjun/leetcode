31. Next Permutation

Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

思考过程<br/>
1 题目没怎么看懂，什么全排列，没看懂，<br/>

从 n 个不同元素中任取 m（m≤n）个元素，按照一定的顺序排列起来，叫做从 n 个不同元素中取出 m 个元素的一个排列。当 m=n 时所有的排列情况叫全排列。<br/>

字典序法<br/>
对给定的字符集中的字符规定了一个先后关系，在此基础上规定两个全排列的先后是从左到右逐个比较对应的字符的先后。<br/>
[例]字符集{1,2,3},较小的数字较先,<br/>
这样按字典序生成的全排列是:123,132,213,231,312,321。<br/>
[注意] 一个全排列可看做一个字符串，字符串可有前缀、后缀。<br/>
1）生成给定全排列的下一个排列 所谓一个的下一个就是这一个与下一个之间没有其他的。这就要求这一个与下一个有尽可能长的共同前缀，也即变化限制在尽可能短的后缀上。<br/>
[例]839647521 是 1--9 的排列。<br/>
1—9 的排列最前面的是 123456789，最后面的是 987654321，从右向左扫描若都是增的，就到 987654321，也就没有下一个了。否则找出第一次出现下降的位置。<br/>

这个让我想起了前面做的，利用两个字符串进行比较，从而排序的题目，下一个肯定是在最高位比前面的大一个，后面的是最小，比如 123，如果下一个肯定是把 2 和 3 一交换边恒 132，然后因为只有一个 2，肯定是最小的。<br/>
假如有 1243，则下一个肯定是 3 和 2 一交换得到 1342，但是明显 42 不是最小的，需要逆序，则达到 1324<br/>

时间复杂度 O（n）， 空间复杂度 O（1）
