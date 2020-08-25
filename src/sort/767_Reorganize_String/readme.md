767. Reorganize String

Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

If possible, output any possible result. If not possible, return the empty string.

Example 1:

Input: S = "aab"
Output: "aba"

Example 2:

Input: S = "aaab"
Output: ""

Note:

    S will consist of lowercase letters and have length in range [1, 500].

思考路程<br/>
1
count letter appearance and store in hash[i]<br/>
find the letter with largest occurence.<br/>
put the letter into even index numbe (0, 2, 4 ...) char array<br/>
put the rest into the array<br/>



We construct the resulting string in sequence: at position 0, 2, 4, ... and then 1, 3, 5, ...
In this way, we can make sure there is always a gap between the same characters<br/>

Consider this example: "aaabbbcdd", we will construct the string in this way:<br/>

a _ a _ a _ _ _ _ // fill in "a" at position 0, 2, 4<br/>
a b a _ a _ b _ b // fill in "b" at position 6, 8, 1<br/>
a b a c a _ b _ b // fill in "c" at position 3<br/>
a b a c a d b d b // fill in "d" at position 5, 7<br/>
这里为什么到8停止，因为8是字符串的最后一个位置。

算法复杂度O（n） 空间复杂度O（n+26） n是指最后结果使用的空间 26是存放字符和97的差值

心得：<br/>
1 这样放置字符，可以成为一个模板，涉及到字符串重排列的时候，根据位置放置<br/>
2 一个新的api String.fromCharCode

