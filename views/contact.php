<div class="container section contact">
    <div class="row mx-auto">
        <div class="col-12">
            <h2 class="section__header">CONTACT</h2>
        </div>
    </div>
    <div class="row mx-auto">
        <div class="col-12">
            <div class="section__underline"></div>
        </div>
    </div>
    <div class="row mx-auto">
        <div class="col-12">
            <h5 class="contact__note">Have a question or want to work together?</h5>
        </div>
    </div>
    <div class="row mx-auto">
        <div class="col-12">
            <div class="contact__form-container">
                <form id="contact-form" action="contact-controls.php" method="post" class="contact__form">
                    <?php echo((!empty($errorMessage)) ? $errorMessage : '') ?>
                    <input type="text" placeholder="Name" name="name" id="name">
                    <input type="text" placeholder="Email" name="email" id="email">
                    <textarea name="message" placeholder="Message" id="message" cols="20" rows="10"></textarea>
                    <input type="submit" value="SUBMIT" class="btn btn-primary contact__form-button">
                </form>
            </div>
        </div>
    </div>
</div>