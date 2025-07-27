document.getElementById("searchicon").addEventListener("click", function () {
  const query = document.getElementById("searchbar").value.toLowerCase().trim();
  const allProducts = document.querySelectorAll("#product"); 
  let found = false;

  for (let product of allProducts) {
    const name = product.textContent.toLowerCase();
    if (name.includes(query)) {
      product.scrollIntoView({ behavior: "smooth", block: "center" });
      product.style.backgroundColor = "yellow"; 
      found = true;
      break;
    }
  }

  if (!found) {
    alert("Item not found.");
  }
});


window.onload = function () {
  const subtotalElement = document.getElementById("sub");
  let totalsum = localStorage.getItem("totalsum");
  totalsum = totalsum ? parseFloat(totalsum) : 0;

  if (subtotalElement) {
    subtotalElement.innerText = "Subtotal : $" + totalsum.toFixed(2);
  }
};
function addprice(price) {
  let totalsum = localStorage.getItem("totalsum");
  totalsum = totalsum ? parseFloat(totalsum) : 0;
  totalsum += price;
  localStorage.setItem("totalsum", totalsum);

  const subtotalElement = document.getElementById("sub");
  if (subtotalElement) {
    subtotalElement.innerText = "Subtotal : $" + totalsum.toFixed(2);
  }
}
function addprice(price) {
  let totalsum = localStorage.getItem("totalsum");
  totalsum = totalsum ? parseFloat(totalsum) : 0;
  totalsum += price;
  localStorage.setItem("totalsum", totalsum);

  const subtotalElement = document.getElementById("sub");
  if (subtotalElement) {
    subtotalElement.innerText = "Subtotal : $" + totalsum.toFixed(2);
  }
}
document.getElementById("reset")?.addEventListener("click", function () {
  localStorage.setItem("totalsum", 0); // reset in localStorage

  const subtotalElement = document.getElementById("sub");
  if (subtotalElement) {
    subtotalElement.innerText = "Subtotal : $0.00";
  }

  alert("Cart has been reset.");
});
document.querySelector(".headphone").onclick=function(){
    price=199;
    alert("headphone is selected");
    addprice(price);
}
document.querySelector(".ps5").onclick=function(){
    price=299;
    alert("ps5 is selected");
    addprice(price);
}
document.querySelector(".oraclef1").onclick=function(){
    price=299;
    alert("oraclef1 is selected");
    addprice(price);
}
document.querySelector(".top").onclick=function(){
    price=29;
    alert("top is selected");
    addprice(price);
}
document.querySelector(".jacketred").onclick=function(){
    price=89;
    alert("jacketredbull is selected");
    addprice(price);
}
document.querySelector(".iphone").onclick=function(){
    price=150;
    alert("iphone is selected");
    addprice(price);
}
document.querySelector(".macbook").onclick=function(){
    price=170;
    alert("macbook is selected");
    addprice(price);
}
document.querySelector(".geforce").onclick=function(){
    price=299;
    alert("geforce is selected");
    addprice(price);
}
document.querySelector(".kitchen").onclick=function(){
    price=132;
    alert("kitchen is selected");
    addprice(price);
}
document.querySelector(".rolex").onclick=function(){
    price=1000;
    alert("rolex is selected");
    addprice(price);
}
document.querySelector(".bovet").onclick=function(){
    price=98000;
    alert("bovet is selected");
    addprice(price);
}
document.querySelector(".casio").onclick=function(){
    price=106;
    alert("casio is selected");
    addprice(price);
}




document.querySelector("Pigeon").onclick=function(){
    price=12;
    alert("Pigeon is selected");
    addprice(price);
}
document.querySelector("Juicer").onclick=function(){
    price=52;
    alert("Juicer is selected");
    addprice(price);
}
document.querySelector("countertop").onclick=function(){
    price=14;
    alert("countertop is selected");
    addprice(price);
}
document.querySelector("nonstick").onclick=function(){
    price=29;
    alert("nonstick is selected");
    addprice(price);
}
document.querySelector("Hawkins").onclick=function(){
    price=35;
    alert("Hawkins is selected");
    addprice(price);
}
document.querySelector("nike").onclick=function(){
    price=120;
    alert("nike is selected");
    addprice(price);
}
document.querySelector("Reebok").onclick=function(){
    price=129;
    alert("reebok is selected");
    addprice(price);
}
document.querySelector("jorden").onclick=function(){
    price=529;
    alert("jorden is selected");
    addprice(price);
}
document.querySelector("adidas").onclick=function(){
    price=329;
    alert("adidas is selected");
    addprice(price);
}
document.querySelector("adidasmen").onclick=function(){
    price=350;
    alert("adidasmen is selected");
    addprice(price);
}

