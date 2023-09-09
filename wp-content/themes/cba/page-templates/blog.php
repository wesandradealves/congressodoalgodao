<?php /* Template Name: Blog */ ?>
<?php get_header(); ?>
<?php get_template_part('template_parts/_page-header', null, array()); ?>
<section id="primary">
    <div class="container d-flex align-items-stretch">
        <div class="content flex-fill">
            <?php 
                $query = new WP_Query(array(
                    'post_type' => 'post',
                    'order' => 'DESC',
                    'posts_per_page'      => 7, 
                    'paged'          => get_query_var('paged') 
                ));
                
                if ($query->have_posts()) {
                    while ( $query->have_posts() ) :
                        $query->the_post();
                        get_template_part('template_parts/_post-card', null, array( 'data' => $post));
                    endwhile;

                    get_template_part('template_parts/_pagination', null, array( 'query' => $query));

                    wp_reset_query();
                    wp_reset_postdata();    
                }                   
            ?>
        </div>
        <?php get_sidebar('blog'); ?>
    </div>
</section>
<?php get_footer(); ?>