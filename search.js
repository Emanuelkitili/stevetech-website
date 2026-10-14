function searchServices() {
    let input = document.getElementById('searchInput');
    if (!input) return;
    let filter = input.value.toLowerCase();
    let cards = document.querySelectorAll('.card, .mini-item, .detail-section, .sidebar-widget');

    cards.forEach(el => {
        // Don't hide sidebar widgets when searching? Only hide cards for clean look
        if (el.classList.contains('card') || el.classList.contains('mini-item')) {
            let text = el.innerText.toLowerCase();
            el.style.display = text.includes(filter) ? "" : "none";
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    let box = document.getElementById('searchInput');
    if (box) {
        box.addEventListener('input', searchServices);
        box.addEventListener('keyup', searchServices);
    }
    let dateEl = document.getElementById('currentDate');
    if (dateEl) {
        dateEl.innerText = new Date().toDateString() + " | Kitui Based - Countrywide";
    }
});

function toggleMenu() {
    let nav = document.getElementById('navbar');
    if (nav) nav.classList.toggle('active');
}