<?php 
    if(get_field('galeria')) : 
?>
    <section class="gallery overflow-hidden <?php echo $args['class']; ?>">
        <div class="gallery-carousel">
            <?php foreach (get_field('galeria') as $url) : ?>
            <div>
                <!-- <a data-lightbox="gallery" class="gallery-item" href="<?php echo $url; ?>"> -->
                    <img class="img-fluid" loading="lazy" src="<?php echo $url; ?>" />
                <!-- </a> -->
            </div>
            <?php endforeach; ?>
        </div>
    </section>
<?php endif; ?>
