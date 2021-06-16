function testWait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("testWait");
      resolve();
    }, 1000);
  });
}

async function testAwaitUse() {
  await testWait();
  console.log("hello");
  return 123;
}

console.log(testAwaitUse());
