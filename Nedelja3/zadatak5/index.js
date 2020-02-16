var orderNumber = 0;

var orderButtons = document.querySelectorAll(".orderButton");

var orderButtonsNow = document.querySelectorAll(".orderButtonNow");

orderButtons.forEach(function(orderButton) {
  orderButton.addEventListener("click", e => {
    orderNumber++;
    console.log(orderNumber);
    document.getElementById("orderCardCount").innerHTML = orderNumber;
  });
});

orderButtonsNow.forEach(function(orderButtonNow) {
  var date = new Date();
  orderButtonNow.addEventListener("click", e => {
    if (orderNumber > 0) {
      alert(
        `Narucili ste ${orderNumber} pizza ${date.getDate()}.${date.getMonth() +
          1}.${date.getFullYear()},${date.getHours()}:${date.getMinutes()}`
      );
      orderNumber = 0;
    } else {
      alert("Greska!");
    }
    document.getElementById("orderCardCount").innerHTML = orderNumber;
  });
});
