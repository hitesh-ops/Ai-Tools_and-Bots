const toggleBtn = document.getElementById("toggleMode");
const body = document.body;
const searchInput = document.getElementById("searchInput");
const filterType = document.getElementById("filterType");

// Tool list with category
const tools = [
  { name: "AI Tutor Bot", type: "free", category: "education", link: "https://tutorai.com" },
  { name: "MCQ Generator", type: "free", category: "education", link: "https://mcqgen.com" },
  { name: "ChatGPT", type: "free", category: "content", link: "https://chat.openai.com" },
  { name: "Copy.ai", type: "paid", category: "content", link: "https://www.copy.ai/" },
  { name: "Grammarly", type: "free", category: "content", link: "https://grammarly.com" },
  { name: "Canva AI", type: "free", category: "image", link: "https://www.canva.com" },
  { name: "Remove.bg", type: "free", category: "image", link: "https://remove.bg" },
  { name: "Midjourney", type: "paid", category: "image", link: "https://www.midjourney.com" },
  { name: "Runway", type: "paid", category: "video", link: "https://runwayml.com" },
  { name: "Descript", type: "free", category: "video", link: "https://descript.com" },
  { name: "Play.ht", type: "free", category: "video", link: "https://play.ht" },
  { name: "Code Debugger", type: "free", category: "dev", link: "https://python.tutor.com" },
  { name: "Regex Generator", type: "free", category: "dev", link: "https://regex101.com" },
  { name: "Zapier", type: "free", category: "business", link: "https://zapier.com" },
  { name: "Beautiful.ai", type: "paid", category: "business", link: "https://www.beautiful.ai/" },
  { name: "SlidesAI", type: "free", category: "business", link: "https://slidesai.io" }
];

// Render tools by category
function renderTools(filter = "all", search = "") {
  const categories = {
    education: document.getElementById("educationTools"),
    content: document.getElementById("contentTools"),
    image: document.getElementById("imageTools"),
    video: document.getElementById("videoTools"),
    dev: document.getElementById("devTools"),
    business: document.getElementById("businessTools")
  };

  for (let key in categories) {
    categories[key].innerHTML = "";
  }

  tools
    .filter(tool =>
      (filter === "all" || tool.type === filter) &&
      tool.name.toLowerCase().includes(search.toLowerCase())
    )
    .forEach(tool => {
      const card = document.createElement("div");
      card.className = "tool-card";
      card.innerHTML = `
        <h3>${tool.name}</h3>
        <a href="${tool.link}" target="_blank" class="tool-btn">Try Now</a>
        <span class="badge ${tool.type}">${tool.type.toUpperCase()}</span>
      `;
      categories[tool.category].appendChild(card);
    });
}

searchInput.addEventListener("input", () => {
  renderTools(filterType.value, searchInput.value);
});
filterType.addEventListener("change", () => {
  renderTools(filterType.value, searchInput.value);
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "login.html";
});

document.getElementById("homeBtn").addEventListener("click", () => {
  window.location.href = "index.html";
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  body.classList.add("light-theme");
  body.classList.remove("dark-theme");
  toggleBtn.textContent = "🌙 Dark Mode";
} else {
  body.classList.add("dark-theme");
  body.classList.remove("light-theme");
  toggleBtn.textContent = "☀️ Light Mode";
}

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

window.addEventListener("DOMContentLoaded", () => {
  renderTools();
});
