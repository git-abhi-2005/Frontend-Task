const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
        popup.style.display = "flex";
        popupImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
    if (e.target !== popupImg) popup.style.display = "none";
});
