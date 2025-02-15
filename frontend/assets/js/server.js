
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-left");

    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      let formData = {
        name: form.querySelector('input[name="name"]').value,
        phone: form.querySelector('input[name="phone"]').value,
        person: form.querySelector('select[name="person"]').value,
        date: form.querySelector('input[name="reservation-date"]').value,
        time: form.querySelector('select[name="time"]').value,
        message: form.querySelector('textarea[name="message"]').value
      };

      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      alert(result.message);

      if (response.ok) {
        form.reset(); // Clears all input fields and textarea after successful submission
      }
    });
  });
