document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reportForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const matchDate = document.getElementById("match-date").value;
        const email = document.getElementById("email").value.trim();
        const reason = document.getElementById("reason").value;
        const details = document.getElementById("details").value.trim();

        // Validasi: Cek apakah semua wajib diisi
        if (!username || !matchDate || !email || !reason || !details) {
            alert("Please fill out all required fields.");
            return;
        }

        // Validasi email: harus mengandung @ dan karakter setelahnya
        if (!email.includes("@") || email.endsWith("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        // Simulasi pengiriman data
        const reportData = {
            username,
            matchDate,
            email,
            reason,
            details
        };

        console.log("Report Sent:", reportData);

        form.reset();
        successMessage.style.display = "block";

        setTimeout(() => {
            successMessage.style.display = "none";
        }, 4000);
    });
});
