var events = require("events");
var emitter = new events.EventEmitter();
function hello1(name) {
  console.log("hello 1", name);
}

function hello2(name) {
  console.log("hello 2", name);
}

emitter.addListener("say", hello1);
emitter.addListener("say", hello2);

emitter.emit("say", "john");

// 输出 hello 1 john
// 输出 hello 2 john

// emitter.removeListener("say", hello1);  // 移出 say hello1 方法 的监听
emitter.removeAllListeners("say"); // 移出所有 say 相关的监听

emitter.emit("say", "john");
// 相应的，监听 say 事件的 hello1 事件被移出
// 只输出 hello 2 john
