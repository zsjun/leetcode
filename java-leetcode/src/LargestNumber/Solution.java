package LargestNumber;

import java.util.Arrays;
import java.util.Comparator;

/**
 * @author zsj
 * @create 2022 02 下午2:51
 */
public class Solution {
    public String largestNumber(int[] nums) {
        if(nums == null || nums.length == 0)
            return "";

        // 首先变成字符串数组
        String[] s_num = new String[nums.length];
        for(int i = 0; i < nums.length; i++)
            s_num[i] = String.valueOf(nums[i]);

        // 对比看下，哪个应该需要放到前面去
        // Comparator 接口
        Comparator<String> comp = new Comparator<String>(){
            @Override
            public int compare(String str1, String str2){
                String s1 = str1 + str2;
                String s2 = str2 + str1;
                return s2.compareTo(s1); // reverse order here, so we can do append() later
            }
        };

        Arrays.sort(s_num, comp);
        // 开始的时候，只有0
        if(s_num[0].charAt(0) == '0')
            return "0";
        // StringBuilder
        StringBuilder sb = new StringBuilder();
        for(String s: s_num)
            sb.append(s);

        return sb.toString();
    }

}
