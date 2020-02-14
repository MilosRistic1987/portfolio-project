function divideByFive(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] % 5 == 0) {
      console.log(array[i]);
    }
  }
}
divideByFive([1, 6, 5, 10, 1, 25, 30, 33, 17, 50]);
