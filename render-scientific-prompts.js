(function renderScientificPrompts() {
  const container = document.getElementById("scientificPromptGrid");
  const countNode = document.getElementById("scientificPromptCount");

  if (!container || !Array.isArray(window.scientificPrompts)) return;

  container.innerHTML = window.scientificPrompts
    .map(
      (item) => `
        <article class="prompt-card scientific-card" data-category="${item.category}">
          <div class="prompt-meta"><span>${item.category}</span><span>${item.tag}</span></div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <pre><code>${item.prompt.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
          <button class="copy-btn">نسخ البرومت</button>
        </article>
      `
    )
    .join("");

  if (countNode) {
    countNode.textContent = window.scientificPrompts.length.toString();
  }

  if (typeof window.syncPromptUI === "function") {
    window.syncPromptUI();
  }
})();
