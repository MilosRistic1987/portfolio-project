var cena = 1600;
var kolicina_novca = 5000;
if (kolicina_novca < cena) {
  console.log(`Nemate dovoljno novca`);
  console.log(`Trenutno stanje je: ${kolicina_novca}`);
} else {
  console.log(`Uspesno ste kupili proizvod`);
  console.log(`Trenutno stanje je: ${kolicina_novca - cena}`);
}
