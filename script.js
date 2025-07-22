const tools = [
  { name:"ChatGPT", description:"Multimodal conversational AI by OpenAI", type:"Free + Paid", link:"https://chat.openai.com" },
  { name:"Claude 4", description:"Advanced LLM from Anthropic", type:"Paid", link:"https://www.anthropic.com/claude" },
  { name:"Grok", description:"xAI’s AI assistant with image generation", type:"Free", link:"https://www.x.ai" },
  { name:"Gemini 2.5 Pro", description:"Google’s advanced multimodal model", type:"Free + Paid", link:"https://gemini.google.com" },
  { name:"Perplexity AI", description:"AI-powered search engine with citations", type:"Free + Paid", link:"https://www.perplexity.ai" },
  { name:"Midjourney", description:"Creative image generation AI", type:"Paid", link:"https://www.midjourney.com" },
  { name:"DALL·E 3", description:"OpenAI’s image generator", type:"Free + Paid", link:"https://labs.openai.com" },
  { name:"Descript", description:"AI video/audio editing", type:"Free + Paid", link:"https://www.descript.com" },
  { name:"Notion AI", description:"AI in Notion for notes & writing", type:"Paid", link:"https://www.notion.so" },
  { name:"Writesonic", description:"AI writing & copy", type:"Free + Paid", link:"https://writesonic.com" },
  { name:"Otter.ai", description:"Meeting transcription AI", type:"Free + Paid", link:"https://otter.ai" },
  { name:"Speechify", description:"Text‑to‑speech powered by AI", type:"Free + Paid", link:"https://www.speechify.com" },
  { name:"Copy.ai", description:"Marketing & blogging AI", type:"Free + Paid", link:"https://www.copy.ai" },
  { name:"Claude Opus 4", description:"High‑reasoning LLM from Anthropic", type:"Paid", link:"https://www.anthropic.com/claude" },
  { name:"Suno", description:"AI music generation", type:"Free + Paid", link:"https://www.suno.com" },
  { name:"Runway", description:"Creative video & image AI tools", type:"Free + Paid", link:"https://www.runwayml.com" },
  { name:"DeepL Translator", description:"Top translation AI", type:"Free + Paid", link:"https://www.deepl.com" },
  { name:"GrammarlyGO", description:"AI writing assistant", type:"Free + Paid", link:"https://www.grammarly.com" },
];

const container = document.getElementById("tools-container");
const searchInput = document.getElementById("search");

function renderTools(filter = "") {
  container.innerHTML = "";
  tools
    .filter(tool => tool.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(tool => {
      const card = document.createElement("div");
      card.className = "tool-card";
      card.innerHTML = `
        <h3>${tool.name}</h3>
        <p>${tool.description}</p>
        <p><strong>Type:</strong> ${tool.type}</p>
        <a href="${tool.link}" target="_blank">Visit Tool</a>
      `;
      container.appendChild(card);
    });
}
searchInput.addEventListener("input", e => renderTools(e.target.value));
renderTools();

// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const isLight = document.body.classList.contains("light-theme");
  toggleBtn.textContent = isLight ? "🌙 Dark Mode" : "☀️ Light Mode";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Chatbot logic
const chatBtn = document.getElementById("chatbot-button");
const chatWindow = document.getElementById("chatbot-window");
const closeChat = document.getElementById("close-chat");
const chatBody = document.getElementById("chat-body");
const chatInput = document.getElementById("chat-input");

chatBtn.addEventListener("click", () => chatWindow.classList.toggle("hidden"));
closeChat.addEventListener("click", () => chatWindow.classList.add("hidden"));

chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && chatInput.value.trim() !== "") {
    const userMsg = chatInput.value;
    chatBody.innerHTML += `<p><strong>You:</strong> ${userMsg}</p>`;
    chatInput.value = "";

    setTimeout(() => {
      chatBody.innerHTML += `<p><strong>Bot:</strong> I'm still learning! Search your tool above. 😊</p>`;
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 600);
  }
});

