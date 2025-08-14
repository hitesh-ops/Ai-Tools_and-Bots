document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (email && password) {
    const user = {
      email: email,
      name: email.split("@")[0]
    };
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "dashboard.html"; // login ke baad redirect
  } else {
    alert("Invalid login!");
  }
});
