document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("bookingForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const message = document.getElementById("message").value;

    // Show success message
    successMessage.style.display = "block";

    // Optional: clear the form
    form.reset();

    // Option 1 — open WhatsApp with prefilled message
    const whatsappMessage = `Hello ASAP Tech, I would like to book a project:
    \nName: ${name}
    \nEmail: ${email}
    \nPhone: ${phone}
    \nService: ${service}
    \nDate: ${date}
    \nDetails: ${message}`;

    // Change the number below to your WhatsApp number
    const phoneNumber = "2349036828872"; // e.g. Nigeria format
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Automatically open WhatsApp after submission
    window.open(url, "_blank");
  });
});