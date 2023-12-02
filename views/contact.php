<div class="container section contact">
    <div class="row mx-auto">
        <div class="col-12">
            <h2 class="section__header contact start">CONTACT</h2>
        </div>
    </div>
    <div class="row mx-auto">
        <div class="col-12">
            <div class="section__underline contact start"></div>
        </div>
    </div>
    <div class="row mx-auto">
        <div class="col-12">
            <h5 class="contact__note start">Have a question or want to work together?</h5>
        </div>
    </div>
    <div class="row mx-auto">
        <div class="col-12">
            <div class="contact__form-container">
                <form id="contact-form" action="contact-controls.php" method="post" class="contact__form">
                    <?php echo((!empty($errorMessage)) ? $errorMessage : '') ?>
                    <input type="text" placeholder="Name" name="name" id="name" class="start">
                    <input type="text" placeholder="Email" name="email" id="email" class="start">
                    <textarea name="message" placeholder="Message" id="message" cols="20" rows="10" class="start"></textarea>
                    <input id="form-button" type="submit" value="SUBMIT" class="btn btn-primary contact__form-button start">
                </form>
            </div>
        </div>
    </div>
</div>