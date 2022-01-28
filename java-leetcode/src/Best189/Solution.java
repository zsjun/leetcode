package Best189;

/**
 * @author zsj
 * @create 2022 01 上午10:29
 */
// 第一种方法是使用 （i+k）% len
// 第二种， 三种转换
// 第三种， 单次进行转换
public class Solution {
    public void reverse(int[] nums, int start, int end) {
        while (start < end) {
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
    public void rotate(int[] nums, int k) {
        k %= nums.length;
        reverse(nums, 0, nums.length - 1);
        reverse(nums, 0, k - 1);
        reverse(nums, k, nums.length - 1);
    }

}
