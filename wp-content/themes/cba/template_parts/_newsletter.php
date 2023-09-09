<div class="newsletter mb-5">
    <div class="container d-flex flex-column flex-lg-row flex-wrap align-items-lg-center justify-content-lg-between">
        <?php if(get_field('newsletter', 'option')['title'] || get_field('newsletter', 'option')['text']) : ?>
            <div class="col-12 col-lg-5 pe-lg-5">
                <?php if(get_field('newsletter', 'option')['title']) : ?>
                    <h2 class="title d-block"><?php echo get_field('newsletter', 'option')['title']; ?></h2>
                <?php endif; ?>
                <?php if(get_field('newsletter', 'option')['text']) : ?>
                    <p class="text d-block"><?php echo get_field('newsletter', 'option')['text']; ?></p>
                <?php endif; ?>
            </div>
        <?php endif; ?>
        <div class="flex-fill <?php if(get_field('newsletter', 'option')['title'] || get_field('newsletter', 'option')['text']) : ?> mt-5 mt-lg-0 ps-lg-5 <?php endif; ?>">
            <?php echo do_shortcode('[contact-form-7 id="'.get_field('newsletter', 'option')['form_id'].'" title="Newsletter"]'); ?>
        </div>
    </div>
</div>