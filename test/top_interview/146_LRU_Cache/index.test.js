import LRUCache from "../../../src/top_interview/146_LRU_Cache/index1";

test("1", () => {
  const lRUCache = new LRUCache(2);
  lRUCache.put(2, 1); // cache is {1=1}
  lRUCache.put(1, 1); // cache is {1=1, 2=2}
  lRUCache.put(2, 3); // cache is {1=1, 2=2}
  lRUCache.put(4, 1); // cache is {1=1, 2=2}
  // lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
  // lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
  console.log(lRUCache.get(1)); // return -1 (not found)
  // console.log(lRUCache.get(3)); // return 3
  // console.log(lRUCache.get(4)); // return 4
});
