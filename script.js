function signup() {
  let n = document.getElementById("name").value;
  let e = document.getElementById("email").value;
  let p = document.getElementById("pass").value;
  let cp = document.getElementById("cpass").value;

  if(n==""||e==""||p==""||cp=="") {
    alert("Fill all fields");
  } else if(p!=cp) {
    alert("Passwords not same");
  } else {
    localStorage.setItem("libUser", e);
    localStorage.setItem("libPass", p);
    alert("Signup Done");
  }
}

function login() {
  let e = document.getElementById("email").value;
  let p = document.getElementById("pass").value;
  if(e==localStorage.getItem("libUser") && p==localStorage.getItem("libPass")) {
    localStorage.setItem("libLogin","1");
    alert("Login OK");
    location.href="index.html";
  } else {
    alert("Wrong login");
  }
}

function issue(book) {
  let bag = JSON.parse(localStorage.getItem("issued")) || [];
  bag.push(book);
  localStorage.setItem("issued", JSON.stringify(bag));
  alert("Book Issued");
}

function loadIssued() {
  let bag = JSON.parse(localStorage.getItem("issued")) || [];
  let box = document.getElementById("list");
  box.innerHTML="";
  for(let b of bag) {
    let p=document.createElement("p");
    p.innerText=b;
    box.appendChild(p);
  }
}
