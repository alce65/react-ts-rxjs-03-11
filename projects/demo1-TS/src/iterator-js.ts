const collection = [1, 2, 3];
const iterator = collection[Symbol.iterator]();

while (true) {
  const { value, done } = iterator.next();
  console.log(value, done);
  if (done) break;
}
