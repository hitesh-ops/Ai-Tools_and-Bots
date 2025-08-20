const toggleBtn = document.getElementById("toggleMode");
const body = document.body;

// Comprehensive AI Tools List with Links
const tools = [
  // Conversational AI & Chatbots
  { name: "ChatGPT", type: "freemium", category: "conversational", link: "https://chat.openai.com" },
  { name: "Claude", type: "freemium", category: "conversational", link: "https://claude.ai" },
  { name: "Google Gemini", type: "free", category: "conversational", link: "https://gemini.google.com" },
  { name: "Microsoft Copilot", type: "free", category: "conversational", link: "https://copilot.microsoft.com" },
  { name: "Perplexity AI", type: "freemium", category: "conversational", link: "https://perplexity.ai" },
  { name: "Character.AI", type: "freemium", category: "conversational", link: "https://character.ai" },
  { name: "Replika", type: "freemium", category: "conversational", link: "https://replika.com" },
  { name: "YouChat", type: "free", category: "conversational", link: "https://you.com" },
  { name: "Poe", type: "freemium", category: "conversational", link: "https://poe.com" },
  { name: "HuggingChat", type: "free", category: "conversational", link: "https://huggingface.co/chat" },

  // Content Writing & Copywriting
  { name: "Jasper", type: "paid", category: "writing", link: "https://jasper.ai" },
  { name: "Copy.ai", type: "freemium", category: "writing", link: "https://copy.ai" },
  { name: "Writesonic", type: "freemium", category: "writing", link: "https://writesonic.com" },
  { name: "Rytr", type: "freemium", category: "writing", link: "https://rytr.me" },
  { name: "Grammarly", type: "freemium", category: "writing", link: "https://grammarly.com" },
  { name: "QuillBot", type: "freemium", category: "writing", link: "https://quillbot.com" },
  { name: "Notion AI", type: "paid", category: "writing", link: "https://notion.so/product/ai" },
  { name: "Wordtune", type: "freemium", category: "writing", link: "https://wordtune.com" },
  { name: "ContentBot", type: "paid", category: "writing", link: "https://contentbot.ai" },
  { name: "Article Forge", type: "paid", category: "writing", link: "https://articleforge.com" },

  // Image Generation & Art
  { name: "DALL-E 3", type: "paid", category: "image", link: "https://openai.com/dall-e-3" },
  { name: "Midjourney", type: "paid", category: "image", link: "https://midjourney.com" },
  { name: "Stable Diffusion", type: "free", category: "image", link: "https://stablediffusionweb.com" },
  { name: "Leonardo AI", type: "freemium", category: "image", link: "https://leonardo.ai" },
  { name: "Adobe Firefly", type: "freemium", category: "image", link: "https://firefly.adobe.com" },
  { name: "Artbreeder", type: "freemium", category: "image", link: "https://artbreeder.com" },
  { name: "NightCafe", type: "freemium", category: "image", link: "https://nightcafe.studio" },
  { name: "Runway ML", type: "freemium", category: "image", link: "https://runwayml.com" },
  { name: "Craiyon", type: "free", category: "image", link: "https://craiyon.com" },
  { name: "BlueWillow", type: "free", category: "image", link: "https://bluewillow.ai" },
  { name: "Lexica", type: "freemium", category: "image", link: "https://lexica.art" },
  { name: "DreamStudio", type: "paid", category: "image", link: "https://dreamstudio.ai" },

  // Video Creation & Editing
  { name: "Synthesia", type: "paid", category: "video", link: "https://synthesia.io" },
  { name: "Pictory", type: "freemium", category: "video", link: "https://pictory.ai" },
  { name: "Loom AI", type: "freemium", category: "video", link: "https://loom.com" },
  { name: "Descript", type: "freemium", category: "video", link: "https://descript.com" },
  { name: "InVideo", type: "freemium", category: "video", link: "https://invideo.io" },
  { name: "FlexClip", type: "freemium", category: "video", link: "https://flexclip.com" },
  { name: "Kapwing", type: "freemium", category: "video", link: "https://kapwing.com" },
  { name: "Steve AI", type: "paid", category: "video", link: "https://steve.ai" },
  { name: "Hour One", type: "paid", category: "video", link: "https://hourone.ai" },
  { name: "Elai", type: "paid", category: "video", link: "https://elai.io" },

  // Music & Audio
  { name: "Mubert", type: "freemium", category: "audio", link: "https://mubert.com" },
  { name: "AIVA", type: "freemium", category: "audio", link: "https://aiva.ai" },
  { name: "Boomy", type: "freemium", category: "audio", link: "https://boomy.com" },
  { name: "Soundraw", type: "freemium", category: "audio", link: "https://soundraw.io" },
  { name: "Endel", type: "freemium", category: "audio", link: "https://endel.io" },
  { name: "Brain.fm", type: "freemium", category: "audio", link: "https://brain.fm" },
  { name: "Lalal.ai", type: "freemium", category: "audio", link: "https://lalal.ai" },
  { name: "Krisp", type: "freemium", category: "audio", link: "https://krisp.ai" },
  { name: "Otter.ai", type: "freemium", category: "audio", link: "https://otter.ai" },
  { name: "Beatoven.ai", type: "freemium", category: "audio", link: "https://beatoven.ai" },

  // Business & Productivity
  { name: "Zapier", type: "freemium", category: "productivity", link: "https://zapier.com" },
  { name: "Monday.com", type: "paid", category: "productivity", link: "https://monday.com" },
  { name: "Calendly", type: "freemium", category: "productivity", link: "https://calendly.com" },
  { name: "HubSpot", type: "freemium", category: "productivity", link: "https://hubspot.com" },
  { name: "Salesforce Einstein", type: "paid", category: "productivity", link: "https://salesforce.com/products/einstein" },
  { name: "Intercom", type: "paid", category: "productivity", link: "https://intercom.com" },
  { name: "Zendesk", type: "paid", category: "productivity", link: "https://zendesk.com" },
  { name: "Asana", type: "freemium", category: "productivity", link: "https://asana.com" },
  { name: "ClickUp", type: "freemium", category: "productivity", link: "https://clickup.com" },
  { name: "Todoist", type: "freemium", category: "productivity", link: "https://todoist.com" },

  // E-commerce & Marketing
  { name: "AdCreative.ai", type: "freemium", category: "marketing", link: "https://adcreative.ai" },
  { name: "Persado", type: "paid", category: "marketing", link: "https://persado.com" },
  { name: "Phrasee", type: "paid", category: "marketing", link: "https://phrasee.co" },
  { name: "Optimizely", type: "paid", category: "marketing", link: "https://optimizely.com" },
  { name: "Dynamic Yield", type: "paid", category: "marketing", link: "https://dynamicyield.com" },
  { name: "Yotpo", type: "paid", category: "marketing", link: "https://yotpo.com" },
  { name: "Klenty", type: "paid", category: "marketing", link: "https://klenty.com" },
  { name: "Outreach", type: "paid", category: "marketing", link: "https://outreach.io" },
  { name: "Gong", type: "paid", category: "marketing", link: "https://gong.io" },
  { name: "Conversica", type: "paid", category: "marketing", link: "https://conversica.com" },

  // Research & Data Analysis
  { name: "Tableau", type: "paid", category: "research", link: "https://tableau.com" },
  { name: "DataRobot", type: "paid", category: "research", link: "https://datarobot.com" },
  { name: "H2O.ai", type: "freemium", category: "research", link: "https://h2o.ai" },
  { name: "Alteryx", type: "paid", category: "research", link: "https://alteryx.com" },
  { name: "Qlik Sense", type: "paid", category: "research", link: "https://qlik.com" },
  { name: "Semantic Scholar", type: "free", category: "research", link: "https://semanticscholar.org" },
  { name: "Elicit", type: "freemium", category: "research", link: "https://elicit.org" },
  { name: "SciSpace", type: "freemium", category: "research", link: "https://scispace.com" },
  { name: "Connected Papers", type: "freemium", category: "research", link: "https://connectedpapers.com" },
  { name: "Consensus", type: "freemium", category: "research", link: "https://consensus.app" },

  // Education & Learning
  { name: "Khan Academy", type: "free", category: "education", link: "https://khanacademy.org" },
  { name: "Duolingo", type: "freemium", category: "education", link: "https://duolingo.com" },
  { name: "Coursera", type: "freemium", category: "education", link: "https://coursera.org" },
  { name: "Socratic", type: "free", category: "education", link: "https://socratic.org" },
  { name: "Gradescope", type: "paid", category: "education", link: "https://gradescope.com" },
  { name: "Carnegie Learning", type: "paid", category: "education", link: "https://carnegielearning.com" },
  { name: "Century Tech", type: "paid", category: "education", link: "https://century.tech" },
  { name: "Cognii", type: "paid", category: "education", link: "https://cognii.com" },
  { name: "Woebot", type: "freemium", category: "education", link: "https://woebot.io" },
  { name: "Photomath", type: "freemium", category: "education", link: "https://photomath.com" },

  // Development & Programming
  { name: "GitHub Copilot", type: "paid", category: "development", link: "https://github.com/features/copilot" },
  { name: "Tabnine", type: "freemium", category: "development", link: "https://tabnine.com" },
  { name: "Replit", type: "freemium", category: "development", link: "https://replit.com" },
  { name: "CodeT5", type: "free", category: "development", link: "https://huggingface.co/Salesforce/codet5-base" },
  { name: "Amazon CodeWhisperer", type: "freemium", category: "development", link: "https://aws.amazon.com/codewhisperer" },
  { name: "Sourcegraph", type: "freemium", category: "development", link: "https://sourcegraph.com" },
  { name: "Snyk", type: "freemium", category: "development", link: "https://snyk.io" },
  { name: "DeepCode", type: "free", category: "development", link: "https://snyk.io/platform/deepcode-ai" },
  { name: "Blackbox AI", type: "freemium", category: "development", link: "https://blackbox.ai" },
  { name: "Codeium", type: "freemium", category: "development", link: "https://codeium.com" },

  // Translation & Language
  { name: "Google Translate", type: "free", category: "translation", link: "https://translate.google.com" },
  { name: "DeepL", type: "freemium", category: "translation", link: "https://deepl.com" },
  { name: "Microsoft Translator", type: "free", category: "translation", link: "https://translator.microsoft.com" },
  { name: "iTranslate", type: "freemium", category: "translation", link: "https://itranslate.com" },
  { name: "Reverso", type: "freemium", category: "translation", link: "https://reverso.net" },
  { name: "Linguee", type: "free", category: "translation", link: "https://linguee.com" },
  { name: "SDL Trados", type: "paid", category: "translation", link: "https://trados.com" },
  { name: "Unbabel", type: "paid", category: "translation", link: "https://unbabel.com" },
  { name: "ModernMT", type: "freemium", category: "translation", link: "https://modernmt.com" },
  { name: "Papago", type: "free", category: "translation", link: "https://papago.naver.com" },

  // Mobile & Apps
  { name: "FaceApp", type: "freemium", category: "mobile", link: "https://faceapp.com" },
  { name: "Prisma", type: "freemium", category: "mobile", link: "https://prisma-ai.com" },
  { name: "Snapchat", type: "free", category: "mobile", link: "https://snapchat.com" },
  { name: "Instagram", type: "free", category: "mobile", link: "https://instagram.com" },
  { name: "TikTok", type: "free", category: "mobile", link: "https://tiktok.com" },
  { name: "Shazam", type: "freemium", category: "mobile", link: "https://shazam.com" },
  { name: "Google Lens", type: "free", category: "mobile", link: "https://lens.google.com" },
  { name: "VSCO", type: "freemium", category: "mobile", link: "https://vsco.co" },
  { name: "Canva", type: "freemium", category: "mobile", link: "https://canva.com" },
  { name: "Lightroom", type: "freemium", category: "mobile", link: "https://lightroom.adobe.com" }
];

 searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    toolCards.forEach((card, index) => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      if (title.includes(query)) {
        card.style.display = "block";
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
          card.style.transition = "all 0.4s ease";
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, index * 80); // staggered reveal
      } else {
        card.style.transition = "all 0.3s ease";
        card.style.opacity = "0";
        setTimeout(() => (card.style.display = "none"), 300);
      }
    });
  });

  // ---- Tool Card Hover Animation ----
  toolCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transition = "all 0.3s ease";
      card.style.transform = "scale(1.05) rotate(1deg)";
      card.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.4)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1) rotate(0)";
      card.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.2)";
    });
  });

  // ---- Tool Open Animation ----
  toolCards.forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.querySelector("h3").textContent;
      const description = card.getAttribute("data-description") || "No details available.";

      toolTitle.textContent = title;
      toolDescription.textContent = description;

      toolDetails.classList.remove("hidden");
      toolDetails.style.opacity = "0";
      toolDetails.style.transform = "scale(0.9) translateY(20px)";

      setTimeout(() => {
        toolDetails.style.transition = "all 0.4s ease";
        toolDetails.style.opacity = "1";
        toolDetails.style.transform = "scale(1) translateY(0)";
      }, 50);
    });
  });

  // ---- Close Details Animation ----
  closeDetailsBtn.addEventListener("click", () => {
    toolDetails.style.transition = "all 0.3s ease";
    toolDetails.style.opacity = "0";
    toolDetails.style.transform = "scale(0.9) translateY(20px)";
    setTimeout(() => {
      toolDetails.classList.add("hidden");
    }, 300);
  });

  // ---- Typing Animation for Header (Optional) ----
  const header = document.querySelector(".dashboard-header h1");
  if (header) {
    const text = header.textContent;
    header.textContent = "";
    let i = 0;
    const typing = setInterval(() => {
      header.textContent += text[i];
      i++;
      if (i === text.length) clearInterval(typing);
    }, 100);
  }

  // ---- Card Entry Animation on Load ----
  toolCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
      card.style.transition = "all 0.5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 120);
  });
});
