const API = "http://localhost:5000/api/auth";

// SIGNUP
function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch(`${API}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message || "Signup success");
    window.location.href = "login.html";
  });
}

// LOGIN
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch(`${API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login successful");
      window.location.href = "index.html";
    } else {
      alert("Invalid credentials");
    }
  });
}
