//opcija 1
var suma = 0;
var broj = 0;
while (suma <= 1000) {
  console.log(broj);
  suma++;
  broj += 5;
}

//opcija 2
var suma1 = 0;
var broj1 = 0;
while (suma1 <= 1000) {
  if (broj1 % 5 == 0) {
    console.log(broj1);
    suma1++;
  }
  broj1++;
}
