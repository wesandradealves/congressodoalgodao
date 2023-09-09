<?php get_header(); ?>
<?php 
    if(get_field('banner') && count(get_field('banner'))) {
        get_template_part('template_parts/_banner', null, array( 'data' => get_field('banner')[0])); 
    } 
    get_template_part('template_parts/_page-header', null, array()); 
    if(get_field( 'description' ) && (get_field( 'description' )['title'] || get_field( 'description' )['text'])) {
        get_template_part('template_parts/_page-description', null, array( 'class' => '', 'data' => get_field( 'description' ))); 
    }        
?>
<section id="primary" class=" pb-4 mb-4">
    <div class="container d-flex align-items-stretch">
        <div class="content flex-fill">
            <div class="content-inner d-block">
                <?php 
                    if ( have_posts() ) :
                        while ( have_posts() ) :
                            the_post(); 
                            the_content();
                        endwhile; 
                    endif;
                ?>
            </div>
        </div>     
    </div>
</section>
<?php get_footer(); ?>