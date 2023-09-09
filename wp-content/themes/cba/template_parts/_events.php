<?php 
    $query = new WP_Query( array(
        'posts_per_page'   => -1,
        'order' => 'DESC',
        'post_type'     => 'eventos-anteriores'
    ) );  

    if ($query->have_posts()) :
?>
    <section class="events">
        <div class="container">
            <div class="section-header d-block mb-5 pb-3"> 
                <h2 class="title d-block text-center">Confira como foram as edições anteriores</h2> 
                <p class="text d-block text-center mt-2">Boas lembranças para quem já participou. Uma amostra para quem ainda não teve a oportunidade.</p>
            </div>  
            <div class="events-list overflow-auto d-flex align-items-stretch pb-4">
                <?php while ( $query->have_posts() ) : 
                    $query->the_post(); ?> 
                    <div class="events-list-item">
                        <div class="card" style="background-image: url(<?php echo get_field('galeria')[0]; ?>)">
                            <div class="card-inner h-100 d-flex flex-column justify-content-end">
                                <p class="text d-block"><?php echo get_field('ano'); ?></p>
                                <h3 class="title d-block"><?php echo get_the_title(); ?></h3>
                                <a 
                                    data-button="popup" 
                                    data-post_type="<?php echo get_post_type( $post ); ?>" 
                                    data-id="<?php echo $post->ID; ?>" 
                                    href="javascript:void(0)" class="mt-4 d-block btn primary text-center me-auto">Ver mais</a>
                            </div>
                        </div> 
                    </div>
                <?php 
                    endwhile;
                    wp_reset_query();
                    wp_reset_postdata();                    
                ?>  
                    <div class="events-list-item">
                        <div class="card" style="background-image: url(<?php echo get_field('timeline_thumbnail', 'option'); ?>)">
                            <div class="card-inner h-100 d-flex flex-column justify-content-end">
                                <h3 class="title d-block">Outras Edições</h3>
                                <a 
                                    data-button="popup" 
                                    data-post_type="outras-edicoes" 
                                    href="javascript:void(0)" class="mt-4 d-block btn primary text-center me-auto">Ver mais</a>
                            </div>
                        </div> 
                    </div>                
            </div>
        </div>
    </section>
<?php endif; ?>