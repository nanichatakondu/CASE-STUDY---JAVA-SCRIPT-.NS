function signup() {
  let n = document.getElementById("name").value;
  let e = document.getElementById("email").value;
  let p = document.getElementById("pass").value;
  let cp = document.getElementById("cpass").value;
  let ph = document.getElementById("phone").value;

  if(n==""||e==""||p==""||cp==""||ph=="") {
    alert("Fill all fields");
  } else if(p!=cp) {
    alert("Passwords not same");
  } else {
    localStorage.setItem("clinicUser", e);
    localStorage.setItem("clinicPass", p);
    alert("Signup Done");
  }
}

function login() {
  let e = document.getElementById("email").value;
  let p = document.getElementById("pass").value;
  if(e==localStorage.getItem("clinicUser") && p==localStorage.getItem("clinicPass")) {
    localStorage.setItem("clinicLogin","1");
    alert("Login OK");
    location.href="index.html";
  } else {
    alert("Wrong login");
  }
}

function book() {
  let n = document.getElementById("pname").value;
  let d = document.getElementById("doc").value;
  let t = document.getElementById("time").value;
  let r = document.getElementById("reason").value;

  if(n=="" || d=="" || t=="" || r=="") {
    alert("Fill all fields");
  } else {
    let apps = JSON.parse(localStorage.getItem("apps")) || [];
    apps.push(n+" with "+d+" at "+t+" for "+r);
    localStorage.setItem("apps", JSON.stringify(apps));
    alert("Appointment Booked");
  }
}

function loadApps() {
  let apps = JSON.parse(localStorage.getItem("apps")) || [];
  let box = document.getElementById("list");
  box.innerHTML="";
  for(let a of apps) {
    let p=document.createElement("p");
    p.innerText=a;
    box.appendChild(p);
  }
}
