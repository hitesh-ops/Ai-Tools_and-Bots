const toggleBtn = document.getElementById("toggleMode");
const body = document.body;

const tools = [
  { name: "ChatGPT", type: "free" },
  { name: "Image Generator", type: "paid" },
  { name: "Code Debugger", type: "free" },
  { name: "Text Summarizer", type: "paid" },
];

function renderTools(filter = "all") {
  const container = document.getElementById("toolsContainer");
  container.innerHTML = "";
  const filtered = tools.filter(tool => filter === "all" || tool.type === filter);
  filtered.forEach(tool => {
    const card = document.createElement("div");
    card.className = "tool-card";
    card.innerHTML = `
      <h3>${tool.name}</h3>
      <p>Type: ${tool.type}</p>
      <button class="try-now">Try Now</button>
    `;
    container.appendChild(card);
  });
}

document.getElementById("searchInput").addEventListener("input", function () {
  renderTools(document.getElementById("filterType").value);
});

document.getElementById("filterType").addEventListener("change", function () {
  renderTools(this.value);
});

document.getElementById("logoutBtn").addEventListener("click", function () {
  localStorage.removeItem("user");
  window.location.href = "login.html";
});

document.getElementById("homeBtn").addEventListener("click", function () {
  window.location.href = "index.html";
});

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.remove("dark-theme");
  body.classList.add("light-theme");
  toggleBtn.textContent = "🌙 Dark Mode";
} else {
  body.classList.remove("light-theme");
  body.classList.add("dark-theme");
  toggleBtn.textContent = "☀️ Light Mode";
}

// Toggle theme on button click
toggleBtn.addEventListener("click", () => {
  const isDark = body.classList.contains("dark-theme");

  if (isDark) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    toggleBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    toggleBtn.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  }
});

// Render tools after DOM loaded
window.addEventListener("DOMContentLoaded", () => {
  renderTools();
});
