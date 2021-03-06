# 小朋友过河问题

小朋友过桥问题：在一个夜黑风高的晚上，有n（n <= 50）个小朋友在桥的这边，现在他们需要过桥，但是由于桥很窄，每次只允许不大于两人通过，他们只有一个手电筒，所以每次过桥的两个人需要把手电筒带回来，i号小朋友过桥的时间为T[i]，两个人过桥的总时间为二者中时间长者。问所有小朋友过桥的总时间最短是多少。

思考
假设前i个人过河花费的最少时间为opt[i]，那么考虑前i-1个人过河的情况，即河这边还有1个人，河那边有i-1个人，并且这时候手电筒肯定在对岸，所以opt[i] = opt[i-1] + a[1] + a[i](让花费时间最少的人把手电筒送过来，然后和第i个人一起过河)

如果河这边还有两个人，一个是第i号，另外一个无所谓，河那边有i-2个人，并且手电筒肯定在对岸，所以opt[i] = opt[i-2] + a[1] + a[i] + 2*a[2] (让花费时间最少的人把电筒送过来，然后第i个人和另外一个人一起过河，由于花费时间最少的人在这边，所以下一次送手电筒过来的一定是花费次少的，送过来后花费最少的和花费次少的一起过河，解决问题)

所以 opt[i] = min{opt[i-1] + a[1] + a[i] , opt[i-2] + a[1] + a[i] + 2*a[2] }。

这里为什么只考虑两种情况呢？
为什么不考虑河这边有三个人，因为可以根据opt[1]和opt[2]就可以确定所有的了。

时间复杂度 O(n), 空间复杂度O（1）

