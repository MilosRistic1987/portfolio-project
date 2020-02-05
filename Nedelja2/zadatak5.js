var cena = 5000;
var precnik = 40;
var povrsina = (precnik / 2) ** 2 * Math.PI;
console.log(`cena po cm2 je: ${Math.ceil(cena / povrsina)} dinara`);
