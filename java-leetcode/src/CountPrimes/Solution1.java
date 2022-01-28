package CountPrimes;

/**
 * @author zsj
 * @create 2022 01 下午3:50
 */
public class Solution1 {
    public int countPrimes(int n) {
        boolean[] notPrimse = new boolean[n];
        int count  = 0;
        for(int i = 2;i<n;i++) {
            if(notPrimse[i] == false) {
                count++;
                for(int j = 2;i*j<n;j++) {
                    notPrimse[i*j] = true;
                }
            }
        }
        return count;
    }
}
