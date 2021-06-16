function read(url) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, "utf-8", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

// 操作过多还是回调地狱，只是换了种方法，可读性提升了一点点
read(A)
  .then((data) => {
    return read(B);
  })
  .then((data) => {
    return read(C);
  })
  .then((data) => {
    return read(D);
  })
  .then((reason) => {
    console.log(reason);
  });
