<?php /* Template Name: O CBA */ ?>
<?php get_header(); ?>
<?php get_template_part('template_parts/_page-header', null, array()); ?>

<?php 
    if(get_field( 'description' ) && (get_field( 'description' )['title'] || get_field( 'description' )['text'])) {
        get_template_part('template_parts/_page-description', null, array( 'class' => '', 'data' => get_field( 'description' ))); 
    }   
?>

<?php get_template_part('template_parts/_gallery', null, array( 'class' => 'pt-0'));  ?>

<?php if ( have_posts() ) : ?>
    <section class="content pb-0">
        <div class="container  d-flex align-items-start flex-wrap">
            <?php get_sidebar('cba'); ?>
            <div class="flex-fill mt-5 mt-md-0 content-inner">
                <?php 
                    while ( have_posts() ) :
                        the_post(); 
                        the_content(); 
                    endwhile; 
                ?>
            </div>
        </div>
    </section>
<?php endif; ?>

<?php 
    get_template_part('template_parts/_comissao', null, array( 'class' => '')); 
    
    get_template_part('template_parts/_events', null, array( 'class' => ''));
    
    if(get_field('ctas', 'option') && count(get_field('ctas', 'option'))) {
        $cta = array_filter(get_field('ctas', 'option'), function($item){
            if (isset($item['id']) && $item['id'] === 'faca-parte') {
                return true;
            }
            return false;
        });

        if($cta) {
            get_template_part('template_parts/_cta', null, array( 'class' => 'primary mt-0', 'data' => reset($cta))); 
        }
    }
?>
<?php get_footer(); ?>