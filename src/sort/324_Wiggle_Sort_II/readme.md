324. Wiggle Sort II

Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

Example 1:

Input: nums = [1, 5, 1, 1, 6, 4]
Output: One possible answer is [1, 4, 1, 5, 1, 6].

Example 2:

Input: nums = [1, 3, 2, 2, 3, 1]
Output: One possible answer is [2, 3, 1, 3, 1, 2].

Note:
You may assume all input has valid answer.

Follow Up:
Can you do it in O(n) time and/or in-place with O(1) extra space?

思考路程<br/>
这里还是比较复杂的<br/>
1 首先找到数组中第mid个大小的数，方便划分数组，比如[1, 5, 1, 1, 6, 4]，这里找到数组中第三大的数是1，所以根据题目的要求就是在奇数位放大于1的数，在偶数位放小于等于1的数。可以通过结果[1, 6, 1, 5, 1, 4]观察得出， 刚开始这里我想着先排序，然后倒序交换，发现遇到[1, 2, 2, 1, 2, 1, 1, 1, 1, 2, 2, 2]没法处理<br/>
2 既然明确了需要在奇数位放大于中间数的数字，在偶数位放小于中间数的数字，但是如何放呢？<br/>
发现题解里边用到了(1 + 2*index) % (n | 1)，这里n为数组长度，可以通过分别设置index为0，1，2，3，4，5 得到1，3，5，0，2，4，这里可以理解为这些为虚拟下标。<br/>
然后就是不断的根据虚拟下标，把大于mid的数放到奇数位上，把小于的放到偶数位置上，中间数放到剩下的位置<br/>


例子。<br/>
输入数组[13,6,5,5,4,2]， mid = 5<br/>
Mapped_idx[Left] 表示发现大于mid数的时候需要放置的位置<br/>
Mapped_idx[Right] 表示发现小于mid数的时候需要放置的位置<br/>


Step 1:<br/>
Original idx: 0    1    2    3    4    5<br/>
Mapped idx:   1    3    5    0    2    4     这里就是虚拟下标<br/>
Array:        13   6    5    5    4    2<br/>
             Left  初始Left =0<br/>
              i i=0 <br/>
                                      Right Right=5<br/>
 当i=0的时候，nums[Mapped_idx[i]] = nums[1] = 6 > 5, so it is ok to put 6 in the first odd index 1. We increment i and left.<br/>


Step 2:<br/>
Original idx: 0    1    2    3    4    5<br/>
Mapped idx:   1    3    5    0    2    4<br/>
Array:        13   6    5    5    4    2<br/>
                  Left=1<br/>
                   i=1<br/>
                                      Right=5<br/>
 当i=1的时候，nums[Mapped_idx[i]] = nums[3] = 5 = 5, 因为5不大于mid. 所以下一次当发现大于mid的数字的时候，还是要放到Mapped_idx[1]=3的位置，所以只能i++, 继续往下去寻找.<br/>


Step 3:<br/>
Original idx: 0    1    2    3    4    5<br/>
Mapped idx:   1    3    5    0    2    4<br/>
Array:        13   6    5    5    4    2<br/>
                  Left=1
                        i=2
                                     Right=5<br/>
 当i=2的时候，nums[Mapped_idx[i]] = nums[5] = 2 < 5, so we want to put it to the last even index 4 (pointed by Right). So, we swap nums[Mapped_idx[i]] with nums[Mapped_idx[Right]], i.e. nums[5] with nums[4], and decrement Right. 因为这里发现了2小于5了，我们需要把2放到偶数位置上，也就是最后一个偶数位置，也就是，这里Right就是表示的最后一个偶数的位置，所以交换nums[Mapped_idx[i]] with nums[Mapped_idx[Right]]，同时Right--；<br/>




Step 4:<br/>
Original idx: 0    1    2    3    4    5<br/>
Mapped idx:   1    3    5    0    2    4<br/>
Array:        13   6    5    5    2    4<br/>
                  Left=1<br/>
                        i=2<br/>
                               Right=4<br/>
 i=2 ,因为上一步i的值没有改变，nums[5] = 4 < 5, so we want to put it to the second last even index 2. So, we swap nums[5] with nums[2], and decrement Right.<br/>




Step 5:<br/>
Original idx: 0    1    2    3    4    5<br/>
Mapped idx:   1    3    5    0    2    4<br/>
Array:        13   6    4    5    2    5<br/>
                  Left=1<br/>
                        i=2<br/>
                            Right=3<br/>
 nums[5] = 5 === 5, it is ok to put it there, we increment i. 因为5 等于mid，不需要做什么，直接i++就可以<br/>


Step 6:<br/>
Original idx: 0    1    2    3    4    5<br/>
Mapped idx:   1    3    5    0    2    4<br/>
Array:        13   6    4    5    2    5<br/>
                  Left=1<br/>
                             i=3<br/>
                            Right=3<br/>
 nums[0] = 13 > 5, so, we want to put it to the next odd index which is 3 (pointed by 'Left'). So, we swap nums[0] with nums[3], and increment 'Left' and 'i'.<br/>


Step Final:<br/>
Original idx: 0    1    2    3    4    5<br/>
Mapped idx:   1    3    5    0    2    4<br/>
Array:        5    6    4    13   2    5<br/>
                      Left=2<br/>
                                  i=4<br/>
                            Right=3<br/>
i > Right, we get the final wiggle array 5 6 4 13 2 5 !<br/>

时间复杂度在找到中间数的实现，可以是O(n) ，空间复杂度O（1）


