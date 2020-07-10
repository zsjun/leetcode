380. Insert Delete GetRandom O(1)


Design a data structure that supports all following operations in average O(1) time.



1 insert(val): Inserts an item val to the set if not already present.
2 remove(val): Removes an item val from the set if present.
3 getRandom: Returns a random element from current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.


Example:
// Init an empty set.
RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomSet.insert(1);

// Returns false as 2 does not exist in the set.
randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
randomSet.remove(1);

// 2 was already in the set, so return false.
randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
randomSet.getRandom();

思考路程
1 可以使用map，这样获取和添加都是O（1),如果获取的话，可以使用Math.random()

2 利用两个map 互相指向，这样稍微可以加快速度

心得

1 可以利用空间来换取时间，比如可以通过两个map来互反，这样就可以让时间加快一些