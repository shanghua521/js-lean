// 其逻辑为先读取 A 文本内容，再根据 A 文本内容读取 B，然后再根据 B 的内容读取 C。为了实现这个业务逻辑，上面实现的代码就很容易形成回调地狱。
fs.readFile(A, "utf-8", function (err, data) {
  fs.readFile(B, "utf-8", function (err, data) {
    fs.readFile(C, "utf-8", function (err, data) {
      fs.readFile(D, "utf-8", function (err, data) {
        //....
      });
    });
  });
});
