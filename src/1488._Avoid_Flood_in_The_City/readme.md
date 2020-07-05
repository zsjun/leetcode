Your country has an infinite number of lakes. Initially, all the lakes are empty, but when it rains over the nth lake, the nth lake becomes full of water. If it rains over a lake which is full of water, there will be a flood. Your goal is to avoid the flood in any lake.

Given an integer array rains where:

rains[i] > 0 means there will be rains over the rains[i] lake.
rains[i] == 0 means there are no rains this day and you can choose one lake this day and dry it.
Return an array ans where:

ans.length == rains.length
ans[i] == -1 if rains[i] > 0.
ans[i] is the lake you choose to dry in the ith day if rains[i] == 0.
If there are multiple valid answers return any of them. If it is impossible to avoid flood return an empty array.

Notice that if you chose to dry a full lake, it becomes empty, but if you chose to dry an empty lake, nothing changes. (see example 4)



Example 1:

Input: rains = [1,2,3,4]
Output: [-1,-1,-1,-1]
Explanation: After the first day full lakes are [1]
After the second day full lakes are [1,2]
After the third day full lakes are [1,2,3]
After the fourth day full lakes are [1,2,3,4]
There's no day to dry any lake and there is no flood in any lake.
Example 2:

Input: rains = [1,2,0,0,2,1]
Output: [-1,-1,2,1,-1,-1]
Explanation: After the first day full lakes are [1]
After the second day full lakes are [1,2]
After the third day, we dry lake 2. Full lakes are [1]
After the fourth day, we dry lake 1. There is no full lakes.
After the fifth day, full lakes are [2].
After the sixth day, full lakes are [1,2].
It is easy that this scenario is flood-free. [-1,-1,1,2,-1,-1] is another acceptable scenario.
Example 3:

Input: rains = [1,2,0,1,2]
Output: []
Explanation: After the second day, full lakes are  [1,2]. We have to dry one lake in the third day.
After that, it will rain over lakes [1,2]. It's easy to prove that no matter which lake you choose to dry in the 3rd day, the other one will flood.
Example 4:

Input: rains = [69,0,0,0,69]
Output: [-1,69,1,1,-1]
Explanation: Any solution on one of the forms [-1,69,x,y,-1], [-1,x,69,y,-1] or [-1,x,y,69,-1] is acceptable where 1 <= x,y <= 10^9
Example 5:

Input: rains = [10,20,20]
Output: []
Explanation: It will rain over lake 20 two consecutive days. There is no chance to dry any lake.


Constraints:

1 <= rains.length <= 10^5
0 <= rains[i] <= 10^9


思考路程
1 不管从前遍历还是从后遍历，如果遇到0，必须往前查看是否是出现过，首先把出现过的，dry，然后才能确定最大概率不出现flood，
这是一种暴力解法

2 题解

When drying a lake #L, it is only useful to dry it if it is FULL already. Otherwise its of no use. (Explained this in the code with a small example as well.)
Which lake to dry on a day when there is no rain, can not be determined without knowing the rain sequence that is coming next.
For example - If you have rains = [1, 2, 0, ??]. Without knowing what the '??' is, you can not determine which lake to dry on the 3rd day (rains[2]), this is because if '??' = 1, then you must dry the lake #1 to avoid flooding. Similarly, if '??' =2, then you must dry lake #2 to avoid flooding.

思路是一样的，所以关键就是如何确定如何在某天不下雨的时候，如何根据后面要下的雨来决定在不下雨的这天，决定dry 那个湖水。

看到了map和set，其实也就是一个查找和替换的过程。

