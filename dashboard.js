const toggleBtn = document.getElementById("toggleMode");
const body = document.body;

const tools = [
  { name: "ChatGPT", type: "free", link: "https://chat.openai.com/" },
  { name: "Image Generator", type: "paid", link: "https://www.bing.com/images/create/" },
  { name: "Code Debugger", type: "free", link: "https://python.tutor.com/" },
  { name: "Text Summarizer", type: "paid", link: "https://smmry.com/" },
  { name: "Grammarly", type: "free", link: "https://www.grammarly.com/" },
  { name: "Notion AI", type: "paid", link: "https://www.notion.so/product/ai" },
  { name: "Copy.ai", type: "paid", link: "https://www.copy.ai/" },
  { name: "Canva AI", type: "free", link: "https://www.canva.com/ai/" },
  { name: "Jasper AI", type: "paid", link: "https://www.jasper.ai/" },
  { name: "Writesonic", type: "free", link: "https://writesonic.com/" },
  { name: "Scalenut", type: "paid", link: "https://www.scalenut.com/" },
  { name: "Google Bard", type: "free", link: "https://bard.google.com/" },
  { name: "Pictory", type: "paid", link: "https://pictory.ai/" },
  { name: "Synthesia", type: "paid", link: "https://www.synthesia.io/" },
  { name: "Durable AI Website Builder", type: "free", link: "https://durable.co/" },
  { name: "Beautiful.ai", type: "paid", link: "https://www.beautiful.ai/" },
  { name: "Looka Logo Maker", type: "paid", link: "https://looka.com/" },
  { name: "Zapier", type: "free", link: "https://zapier.com/" },
  { name: "SlidesAI", type: "free", link: "https://www.slidesai.io/" },
  { name: "AI Dungeon", type: "free", link: "https://play.aidungeon.io/" },
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
