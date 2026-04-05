function showModal(event) {
  event.preventDefault();

  // Change message dynamically
  document.getElementById("modalMessage").innerText =
    "Your appointment has been booked. Our team will contact you soon.";

  // Show modal
  document.getElementById("modal").style.display = "flex";

  // Reset form
  event.target.reset();
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}