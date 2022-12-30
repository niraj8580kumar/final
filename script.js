document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      document.querySelector(event.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  function showSuccessAlert() {
    // get the values of the form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // check if all fields are filled
    if (name !== "" && email !== "" && message !== "") {
      // show the success alert
      document.getElementById("successAlert").style.display = "block";
    }
  }