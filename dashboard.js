const toolData = {
  "Educational Tools": [
    {
      name: "TutorAI",
      desc: "Learn anything instantly using AI.",
      type: "free",
      link: "#"
    },
    {
      name: "StudyMonkey",
      desc: "Generate notes and answers fast.",
      type: "paid",
      link: "#"
    }
  ],
  "Content & Writing Tools": [
    {
      name: "Copy.ai",
      desc: "Write better marketing copy with AI.",
      type: "free",
      link: "#"
    },
    {
      name: "Jasper",
      desc: "Advanced AI writing assistant.",
      type: "paid",
      link: "#"
    }
  ],
  "Image & Design Tools": [
    {
      name: "Canva AI",
      desc: "Create designs powered by AI.",
      type: "free",
      link: "#"
    },
    {
      name: "Midjourney",
      desc: "Generate AI art with prompts.",
      type: "paid",
      link: "#"
    }
  ],
  "Video & Audio Tools": [
    {
      name: "Runway ML",
      desc: "AI tools for video editing.",
      type: "paid",
      link: "#"
    },
    {
      name: "Lumen5",
      desc: "Turn text to video easily.",
      type: "free",
      link: "#"
    }
  ],
  "Developer Tools": [
    {
      name: "GitHub Copilot",
      desc: "AI pair programmer for coding.",
      type: "paid",
      link: "#"
    },
    {
      name: "Codeium",
      desc: "Free AI autocomplete tool.",
      type: "free",
      link: "#"
    }
  ],
  "Business & Marketing Tools": [
    {
      name: "Pictory",
      desc: "Turn blogs into videos.",
      type: "paid",
      link: "#"
    },
    {
      name: "Ocoya",
      desc: "AI social media management.",
      type: "free",
      link: "#"
    }
  ]
};

const container = document.getElementById("toolSections");

function renderTools(filter = "all", search = "") {
  container.innerHTML = "";
  for (let category in toolData) {
    const tools = toolData[category]
      .filter(t => (filter === "all" || t.type === filter) && t.name.toLowerCase().includes(search.toLowerCase()));
    
    if (tools.length === 0) continue;

    const section = document.createElement("section");
    const title = document.createElement("h2");
    title.textContent = category;
    section.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "tools-grid";

    tools.forEach(tool => {
      const card = document.createElement("div");
      card.className = "tool-card";
      card.innerHTML = `
        <h3>${tool.name}</h3>
        <div class="type">(${tool.type.toUpperCase()})</div>
        <p>${tool.desc}</p>
        <button onclick="window.open('${tool.link}', '_blank')">Try Now</button>
      `;
      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  }
}

document.getElementById("searchInput").addEventListener("input", () => {
  const s = document.getElementById("searchInput").value;
  const f = document.getElementById("filterType").value;
  renderTools(f, s);
});

document.getElementById("filterType").addEventListener("change", () => {
  const s = document.getElementById("searchInput").value;
  const f = document.getElementById("filterType").value;
  renderTools(f, s);
});

document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const btn = document.getElementById("toggleMode");
  btn.textContent = document.body.classList.contains("dark-theme") ? "🌙 Dark" : "☀️ Light";
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn");
  location.href = "index.html";
});

renderTools();
