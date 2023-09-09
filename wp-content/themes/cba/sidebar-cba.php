<aside class="col-12 col-md-5 col-lg-4 col-xl-3 sidebar text-center text-md-start">
    <h3 class="title d-block">Palavra do<br/>presidente</h3>
    <img src="<?php echo get_field('presidente_thumbnail'); ?>" alt="Palavra do presidente" class="mt-5 col-md-12 img-fluid" />
    <h4 class=" mt-2 name"><?php echo get_field('presidente_title'); ?></h4>
    <p class="text mt-2">
        <?php echo preg_replace("/<p.*?>(.*)?<\/p>/im","$1",str_replace(array('<p>', '</p>'), array('', ''), get_field('presidente_text'))); ?>
    </p>
</aside>