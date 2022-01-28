package LargestRect;

/**
 * @author zsj
 * @create 2022 01 上午11:07
 */
public class Solution {
    public int largestRectangleArea(int[] heights) {
        int max  = 0;
        int minHeight = 0;
        for(int i =0;i<heights.length;i++) {
            minHeight = heights[i];
            max = Math.max(minHeight,max);
            for(int j = i+1;j<heights.length;j++) {
                if(heights[j]<minHeight) {
                    minHeight = heights[j];
                }
                max = Math.max(max, minHeight * (j - i + 1));
            }
        }
        return max;
    }
}
