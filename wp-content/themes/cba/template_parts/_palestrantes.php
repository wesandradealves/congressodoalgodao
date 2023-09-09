<?php 
    $query = new WP_Query( array(
        'posts_per_page'   => -1,
        'order' => 'DESC',
        'post_type'     => 'palestrante'
    ) );     
?>

<?php if ($query->have_posts()) : ?>
<section class="staff">
    <div class="container <?php echo $args['class']; ?>">
        <div class="section-header d-block">
            <h2 class="title d-block text-center">Palestrantes</h2>
        </div>
        <ul class="staff-list mt-5 d-flex align-items-stretch justify-content-center flex-wrap">
            <?php while ( $query->have_posts() ) : $query->the_post(); ?> 
                <li 
                    class="staff-list-item col-6 col-md-4 col-lg-3 mb-5">
                    <?php if(get_the_post_thumbnail_url()) : ?>
                        <div
                        data-button="popup" 
                        data-post_type="<?php echo get_post_type( $post ); ?>" 
                        data-id="<?php echo $post->ID; ?>"    
                        class="d-block thumbnail"                           
                        style="background-image: url(<?php echo get_the_post_thumbnail_url(); ?>)"
                        ></div>
                        <!--
                            <img 
                            data-button="popup" 
                            data-post_type="<?php echo get_post_type( $post ); ?>" 
                            data-id="<?php echo $post->ID; ?>" 
                            class="img-fluid d-block thumbnail" loading="lazy" src="<?php echo get_the_post_thumbnail_url(); ?>" alt="<?php echo get_the_title(); ?>">
                        -->
                    <?php endif; ?>                            
                    <h3 class="title d-block mt-4"><?php echo get_the_title(); ?></h3>
                    <p class="text d-block mt-1"><?php echo get_field('cargo'); ?></p>
                </li>
            <?php 
                endwhile;
                wp_reset_query();
                wp_reset_postdata();                    
            ?>  
        </ul>       
    </div>
</section>
<?php endif; ?> 