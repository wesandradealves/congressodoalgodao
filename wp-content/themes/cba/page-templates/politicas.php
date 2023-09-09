<?php /* Template Name: Políticas */ ?>
<?php get_header(); ?>
<?php 
    get_template_part('template_parts/_page-header', null, array()); 
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

                    if(get_field('rule')) {
                        get_template_part('template_parts/_rule', null, array( 'classes' => 'mt-5', 'data' => get_field('rule')));
                    }

                    if(get_field('accordion')) {
                        get_template_part('template_parts/_accordion', null, array( 'classes' => 'mt-5 mb-5', 'data' => get_field('accordion')));
                    }
                ?>
            </div>
        </div>     
    </div>
</section>
<?php get_footer(); ?>