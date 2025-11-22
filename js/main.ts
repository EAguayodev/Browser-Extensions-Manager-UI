// toggle testing for background color theme changes manually & by system
const themeToggleButton = document.querySelector('.btn-theme-toggle');
const iconSun = document.querySelector('.icon-sun');
const iconMoon = document.querySelector('.icon-moon');
themeToggleButton?.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    iconSun?.classList.toggle('show');
    iconMoon?.classList.toggle('show');
});
// testing for filtering cards between active and inactive
const filterAll = document.querySelector('.filter-all');
const filterActiveButton = document.querySelector('.filter-active');
const filterInactiveButton = document.querySelector('.filter-inactive');
const extensionCards = document.querySelectorAll('.extension-list-card');
filterAll?.addEventListener('click', () => {
    extensionCards.forEach(card => {
        card.classList.remove('hidden');
    });
});
filterActiveButton?.addEventListener('click', () => {
    extensionCards.forEach(card => {
          const toggle = card.querySelector(".toggle-checkbox") as HTMLInputElement;
          if (toggle.checked) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
    });
});
filterInactiveButton?.addEventListener('click', () => {
    extensionCards.forEach(card => {
        const toggle = card.querySelector(".toggle-checkbox") as HTMLInputElement;
        if (!toggle.checked) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
    });
});

setupRemoveButtons();
function setupRemoveButtons() {
    const removeButtons = document.querySelectorAll('.btn-remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.extension-list-card');
            card?.remove();
        });
    });
}
