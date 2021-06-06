const shallowClone = (target) => {
  if (typeof target === "object" && target !== null) {
    const cloneTarget = Array.isArray(target) ? [] : {};
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = target[prop];
      }
    }
    return cloneTarget;
  } else {
    return target;
  }
};

let arr = { a: 1, b: { c: 2 } };
let newArray = shallowClone(arr);
newArray.b.c = 3;
console.log(arr);
console.log(newArray);
