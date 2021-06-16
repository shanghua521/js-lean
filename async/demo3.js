function read(url) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, "utf-8", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

// 通过 Promise.all 可以实现多个异步并行执行，同一时刻获取最终结果的问题
Promise.all([read(A), read[B], read[C]])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
