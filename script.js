const chips = [...document.querySelectorAll(".chip")];
const searchInput = document.getElementById("searchInput");

let activeFilter = "all";
let cards = [];

function refreshCards() {
  cards = [...document.querySelectorAll(".prompt-card")];
}

function updateCards() {
  refreshCards();
  const query = searchInput.value.trim().toLowerCase();

  cards.forEach((card) => {
    const category = card.dataset.category;
    const text = card.innerText.toLowerCase();
    const matchesFilter = activeFilter === "all" || category === activeFilter;
    const matchesQuery = !query || text.includes(query);
    card.classList.toggle("hidden", !(matchesFilter && matchesQuery));
  });
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
    activeFilter = chip.dataset.filter;
    updateCards();
  });
});

searchInput.addEventListener("input", updateCards);

function bindCopyButtons() {
  const copyButtons = [...document.querySelectorAll(".copy-btn")];

  copyButtons.forEach((button) => {
    if (button.dataset.bound === "true") return;
    button.dataset.bound = "true";

    button.addEventListener("click", async () => {
      const target = button.parentElement.querySelector("code");
      if (!target) return;

      await navigator.clipboard.writeText(target.innerText);
      const original = button.innerText;
      button.innerText = "تم النسخ";
      setTimeout(() => {
        button.innerText = original;
      }, 1600);
    });
  });
}

refreshCards();
bindCopyButtons();
