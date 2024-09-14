document.getElementById('newsletterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMessage.style.display = 'block';
    } else {
      errorMessage.style.display = 'none';
      alert('Subscription Successful!');
    }
  });