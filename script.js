function signup() {
  let n = document.getElementById("name").value;
  let e = document.getElementById("email").value;
  let p = document.getElementById("pass").value;
  let cp = document.getElementById("cpass").value;

  if(n==""||e==""||p==""||cp=="") {
    alert("Fill all fields");
  } else if(p != cp) {
    alert("Passwords not same");
  } else {
    localStorage.setItem("user", e);
    localStorage.setItem("pass", p);
    alert("Signup Done");
  }
}

function login() {
  let e = document.getElementById("email").value;
  let p = document.getElementById("pass").value;
  if(e==localStorage.getItem("user") && p==localStorage.getItem("pass")) {
    alert("Login OK");
    localStorage.setItem("login","1");
    location.href="index.html";
  } else {
    alert("Wrong login");
  }
}

function add(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added To Cart");
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let box = document.getElementById("list");
  box.innerHTML = "";
  for(let x of cart) {
    let p = document.createElement("p");
    p.innerText = x;
    box.appendChild(p);
  }
}
