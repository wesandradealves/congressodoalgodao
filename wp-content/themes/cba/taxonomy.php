<?php get_header(); ?>
<?php get_template_part('template_parts/_page-header', null, array()); ?>
<section id="primary">
    <div class="container d-flex align-items-stretch">
        <div class="content flex-fill">
            <?php 
                if ( have_posts() ) :
                    while ( have_posts() ) :
                        the_post(); 
                        get_template_part('template_parts/_post-card', null, array( 'data' => $post));
                    endwhile;

                    get_template_part('template_parts/_pagination');

                    wp_reset_query();
                    wp_reset_postdata(); 
                endif;
            ?>
        </div>
        <?php get_sidebar('blog'); ?>
    </div>
</section>
<?php get_footer(); ?>