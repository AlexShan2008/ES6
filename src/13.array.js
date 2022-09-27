// Reduce

const sum = (a, b) => a + b;
const toUpper = (str) => str.toUpperCase();
const add = (str) => `***${str}***`;

// const compose = (...fns) => {
//   return (...args) => {
//     let lastFn = fns.pop();
//     return fns.reduceRight((a, b) => {
//       return b(a);
//     }, lastFn(...args));
//   };
// };

// const compose = (...fns) => {
//   return fns.reduce((a, b) => {
//     return (...args) => {
//       return a(b(...args));
//     };
//   });
// };

const compose = (...fns) =>
  fns.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );

const res = compose(add, toUpper, sum)("beijing", "china");
console.log(res);

Array.prototype.reduce = function (callback, prev) {
  for (let i = 0; i < this.length; i++) {
    if (prev === undefined) {
      prev = callback(this[i], this[i + 1], i + 1, this);
      i++;
    } else {
      prev = callback(prev, this[i], i, this);
    }
  }

  return prev;
};

// 求和
const total = [1, 2, 4].reduce((a, b, index, current) => a + b, 100);
console.log(total);

// map 映射 filter some every find includes
const filteredArr = [1, 2, 3].filter((a) => a !== 2); // 返回等于 true 的元素
const first = [1, 2, 3].find((a) => a !== 2); // 返回等于 true 的第一个元素
console.log(filteredArr);
console.log(first);
