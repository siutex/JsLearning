var num = 0;
num = num +2;
num = num*3;
num = num/2;
num++;
num--;

num+=1;
num-=2;
num*=3;
num/=2;
num%=3;

console.log('num==1: '+(num==1)); //{1}
console.log('num===1: '+(num===1)); //{2}
console.log('num!=1: '+(num!=1)); //{3}
console.log('num>1: '+(num>1)); //{4}
console.log('num<1: '+(num<1)); //{5}
console.log('num>=1: '+(num>=1)); //{6}
console.log('num<=1: '+(num<=1)); //{7}

console.log('5 & 1:', (5 & 1));
console.log('5 | 1:', (5 | 1));
console.log('~ 5:', (~5));
console.log('5 ^ 1:', (5 ^ 1));
console.log('5 << 1:', (5 << 1));//left shift
console.log('5 >> 1:', (5 >> 1));//right shift


console.log('typeof num:', typeof num);
console.log('typeof Packt:', typeof 'Packt');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1,2,3]);
console.log('typeof {name:John}:', typeof {name:'John'});




typeof [1,2,3]: object
typeof {name:John}: object
var myObj = {name: 'John', age: 21};
delete myObj.age;
console.log(myObj); //outputs Object {name: "John"}
