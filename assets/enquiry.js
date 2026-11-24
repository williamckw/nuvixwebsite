const enquiryForm = document.querySelector('#project-enquiry');

enquiryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const fields = new FormData(enquiryForm);
  const service = fields.get('service');
  const subject = encodeURIComponent(`Nuvix enquiry for ${service}`);
  const body = encodeURIComponent([
    `Business: ${fields.get('company')}`,
    `Email: ${fields.get('email')}`,
    `Service: ${service}`,
    '',
    String(fields.get('requirements')),
  ].join('\r\n'));
  document.querySelector('#enquiry-status').textContent =
    'Send the draft from your email app. If it did not open, email nuvixent@gmail.com directly.';
  window.location.href = `mailto:nuvixent@gmail.com?subject=${subject}&body=${body}`;
});
