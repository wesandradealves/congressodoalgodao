<?php 
    $terms = get_terms([
        'post_type' => 'comissao',
        'orderby' => 'menu_order',
        'taxonomy' => 'grupo-de-comissao',
        'hide_empty' => false
    ]);    
?>

<section class="staff">
    <div class="container <?php echo $args['class']; ?>">
        <?php 
        foreach ($terms as $term) {
            $query = new WP_Query( array(
                'post_type' => 'comissao',
                'posts_per_page' => -1,
                'order' => 'ASC',
                'orderby' => 'menu_order',
                'tax_query' => array(
                    array (
                        'taxonomy' => $term->taxonomy,
                        'field' => 'slug',
                        'terms' => $term->slug,
                    )
                )
            ) );
            if ($query->have_posts()) {
                ?>
                <div class="section-header d-block">
                    <h2 class="title d-block text-center mb-5">
                        Comissão <?php echo $term->name; ?>
                    </h2>
                </div>                
                <ul class="staff-list mt-5 d-flex align-items-stretch justify-content-center flex-wrap mb-5">
                    <?php while ( $query->have_posts() ) : $query->the_post(); ?> 
                        <li 
                        class="staff-list-item col-6 col-md-4 col-lg-3 mb-5">
                            <?php if(get_the_post_thumbnail_url()) : ?>
                                    <!--
                                    <img 
                                    <?php if($term->slug !== "organizadora") : ?>
                                        data-button="popup" 
                                        data-post_type="<?php echo get_post_type( $post ); ?>" 
                                        data-id="<?php echo $post->ID; ?>" 
                                    <?php endif; ?>
                                    class="img-fluid d-block thumbnail" loading="lazy" src="<?php echo get_the_post_thumbnail_url(); ?>" alt="<?php echo get_the_title(); ?>">
                                    -->
                                    <div
                                    <?php if($term->slug !== "organizadora") : ?>
                                        data-button="popup" 
                                        data-post_type="<?php echo get_post_type( $post ); ?>" 
                                        data-id="<?php echo $post->ID; ?>"     
                                    <?php endif; ?>            
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
                <?php 
            } else {
                ?>
                    <div class="content">
                        <div class="content-inner">
                            <div class="text d-block mt-5 text-center">
                                <p>As Comissões Organizadora e Científica do 14º CBA já estão trabalhando para confirmar<br/>palestrantes de relevância e destaque para o setor.</p>
                            </div>
                        </div>
                    </div>
                <?php 
            }
        }        
        ?>    
    </div>
</section>