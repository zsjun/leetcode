409. Longest Palindrome

Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.

思考路程
1， 用一个 map 统计每个字符出现的次数，然后再遍历一遍，如果字符串的长度是偶数，就只提取出现两次的，如果字符串长度是奇数，则提取一次奇数，其他的奇数如果大于 3，则减一加入。

算法时间复杂度 O(n), 空间复杂度 O（n）

心得
1 算法虽然很简单，但是如果写一个可以完全通过测试的还是不容易
