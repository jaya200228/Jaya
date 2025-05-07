// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Simple form validation and simulated submission
const form = document.getElementById('contact-form');
const nameInput = form.name;
const emailInput = form.email;
const messageInput = form.message;

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const formSuccess = document.getElementById('form-success');

function validateEmail(email) {
  // simple regex for email validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let valid = true;

  // Reset error messages
  nameError.classList.add('hidden');
  emailError.classList.add('hidden');
  messageError.classList.add('hidden');
  formSuccess.classList.add('hidden');

  if (!nameInput.value.trim()) {
    nameError.classList.remove('hidden');
    valid = false;
  }

  if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
    emailError.classList.remove('hidden');
    valid = false;
  }

  if (!messageInput.value.trim()) {
    messageError.classList.remove('hidden');
    valid = false;
  }

  if (!valid) return;

  // Simulate form submission success
  formSuccess.classList.remove('hidden');
  form.reset();
});
