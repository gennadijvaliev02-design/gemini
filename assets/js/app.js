// SAGE & SOMA - Interactive Client Script

document.addEventListener('DOMContentLoaded', () => {
  // Set default booking date to tomorrow
  const dateInput = document.getElementById('bookingDate');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    dateInput.value = `${yyyy}-${mm}-${dd}`;
    dateInput.min = `${yyyy}-${mm}-${dd}`;
  }

  // Header scroll appearance
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('shadow-sm', 'bg-cream-50/98');
      header.classList.remove('bg-cream-50/90');
    } else {
      header.classList.remove('shadow-sm', 'bg-cream-50/98');
      header.classList.add('bg-cream-50/90');
    }
  });
});

// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('hidden');
}

// Modal handling
function openBookingModal(treatmentName) {
  const modal = document.getElementById('bookingModal');
  const treatmentSelect = document.getElementById('modalTreatmentSelect');
  const form = document.getElementById('bookingForm');
  const confirmation = document.getElementById('bookingConfirmation');

  if (treatmentName && treatmentSelect) {
    // If option exists or partial match
    for (let i = 0; i < treatmentSelect.options.length; i++) {
      if (treatmentSelect.options[i].value.includes(treatmentName) || treatmentName.includes(treatmentSelect.options[i].value)) {
        treatmentSelect.selectedIndex = i;
        break;
      }
    }
  }

  form.classList.remove('hidden');
  confirmation.classList.add('hidden');
  modal.classList.remove('hidden');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  modal.classList.add('hidden');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  const modal = document.getElementById('bookingModal');
  if (e.target === modal) {
    closeBookingModal();
  }
});

// Form submission handler
function submitBooking(event) {
  event.preventDefault();
  const form = document.getElementById('bookingForm');
  const confirmation = document.getElementById('bookingConfirmation');
  const nameInput = form.querySelector('input[type="text"]');
  const treatmentSelect = document.getElementById('modalTreatmentSelect');
  const clientName = nameInput ? nameInput.value.trim() : '';

  const confirmMsg = confirmation.querySelector('p');
  if (confirmMsg && clientName) {
    const treatment = treatmentSelect ? treatmentSelect.value : 'соматический сеанс';
    confirmMsg.innerHTML = `Благодарим вас, <strong>${clientName}</strong>! Ваша заявка на <em>«${treatment}»</em> принята. Консьерж клиники SAGE & SOMA отправит подтверждение и рекомендации по подготовке в течение 10 минут.`;
  }

  form.classList.add('hidden');
  confirmation.classList.remove('hidden');
}

// Newsletter handler
function handleNewsletter(event) {
  event.preventDefault();
  const successMsg = document.getElementById('newsletterSuccess');
  if (successMsg) {
    successMsg.classList.remove('hidden');
    event.target.reset();
    setTimeout(() => {
      successMsg.classList.add('hidden');
    }, 5000);
  }
}

// FAQ Accordion
function toggleAccordion(index) {
  const content = document.getElementById(`faq-content-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);

  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    icon.textContent = '−';
  } else {
    content.classList.add('hidden');
    icon.textContent = '+';
  }
}
