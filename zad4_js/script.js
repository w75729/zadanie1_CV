// Numer indeksu: 75729 | Furkan Akgun

function zmienMotyw(kolor) {
    const link = document.getElementById('theme-link');
    if (link) { link.href = kolor + '.css'; }
}
function toggleSekcja() {
    const sekcja = document.getElementById('sekcja-projekty');
    if (sekcja) {
        if (sekcja.style.display === "none") {
            sekcja.style.display = "block";
        } else {
            sekcja.style.display = "none";
        }
    }
}
