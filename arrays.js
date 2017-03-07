var daysOfWeek = ['Sunday','Monday','Thuesday','Wendnesday','Thursday','Friday','Saturday'];
console.log(daysOfWeek.length);
for(var i=0; i<daysOfWeek.length;i++){
  console.log(daysOfWeek[i]);
}

var fibonacci = [];
fibonacci[1] =1;
fibonacci[2] =1
for (var i = 3; i < 20; i++) {
  fibonacci[i]=fibonacci[i-1]+fibonacci[i-2];
}
for (var i = 0; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
}

//array list? nie bo jest po prostu mutable jak w pytonie
var numbers = [0,1,2,3,4,5,6,7,8,9];
numbers[numbers.length];
numbers.push(11);
numbers.push(12,13);
//przesuniecie w prawo
for (var i = numbers.length; i >= 0; i--) {
  numbers[i]=numbers[i-1]
}
numbers[0]= -1;//wstawiamy na 1 pozycje
numbers.unshift(-2);
numbers.unshift(-4,-3)
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
numbers.pop();
//usuwamy z poczatku
for (var i = 0; i < numbers.length; i++) {
  numbers[i]=numbers[i+1];
}

//usuwamy z konca
numbers.pop();
//usuwamy z poczatku
numbers.shift();
//te metody udaja kolejke queue
numbers.splice(5,3);
//usuwamy 3 elementy od indexu nr 3
numbers.splice(5,0,2,3,4);//wstawiamy numery od 2 do 4 zaczynajac od pozycji 5
