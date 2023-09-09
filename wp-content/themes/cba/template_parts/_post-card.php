<article class="post-card mb-5">
    <div class="post-card-inner d-flex align-items-center flex-column flex-sm-row flex-wrap">
        <?php if(get_the_post_thumbnail_url()) : ?>
            <a title="<?php echo get_the_title(); ?>" href="<?php echo get_the_permalink(); ?>">
                <img class="img-fluid d-block thumbnail col-12 col-sm-4 pe-sm-4" loading="lazy" src="<?php echo get_the_post_thumbnail_url(); ?>" alt="<?php echo get_the_title(); ?>">
            </a>
        <?php endif; ?>          
        <div class="flex-fill ps-sm-4 mt-4 mt-sm-0">
            <h3 class="d-block title">
                <a href="<?php echo get_the_permalink(); ?>" title="<?php echo get_the_title(); ?>"><?php echo get_the_title(); ?></a>
            </h3>
            <div class="text mt-4 d-flex align-items-center justify-content-between">
                <p><?php echo get_the_date(); ?> <!-- por <?php echo get_the_author(); ?> --></p>
                <a href="<?php echo get_the_permalink(); ?>" title="Ler mais">Ler mais</a>
            </div>
        </div>
    </div>
</article>