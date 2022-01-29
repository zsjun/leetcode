package RestoreIp;

import java.util.ArrayList;
import java.util.List;

/**
 * @author zsj
 * @create 2022 01 下午2:57
 */
public class Solution {
    public List<String> restoreIpAddresses(String s) {
        // 字符串数组
        List<String> ret = new ArrayList<>();
        // 字符串
        StringBuffer ip = new StringBuffer();
        for(int a = 1 ; a < 4 ; ++ a)
            for(int b = 1 ; b < 4 ; ++ b)
                for(int c = 1 ; c < 4 ; ++ c)
                    for(int d = 1 ; d < 4 ; ++ d)
                    {
                        if(a + b + c + d == s.length() )
                        {
                            int n1 = Integer.parseInt(s.substring(0, a));
                            int n2 = Integer.parseInt(s.substring(a, a+b));
                            int n3 = Integer.parseInt(s.substring(a+b, a+b+c));
                            int n4 = Integer.parseInt(s.substring(a+b+c));
                            if(n1 <= 255 && n2 <= 255 && n3 <= 255 && n4 <= 255)
                            {
                                ip.append(n1).append('.').append(n2)
                                        .append('.').append(n3).append('.').append(n4);
                                // 这里的3是三个点的长度
                                if(ip.length() == s.length() + 3) {
                                    ret.add(ip.toString());
                                }
                                ip.delete(0, ip.length());
                            }
                        }
                    }
        return ret;
    }
}
