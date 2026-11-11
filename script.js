
// ==============================
// MOON CAFE - JAVASCRIPT
// ==============================

document.addEventListener("DOMContentLoaded", function () {

    // Create Back To Top Button
    const topButton = document.createElement("button");

    topButton.textContent = "↑ กลับด้านบน";
    topButton.setAttribute("aria-label", "กลับไปด้านบน");

    Object.assign(topButton.style, {
        position: "fixed",
        bottom: "25px",
        right: "20px",
        padding: "12px 20px",
        border: "none",
        borderRadius: "30px",
        background: "#c49a6c",
        color: "#251a16",
        fontSize: "14px",
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        zIndex: "999",
        display: "none"
    });

    document.body.appendChild(topButton);

    // Show button when scrolling
    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }

    }, { passive: true });

    // Scroll to top
    topButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    console.log("MOON CAFE JavaScript Ready!");

});
