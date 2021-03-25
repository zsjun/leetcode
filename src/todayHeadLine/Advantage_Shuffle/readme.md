870. Advantage Shuffle

Given two arrays A and B of equal size, the advantage of A with respect to B is the number of indices i for which A[i] > B[i].

Return any permutation of A that maximizes its advantage with respect to B.



Example 1:

Input: A = [2,7,11,15], B = [1,10,4,11]
Output: [2,11,7,15]

Example 2:

Input: A = [12,24,8,32], B = [13,25,32,11]
Output: [24,32,8,12]



Note:

    1 <= A.length = B.length <= 10000
    0 <= A[i] <= 10^9
    0 <= B[i] <= 10^9


### 思考
思想很简单，主要是如何处理B数组中的值和对应下标的对应关系，自己的思路是通过map来保存对应值的下标，因为这里可能会存在相同的值，所以使用数组。

但是看别人处理，是使用一个存储下标的数组，然后根据B数组的数字大小来排序，这样达到排序数组的方法






