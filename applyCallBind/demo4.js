function getType(obj) {
  let type = typeof obj;
  if (type != "object") {
    return type;
  }
  return Object.prototype.toString.call(obj).replace(/\[object\s(.*?)\]/, "$1");
}

var date = new Date();
console.log(getType(date));
