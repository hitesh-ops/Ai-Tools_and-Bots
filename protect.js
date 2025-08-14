window.addEventListener("DOMContentLoaded", () => {
  try {
    const userData = localStorage.getItem("user");
    if (!userData) {
      window.location.href = "login.html";
      return;
    }
    const user = JSON.parse(userData);
    if (!user || !user.email) {
      window.location.href = "login.html";
    }
  } catch (error) {
    console.error("Invalid user data in localStorage.");
    window.location.href = "login.html";
  }
});
