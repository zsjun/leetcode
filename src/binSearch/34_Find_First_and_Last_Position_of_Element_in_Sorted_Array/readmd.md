
## 34 查找区间
  ### 题目描述

  给定一个增序的整数数组和一个值，查找该值第一次和最后一次出现的位置。如果不存在该值，则两个返回值都设为-1<br/>

  进阶<br/>
  使用O（lgn）时间复杂度解决。<br/>

  例子1<br/>

  输入: nums = [5,7,7,8,8,10], target = 8<br/>
  输出: [3,4]<br/>
  解释: 数字 8 在第 3 位第一次出现，在第 4 位最后一次出现。<br/>

  例子2<br/>

  输入: nums = [5,7,7,8,8,10], target = 6<br/>
  输出: [-1,-1]<br/>
  解释: 6 在数组中没有出现<br/>

  例子3<br/>

  输入: nums = [3,3,3], target = 3<br/>
  输出: [0,2]<br/>
  解释: 3 在数组中出现第一次位置是0，最后一次的位置2<br/>

  说明<br/>
  1 0 <= nums.length <= 10^5<br/>
  2 -10^9 <= nums[i] <= 10^9<br/>
  3 -10^9 <= target <= 10^9<br/>


  ### 思考 1

  这个思路很简单，因为数组是升序的，而且指明使用O（lgn）方法解决，很明显使用二分查找解决。<br/>

  这个也比较简单，就是常用的二分查找，如果最后没有发现，返回[-1,-1]就可以了<br/>

  这里需要注意的就是你要找到target在数组中第一出现的位置和target最后一次出现的位置。<br/>

  ### 实现1

  ```js
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  export default (nums, target) => {
    if (nums.length === 0 || (nums.length === 1 && nums[0] !== target)) {
      return [-1, -1];
    }
    if (nums.length === 1 && nums[0] === target) {
      return [0, 0];
    }

    const len = nums.length;
    let low = 0;
    let high = len - 1;

    const res = [];
    while (low <= high) {
      // 为了防止数据溢出
      let mid = Math.floor(low + (high - low) / 2);

      if (nums[mid] === target) {
        let minFlag = false;
        let maxTemp = mid;
        let minTemp = mid;
        while (minTemp >= 0 && nums[minTemp] === target) {
          minTemp--;
        }

        if (minTemp + 1 !== mid) {
          res.push(minTemp + 1);
        } else {
          res.push(mid);
        }
        while (maxTemp < len && nums[maxTemp] === target) {
          maxTemp++;
        }

        if (maxTemp === mid + 1) {
          res.push(mid);
        } else {
          res.push(maxTemp - 1);
        }
        return res;
      }
      if (nums[mid] < target) {
        low = mid + 1;
      }
      if (nums[mid] > target) {
        high = mid - 1;
      }
    }
    if (res.length === 2) {
      return res.sort((a, b) => a - b);
    } else {
      return [-1, -1];
    }
  };

  ```

  算法时间复杂度 O(lgn), 空间复杂度 O(1)