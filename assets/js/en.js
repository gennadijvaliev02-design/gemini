// English-only copy for the existing local booking preview.
window.submitBooking = function (event) {
  event.preventDefault();
  const form = document.getElementById('bookingForm');
  const confirmation = document.getElementById('bookingConfirmation');
  const name = form.querySelector('input[type="text"]').value.trim();
  const treatment = document.getElementById('modalTreatmentSelect');
  const label = treatment.options[treatment.selectedIndex].textContent;
  confirmation.querySelector('p').textContent =
    `Thank you${name ? ', ' + name : ''}! You selected ${label}. ` +
    'This is a website concept: no appointment has been booked and no details have been sent.';
  form.classList.add('hidden');
  confirmation.classList.remove('hidden');
};

