document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reportForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const reason = document.getElementById("reason").value;
        const details = document.getElementById("details").value.trim();

        if (username === "" || reason === "" || details === "") {
            alert("Please fill out all fields.");
            return;
        }

        // Simulasi kirim (nanti bisa dihubungkan ke backend)
        console.log("Report Sent:", { username, reason, details });

        form.reset();
        successMessage.style.display = "block";

        setTimeout(() => {
            successMessage.style.display = "none";
        }, 4000);
    });
});
