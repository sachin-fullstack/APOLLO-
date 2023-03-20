// Add event listener to the personal-info section
const personalInfo = document.querySelector('.personal-info');
personalInfo.addEventListener('click', function() {
  // Toggle the class to show/hide the personal information
  this.classList.toggle('show-info');
});

// Add event listener to the medical-history section
const medicalHistory = document.querySelector('.medical-history');
medicalHistory.addEventListener('click', function() {
  // Toggle the class to show/hide the medical history
  this.classList.toggle('show-info');
}); 