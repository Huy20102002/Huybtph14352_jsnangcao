const Flexelement = document.getElementById("Flexelement");
const headerAdmin = document.getElementById("headerAdmin");
if (headerAdmin) {
    Flexelement.classList.add("flex");
} else {
    Flexelement.classList.remove("flex");
}