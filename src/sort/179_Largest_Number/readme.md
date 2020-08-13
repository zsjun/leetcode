179. Largest Number

Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:

Input: [10,2]
Output: "210"

Example 2:

Input: [3,30,34,5,9]
Output: "9534330"

Note: The result may be very large, so you need to return a string instead of an integer.
思考路程<br>
1 根据单个数字进行排序，比如 34，转换成 3+4/2 = 3.5，所以排在 5 后边, 最后发现这边的逻辑好像是不对，比如
[1, 2, 30]
2 题解
2.1 可以利用字符传自带的比较，比如

```
var str1 = "ab";
var str2 = "ab";
var n = str1.localeCompare(str2);
```

直接对 nums 先转成字符串数组，然后再排序，然后再 join 输出即可
时间复杂度，假设平均字符串长度是 k，则排序加上 O(nlgn),则是 O(nklgn),空间复杂度为 O(1)
