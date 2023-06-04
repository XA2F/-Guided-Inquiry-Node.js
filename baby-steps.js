function baby(arr) {
  let new1 = 0;
  for (let i = 2; i < arr.length; i++) {
    new1 += Number(arr[i]);
  }
  return new1;
}

console.log(baby(process.argv));
