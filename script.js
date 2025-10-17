const btn = document.getElementById("detaliiBtn");
const detalii = document.getElementById("detalii");

btn.addEventListener("click", () => {
    detalii.classList.toggle("show");
});
