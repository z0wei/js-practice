
console.log('1:', Number('123')); // 123
console.log('2:', Number('  42  ')); // 42
console.log('3:', Number('')); // 0
console.log('4:', Number('abc')); // NaN
console.log('5:', Number(true)); // 1
console.log('6:', Number(null)); // 0
console.log('7:', Number(undefined)); // NaN

console.log('8:', Boolean(0)); //false
console.log('9:', Boolean('')); //false
console.log('10:', Boolean('0')); //true
console.log('11:', Boolean(' ')); //true
console.log('12:', Boolean([])); //true
console.log('13:', Boolean(null)); //false

console.log('14:', String(123)); // '123'
console.log('15:', String(true)); // 'true'
console.log('16:', String(null)); // 'null'
console.log('17:', String([1, 2, 3])); // '1,2,3'   

console.log('18:', '5' + 3); // '53'
console.log('19:', '5' - 3); // 2
console.log('20:', 5 + true); // 6
console.log('21:', 5 + null); // 5
console.log('22:', 0 == ''); // true
console.log('23:', 0 === ''); // false