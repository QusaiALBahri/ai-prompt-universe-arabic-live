(function renderCuratedPrompts() {
  const container = document.getElementById("curatedPromptGrid");
  const countNode = document.getElementById("curatedPromptCount");

  if (!container || !Array.isArray(window.curatedPrompts)) return;

  const cards = window.curatedPrompts
    .map(
      (item) => `
        <article class="prompt-card curated-card" data-category="${item.category}">
          <div class="prompt-meta"><span>${item.category}</span><span>${item.tag}</span></div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <pre><code>${item.prompt.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>
          <button class="copy-btn">نسخ البرومت</button>
        </article>
      `
    )
    .join("");

  container.innerHTML = cards;

  if (countNode) {
    countNode.textContent = window.curatedPrompts.length.toString();
  }

  if (typeof window.syncPromptUI === "function") {
    window.syncPromptUI();
  }
})();
