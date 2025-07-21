document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // Simulate saving user (can connect to backend later)
  localStorage.setItem("user", JSON.stringify({ name, email, password }));

  alert("Registration successful! You can now log in.");
  window.location.href = "login.html";
});
