// ppm-pizza per month
// y-year
// maxy-max year
// ppy-pizza per year
// ppl-pizza per life

function lifeSupply(ppm, y) {
  const maxy = 100;
  var ppy = ppm * 12;
  var ppl = 0;
  for (i = y; i < maxy; i++) {
    ppl += ppy;
  }
  return ppl;
}
var a = lifeSupply(13, 32);
console.log(
  `Ukupan broj pojedenih pizza ovim tempom za ceo zivot bio bi ${a}, sto znaci da ako je cena jedne 700 i pretpostavimo da ne raste, i da cu ziveti 100 godina,potrosicu  7637760 rsd sto je po sadasnjem kursu oko 63k eura, ili cena jedne solidne nekretnine u bg-u.p.s prestacu da jedem pizzu :( `
);
