let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
(function () {
  const form = document.querySelector('#sh');
  const checkboxes = form.querySelectorAll('input[type=radio]');
  const checkboxLength = checkboxes.length;
  const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

  function init() {
      if (firstCheckbox) {
          for (let i = 0; i < checkboxLength; i++) {
              checkboxes[i].addEventListener('change', checkValidity);
          }

          checkValidity();
      }
  }

  function isChecked() {
      for (let i = 0; i < checkboxLength; i++) {
          if (checkboxes[i].checked) return true;
      }

      return false;
  }

  function checkValidity() {
      const errorMessage = !isChecked() ? 'You must select one.' : '';
      firstCheckbox.setCustomValidity(errorMessage);
  }

  init();
})();
(function () {
  const form = document.querySelector('#sectionForm');
  const checkboxes = form.querySelectorAll('input[type=checkbox]');
  const checkboxLength = checkboxes.length;
  const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

  function init() {
      if (firstCheckbox) {
          for (let i = 0; i < checkboxLength; i++) {
              checkboxes[i].addEventListener('change', checkValidity);
          }

          checkValidity();
      }
  }

  function isChecked() {
      for (let i = 0; i < checkboxLength; i++) {
          if (checkboxes[i].checked) return true;
      }

      return false;
  }

  function checkValidity() {
      const errorMessage = !isChecked() ? 'At least one checkbox must be selected.' : '';
      firstCheckbox.setCustomValidity(errorMessage);
  }

  init();
})();
