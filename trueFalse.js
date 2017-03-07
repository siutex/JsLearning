
function testTruthy(val){
return val ? console.log('truthy') : console.log('falsy');//drukuje truthy jeśli prawda falsy jeśli nie, jak w javie
}
testTruthy(true); //true
testTruthy(false); //false
testTruthy(new Boolean(false)); //true (object is always true)

testTruthy(''); //false
testTruthy('Packt'); //true
testTruthy(new String(''));

testTruthy(1; //true
testTruthy(-1); //false
testTruthy(NaN);
testTruthy(new Number(NaN));//true object always true

testTruthy({});//true object always true

var obj = {name:'John'};
testTruthy(obj);
testTruthy(obj.name);
testTruthy(obj.age);
