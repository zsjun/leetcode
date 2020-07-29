191. Number of 1 Bits

Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).



Example 1:

Input: 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
Example 2:

Input: 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
Example 3:

Input: 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.


Note:

Note that in some languages such as Java, there is no unsigned integer type. In this case, the input will be given as signed integer type and should not affect your implementation, as the internal binary representation of the integer is the same whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3 above the input represents the signed integer -3.

思考过程<br/>
1 关键点 n & n-1 相当于去掉最右边的1<br/>
console.log(4294967293 & 4294967292) = -4 <br/>
js的&运算会首先把<br>
1.11111111111111111111111111111010000000000000000000001000001111;4294967293<br>
1.11111111111111111111111111111000000000000000000000001000001111;4294967293<br>
当执行后<br>
1111111111111111111111111111100 = -4
