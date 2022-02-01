package Solution;

import java.util.Random;

/**
 * @author zsj
 * @create 2022 02 下午2:40
 */
public class Solution1 {
    private int[] nums;
    private Random random;

    public Solution1(int[] nums) {
        this.nums = nums;
        random = new Random();
    }
    public int[] reset() {
        return nums;
    }
    public int[] shuffle() {
        if(nums == null) return null;
        int[] a = nums.clone();
        for(int j=1;j<a.length;j++) {
            int i = random.nextInt(j+1);
            swap(a,i,j);
        }
        return a;
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}
