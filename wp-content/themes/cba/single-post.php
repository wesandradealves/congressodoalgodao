<?php get_header(); ?>
<section id="primary">
    <div class="container d-flex align-items-stretch">
        <div class="content flex-fill">
            <div class="post-header d-block mb-5">
                <?php if(get_the_post_thumbnail_url()) : ?>
                    <img class="img-fluid d-block thumbnail col-12 mb-5" loading="lazy" src="<?php echo get_the_post_thumbnail_url(); ?>" alt="<?php echo get_the_title(); ?>">
                <?php endif; ?>    
                <h1 class="title d-block"><?php echo get_the_title(); ?></h1> 
                <div class="text mt-3 d-flex align-items-center">
                    <p class="me-4"><?php the_time('d M Y') ?>, por <?php the_author_meta('display_name', get_post_field('post_author')); ?></p>     
                    <?php echo do_shortcode('[addtoany url="' . get_the_permalink() . '" title="' . get_the_title() . '"]') ?>
                </div>
            </div>
            <div class="content-inner d-block">
                <?php 
                    if ( have_posts() ) :
                        while ( have_posts() ) :
                            the_post(); 
                            the_content();
                        endwhile;
                        ?>
                        <?php 
                    endif;
                ?>
            </div>
        </div>
        <?php get_sidebar('blog'); ?>
        <div class="post-nav mt-5 pt-5 col-12 ps-5 pe-5 d-none d-lg-block">
            <?php 
                the_post_navigation( array(
                    'prev_text'  => __( 'Anterior' ),
                    'next_text'  => __( 'Próximo' ),
                ) );
            ?>
        </div>        
    </div>
</section>
<?php get_footer(); ?>