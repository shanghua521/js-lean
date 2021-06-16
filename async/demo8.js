const readFileThunk = (filename) => {
  return (callback) => {
    fs.readFile(filename, callback);
  };
};

const gen = function* () {
  const data1 = yield readFileThunk("1.txt");
  console.log(data1.toString());
  const data2 = yield readFileThunk("1.txt");
  console.log(data2.toString());
};

function run(gen) {
  const next = (err, data) => {
    let res = gen.next(data);
    if (res.done) return;
    res.value(next);
  };
  next();
}

let g = gen();

run(g);

// g.next().value((err, data1) => {
//   g.next(data1).value((err, data2) => {
//     g.next(data2);
//   });
// });
