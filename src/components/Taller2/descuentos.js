function discountedPrice() {
  var discount = Number(document.getElementById("input-discount").value);
  var price = Number(document.getElementById("input-price").value);
  console.log(price * ((100 - discount) / 100));
  document.getElementById("result-span").textContent =
    price * ((100 - discount) / 100);
  return price * ((100 - discount) / 100);
}
