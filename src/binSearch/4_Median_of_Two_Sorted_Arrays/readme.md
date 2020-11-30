首先判断nums1和nums2的数组长度，让nums1的数组长度小于等于nums2的数组长度<br/>

假设k是nums1和nums2合并之后，我们要寻找的中位数下标，如果nums1和nums合并之后的数组长度是奇数<br/>
则k只有一个，如果nums1和nums合并之后的数组长度是偶数，则k取较小的值<br/>

可以从nums1中取出k/2的数字，从nums2中取出k/2的数字，此时nums1[k/2]和nums2[k/2]肯定有三种情况<br/>

nums1[k/2] > nums2[k/2],也就是说nums1[k/2]在合并之后的数组中肯定不可能是中位数，因为nums1[k/2]可能比
nums2[k/2]后面的数字还大，这种情况，我们得需要让nums1减少 k/4 个数字，让nums2增加k/4个数字，然后继续判断<br/>

nums1[k/2] < nums2[k/2]的情况同理<br/>

nums1[k/2] === nums2[k/2]的时候，基本说明我们已经发现了中位数，要么是nums1[k/2],要么是(nums1[k/2]+Math.min(nums1[k/2+1],nums2[k/2+1]))/2<br/>
