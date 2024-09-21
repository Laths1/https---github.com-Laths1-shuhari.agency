(function(){
    emailjs.init("YOUR_USER_ID"); // Initialize EmailJS with your user ID
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    // Send the form data using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
      .then(function(response) {
        alert('Email sent successfully!');
      }, function(error) {
        alert('Failed to send email: ' + JSON.stringify(error));
      });
  });