// Proxy 可以监控数组的变化 和 对象 的变化；Object.defineProperty 并不能

const arr = [1, 2, 3];

const update = () => {
  console.log("Render");
};

let proxy = new Proxy(arr, {
  set(target, key, value) {
    if (key === "length") return true; // 可以保证只触发一次 update()

    update(); // 默认会 render 两次，因为内容变化 和 长度 变化会分别触发 一次， 合计 2 次；

    return Reflect.set(target, key, value);
  },
  get(target, key) {
    return Reflect.get(target, key);
  },
});

proxy.push(4);
console.log(proxy);
