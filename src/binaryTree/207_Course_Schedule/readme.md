207. Course Schedule

There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?



Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.


Constraints:

The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
1 <= numCourses <= 10^5


思考路程
1， 问题可以转换为如何判断有向图中是否有环，如果没有环，则可以全部学完全部课程，如果有环，则肯定学不完
那么如何判断是否有环呢？
1.1 本来想根据一个visited数组，把访问过的都标记，这样来不断深度搜索，最后发现，逻辑自己都被搞混了，而且好多测试用例过不去，干脆放弃
1.2 可以判断是否存在入度为0的节点，如果存在则去掉，同时更新和该节点联系的入度，如果最后发现还是存在节点，则说明存在环

心得：
逻辑如果自己设想的太复杂，或者边界太多，基本上就说明该算法是不正确的，算法算法，是首先在脑中实现，是靠脑子调试，而不是靠调试器


