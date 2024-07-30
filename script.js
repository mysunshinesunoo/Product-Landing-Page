document.addEventListener('DOMContentLoaded', function() {

    var modal = document.getElementById("login-form-container");
    var btn = document.querySelector("#right div a i.fa-user");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
      modal.style.display = "block";
    }

    span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    var descriptions = document.querySelectorAll(".description");

    function checkScroll() {
      descriptions.forEach(function(description) {
        var position = description.getBoundingClientRect();

        if (position.top >= 0 && position.bottom <= window.innerHeight) {
          description.classList.add("visible");
        } else {
          description.classList.remove("visible");
        }
      });
    }

    checkScroll();

    window.addEventListener("scroll", checkScroll);
  });
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var email = document.getElementById('email').value;
    localStorage.setItem('submittedEmail', email);

    window.location.href = 'login.html';
  });

document.getElementById('toggle-mode').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  var icon = document.querySelector('#toggle-mode i');
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

