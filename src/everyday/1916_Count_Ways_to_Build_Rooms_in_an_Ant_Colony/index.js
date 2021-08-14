// /**
//  * @param {number[]} prevRoom
//  * @return {number}
//  */
// const travel = (tempRes, prevRoom, len, res) => {
//   if (tempRes.length === len) {
//     res[0] += 1;
//     return;
//   }
//   for (let i = 0; i < prevRoom.length; i++) {
//     if (prevRoom[i] <= tempRes.length && prevRoom[i] !== -1) {
//       tempRes.push(i);
//       const tempVal = prevRoom[i];
//       // const copyRoom = [...prevRoom];
//       prevRoom[i] = -1;
//       travel([...tempRes], prevRoom, len, res);
//       prevRoom[i] = tempVal;
//       tempRes.pop();
//     }
//   }
// };
// // [-1,0,1]
// export default (prevRoom) => {
//   let res = [];
//   const len = prevRoom.length;
//   for (let i = 1; i < len; i++) {
//     const temp = [0];
//     if (prevRoom[i] < 1) {
//       temp.push(i);
//       const copyRoom = [...prevRoom];
//       copyRoom[i] = -1;
//       travel(temp, copyRoom, len, res);
//     }
//   }
//   return res[0];
//   // travel(res, prevRoom, prevRoom.length);
// };
