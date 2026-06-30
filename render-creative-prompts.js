(function renderCreativePrompts() {
  const container = document.getElementById("creativePromptGrid");
  const countNode = document.getElementById("creativePromptCount");

  if (!container || !Array.isArray(window.creativePrompts)) return;

  container.innerHTML = window.creativePrompts
    .map(
      (item) => `
        <article class="prompt-card creative-card" data-category="${item.category}">
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
    countNode.textContent = window.creativePrompts.length.toString();
  }

  if (typeof window.syncPromptUI === "function") {
    window.syncPromptUI();
  }
})();
