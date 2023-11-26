<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Keegan's Website</title>
    <link rel="stylesheet" href="css/style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
  </head>
  <body>

    <header id="header" class="container-fluid gx-0">
      <div class="row gx-0 d-block">
        <div class="col-md-12 d-block">
          <?php include 'views/header.php' ?>
        </div>
      </div>
    </header>
    <div class="container-fluid gx-0 navbar__wrapper">
      <div id="navbar-sticky" class="navbar-sticky">
        <div class="row gx-0">
          <div class="col-md-8 mx-auto">
            <div class="navbar">
              <ul class="navbar__list">
                <li><a class="navbar__item home active" href="#">Home</a></li>
                <li><a class="navbar__item about" href="#about">About</a></li>
                <li><a class="navbar__item portfolio" href="#portfolio">Portfolio</a></li>
                <li><a class="navbar__item contact" href="#contact">Contact</a></li>
              </ul>
              <div id="sticky-hamburger" class="hamburger">
                <div class="hamburger__flex">
                  <div class="hamburger__slice"></div>
                  <div class="hamburger__slice"></div>
                  <div class="hamburger__slice"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="navbar" class="container-fluid gx-0">
      <div class="row gx-0">
        <div class="col-md-8 mx-auto">
          <?php include 'views/navbar.php' ?>
        </div>
      </div>
    </section>
    <section id="about" class="container-fluid gx-0">
      <div class="row gx-0">
        <div class="col-md-7 mx-auto">
          <?php include 'views/about.php' ?>
        </div>
      </div>
    </section>
    <section id="portfolio" class="container-fluid gx-0">
      <div class="row gx-0">
        <div class="col-md-8 mx-auto">
          <?php include 'views/portfolio.php' ?>
        </div>
      </div>
    </section>
    <section id="contact" class="container-fluid gx-0">
      <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
        <path d="M0 0 L50 100 L100 0 Z" fill="rgb(240, 240, 240)" stroke="rgb(240, 240, 240)"></path>
      </svg>
      <div class="row gx-0">
        <div class="col-md-8 mx-auto">
          <?php include 'views/contact.php' ?>
        </div>
      </div>
    </section>
    <footer id="footer" class="container-fluid gx-0">
      <div class="row gx-0">
        <div class="col-md-8 mx-auto">
          <?php include 'views/footer.php' ?>
        </div>
      </div>
    </footer>
    <script src="https://kit.fontawesome.com/93648c7e36.js" crossorigin="anonymous"></script>
    <script src="js/p5.min.js"></script>
    <script src="js/header.js"></script>
    <script src="js/navbar.js"></script>
    <script src="js/about.js"></script>
    <script src="js/portfolio.js"></script>
    <script src="js/main.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js"></script>
    <script>


       const constraints = {
           name: {
               presence: { allowEmpty: false }
           },
           email: {
               presence: { allowEmpty: false },
               email: true
           },
           message: {
               presence: { allowEmpty: false }
           }
       };

       const form = document.getElementById('contact-form');
       form.addEventListener('submit', function (event) {

           const formValues = {
               name: form.elements.name.value,
               email: form.elements.email.value,
               message: form.elements.message.value
           };


           const errors = validate(formValues, constraints);
           if (errors) {
               event.preventDefault();
               const errorMessage = Object
                   .values(errors)
                   .map(function (fieldValues) {
                       return fieldValues.join(', ')
                   })
                   .join("\n");

               alert(errorMessage);
           }
       }, false);
    </script>

  </body>
</html>

