49. Group Anagrams

Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
["ate","eat","tea"],
["nat","tan"],
["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.

思考路程：
1 直接用一个 map 对应一个数组，存在就 push 到数组，不存在就新建一个数组 push 进去
算法时间复杂度O（n）空间复杂度O（n）
